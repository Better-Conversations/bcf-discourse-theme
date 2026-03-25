import Component from "@glimmer/component";
import { tracked, computed } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { ajax } from 'discourse/lib/ajax';
import Topic from 'discourse/models/topic';

export default class LatestTopics extends Component {
  @service siteSettings;
  @service router; // Inject the router service to access the current route
  @tracked topics = [];
  @tracked isLoading = true;

  get isHomepage() {
    // Assuming 'discovery.latest' is the route name for the homepage in your Discourse setup
    // Adjust the route name based on your Discourse configuration
 
    return this.router.currentRouteName === 'discovery.categories';
  }


  @action
  async fetchTopics() {
    try {
      let result = await ajax("/latest.json");
      var featuredUsers = result.users;
      let featuredTopics = []
      result.topic_list.topics.slice(0,4).forEach(function(topic) {
        console.log(topic)
        topic.posters.forEach(function(poster) {
          
          poster.user = $.grep(featuredUsers, function(e){ return e.id == poster.user_id; })[0];
        });
        featuredTopics.push(Topic.create(topic));
      });
      this.topics = featuredTopics
      this.isLoading = false;
     
    } catch (error) {
      console.error("Error fetching topics:", error);
      this.isLoading = false;
    }
  }

  
  constructor() {
    super(...arguments);
    
    this.fetchTopics();
  }
}
