import React, { Component } from 'react';
import Carousel from './carousel';
import { Timeline } from 'react-twitter-widgets'


class Home extends Component {
    render() {
        return (
            <div>
                <Timeline
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
        )
    }
}

export default Home;
