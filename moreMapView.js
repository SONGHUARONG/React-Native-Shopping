import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    Dimensions,
    MapView
} from 'react-native';


export default class MoreMapView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFirstLoad : true,
            mapRegion : undefined,
            mapRegionInput : undefined,
            annotations : []
        }
    }

    render() {
        return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>更多页面</Text> */}
            {/* <ActivityIndicator color='purple' size='large'/> */}
            
            <MapView     
                style = {styles.map}
                onRegionChange = {this._onRegionChange}
                onRegionChangeComplete = {this._onRegionChangeComplete}
                region = {this.state.mapRegion}
                annotations = {this.state.annotations}/>
        </View>
        );
    }

    _onRegionChange = (region) => {
        this.setState({ mapRegionInput: region });
    }

    _onRegionChangeComplete = (region) => {
        if (this.state.isFirstLoad) {
            this.setState({ mapRegionInput: region, annotations: this._getAnnotations(region), isFirstLoad: false });
        }
    }

    _getAnnotations = (region) => {
        return [{
            longitude: region.longitude,
            latitude: region.latitude,
            title: '你的位置'
        }];
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }

});