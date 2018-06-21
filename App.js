import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import customMarker from "./assets/custom_marker.png";
import customMarker2 from "./assets/map_marker.png";
import dot from "./assets/dot.png";

MapboxGL.setAccessToken('pk.eyJ1IjoiZGlwYW5zaGtoYW5kZWx3YWwiLCJhIjoiY2ppbGEyMmhxMmRpMjN3bGhiOXZvc3h3NSJ9.mG4VE4p57tLdzgUn2HqZPg');

export default class App extends Component {

  markers1 () {
    /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
    locations = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53721237182617,
              13.012502403249806
            ]
          },
          "id": "1"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53809213638304,
              13.013380481398094
            ]
          },
          "id": "2"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53596782684326,
              13.012335149916604
            ]
          },
          "id": "3"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53521680831909,
              13.012439683263072
            ]
          },
          "id": "4"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53468036651611,
              13.013213228657238
            ]
          },
          "id": "5"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53560304641724,
              13.011227093734277
            ]
          },
          "id": "6"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53613948822021,
              13.010495355804814
            ]
          },
          "id": "7"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53676176071166,
              13.010244473731893
            ]
          },
          "id": "8"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53755569458008,
              13.010620796746073
            ]
          },
          "id": "9"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53785610198975,
              13.011498881558094
            ]
          },
          "id": "10"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53759860992432,
              13.012209709842631
            ]
          },
          "id": "11"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53852128982544,
              13.011958829504321
            ]
          },
          "id": "12"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.5381350517273,
              13.012648749823837
            ]
          },
          "id": "13"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53485202789307,
              13.010997119189128
            ]
          },
          "id": "14"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53448724746704,
              13.01187520266847
            ]
          },
          "id": "15"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53652572631836,
              13.0096799881398
            ]
          },
          "id": "16"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53804922103882,
              13.010495355804814
            ]
          },
          "id": "17"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.5366759300232,
              13.012481496589334
            ]
          },
          "id": "18"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53639698028564,
              13.013380481398094
            ]
          },
          "id": "19"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53708362579344,
              13.01187520266847
            ]
          },
          "id": "20"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.5344443321228,
              13.0108298648405
            ]
          },
          "id": "21"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.53856420516968,
              13.011582508520874
            ]
          },
          "id": "22"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  77.53506660461426,
                  13.01423764992391
                ],
                [
                  77.53470182418823,
                  13.014279462946913
                ],
                [
                  77.53418684005737,
                  13.013568640596667
                ],
                [
                  77.53403663635254,
                  13.01304597580355
                ],
                [
                  77.5339937210083,
                  13.012544216565496
                ],
                [
                  77.5339937210083,
                  13.01103893275865
                ],
                [
                  77.53461599349976,
                  13.010244473731893
                ],
                [
                  77.53540992736816,
                  13.009868150146612
                ],
                [
                  77.5359034538269,
                  13.009429105241983
                ],
                [
                  77.53665447235107,
                  13.009533639813576
                ],
                [
                  77.53785610198975,
                  13.009993591405165
                ],
                [
                  77.53854274749756,
                  13.010746237623874
                ],
                [
                  77.5389289855957,
                  13.011206186966263
                ],
                [
                  77.53901481628418,
                  13.011645228724445
                ],
                [
                  77.53901481628418,
                  13.01269056311482
                ],
                [
                  77.53875732421874,
                  13.013275948448278
                ],
                [
                  77.53867149353027,
                  13.013944958565393
                ],
                [
                  77.53764152526855,
                  13.014174930376182
                ],
                [
                  77.53714799880981,
                  13.014383995473574
                ],
                [
                  77.53592491149902,
                  13.014258556436284
                ],
                [
                  77.53506660461426,
                  13.01423764992391
                ]
              ]
            ]
          }
        }
      ]
    }
    return locations;
  }

  markers2() {
    locations = {
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              77.5368,
              13.01264
            ],
            "type": "Point"
          },
          "id": "14cf157527a3f6b9ddb08dda360b069b"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              77.537285,
              13.0125
            ],
            "type": "Point"
          },
          "id": "188214822182f18614d74faad957fecc"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              77.537062,
              13.012585
            ],
            "type": "Point"
          },
          "id": "3020bc8be87d32f833a695b3eab9e0f8"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              77.536962,
              13.011845
            ],
            "type": "Point"
          },
          "id": "4aa4c4fedd982cb10359c39242c50f8e"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              77.536327,
              13.011712
            ],
            "type": "Point"
          },
          "id": "778d20dc7a4cba75220a990729c6362d"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              77.536807,
              13.011815
            ],
            "type": "Point"
          },
          "id": "7def1ae818b4a741bee90d612a7d00d7"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              77.536141,
              13.012494
            ],
            "type": "Point"
          },
          "id": "7eae2c833db2a598187037dfddf7a35d"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              77.537043,
              13.011718
            ],
            "type": "Point"
          },
          "id": "912f5fae6fbb5318fd50acb11623c38b"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              77.536614,
              13.011881
            ],
            "type": "Point"
          },
          "id": "96a447bbfe4f2c08a3cfe00c24c7e1dd"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              77.535867,
              13.012264
            ],
            "type": "Point"
          },
          "id": "ae8e54125b65701a660a629e11b4736a"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              77.536452,
              13.011784
            ],
            "type": "Point"
          },
          "id": "cd66ff180bfa3a8ed32200262dcd937e"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              77.536601,
              13.012627
            ],
            "type": "Point"
          },
          "id": "e60127802500fbc490de59642793ac5b"
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              77.536352,
              13.012555
            ],
            "type": "Point"
          },
          "id": "eb6015b88eb51a726e18ce8e17e35970"
        }
      ],
      "type": "FeatureCollection"
    }

    return locations;
  }

  render() {
    var a=0;
    x = this.markers2();
    y = this.markers1();
    console.log(x.type);
    console.log(x.features);
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
            styleURL={MapboxGL.StyleURL.Light}
            zoomLevel={10}
            centerCoordinate={[77.60948181152344, 12.980471333463804]}
            style={styles.container}
            showUserLocation={true}> 
            {
              y.features.map(( item, id ) => {
                console.log(item);
                id1 = 'marker-source'+item.id;
                id2 = 'marker-style-layer'+item.id;
                return (
                  <MapboxGL.ShapeSource id= {id1} shape={item}>
                      <MapboxGL.SymbolLayer id={id2} style={{ iconImage : customMarker}} />
                  </MapboxGL.ShapeSource>
              );
            })
          }

          {
            x.features.map(( item, id ) => {
              console.log(item);
              id1 = 'marker-source'+item.id;
              id2 = 'marker-style-layer'+item.id;
              return (
                <MapboxGL.ShapeSource id= {id1} shape={item}>
                    <MapboxGL.SymbolLayer id={id2} style={{ iconImage: customMarker2 }} />
                </MapboxGL.ShapeSource>
              );
            })
          }

        </MapboxGL.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
