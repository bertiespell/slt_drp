import React, { Component } from 'react';
import Carousel from './carousel';
import { Timeline } from 'react-twitter-widgets'



class Home extends Component {
    render() {
        return (
          <div>
            <Carousel />
            <div className="things">
              <div className="thing">
                <Timeline className="thing"
                  dataSource={{
                    sourceType: 'profile',
                    screenName: 'SLTDRP'
                  }}
                  options={{
                    username: 'SLTDRP',
                    height: '500',
                    width: '400'
                  }}
                  onLoad={() => console.log('Timeline is loaded!')}
                  />
              </div>

                <div className="fb-page thing" data-href="https://www.facebook.com/slutdropleeds" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/slutdropleeds" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/slutdropleeds">SLUT DROP</a></blockquote></div>
            </div>
          </div>



        )
    }
}

export default Home;
