import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('YOUR ACCESS TOKEN');
import customMarker from ".src/images/custom_marker.png";


export default class App extends Component {

  state = { timer: null, counter: 0 };

  componentDidMount() {
    let timer = setInterval(() => {
      this.setState({ counter: this.state.counter+1 });
    }, 1000);
    this.setState({timer});
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  markers (locate) {
    /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */

    location = [];

    location[0] = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.3268,
              28.3706
            ]
          }
        }
      ]
    }

    location[1] = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.3271,
              28.3702
            ]
          }
        }
      ]
    }

    location[2] = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.3271,
              28.3696
            ]
          }
        }
      ]
    }

    location[3] = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.3264,
              28.3695
            ]
          }
        }
      ]
    }
      
    location[4] = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.3257,
              28.3695
            ]
          }
        }
      ]
    }

    location[5] = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.3255,
              28.3700
            ]
          }
        }
      ]
    }

    location[6] = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.3256,
              28.3704
            ]
          }
        }
      ]
    }

    location[7] = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.3260,
              28.3707
            ]
          }
        }
      ]
    }

    return location[locate%8];
  }

  renderAnnotations () {
    return (
      <MapboxGL.PointAnnotation
        key='pointAnnotation'
        id='pointAnnotation'
        coordinate={[77.32630491256712, 28.37013831328998]}>

        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <MapboxGL.Callout title='Dipansh was here !!' />
      </MapboxGL.PointAnnotation>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
            styleURL={MapboxGL.StyleURL.Light}
            zoomLevel={17}
            centerCoordinate={[77.32630491256712, 28.37013831328998]}
            style={styles.container}
            showUserLocation={true}> 
            {this.renderAnnotations()}

            <MapboxGL.ShapeSource id="marker-source" shape={this.markers(this.state.counter)}>
              <MapboxGL.SymbolLayer id="marker-style-layer" style={{ iconImage: customMarker }} />
            </MapboxGL.ShapeSource>

        </MapboxGL.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  },
});
