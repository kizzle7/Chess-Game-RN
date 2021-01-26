import {createStackNavigatior} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../test/home'
import Feed from '../test/feed'

const screens = {
    Home: {
        screen: Home
    },

    Feed: {
        screen: Feed
    }
}

const RootStack = createStackNavigatior(screens)
export default createAppContainer(RootStack);