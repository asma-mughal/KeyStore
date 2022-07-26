import * as React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; 
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {COLORS,icons} from '../../constants';
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
export const Map = () =>{

const [pin, setPin] = React.useState({
  latitude: 51.509865,
      longitude:-0.118092,
})
const [region, setRegion] = React.useState({
  latitude: 51.509865,
      longitude:-0.118092,
})
const link =
 "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-51.509865,-0.118092&radius=500&types=food&name=harbour&key=AIzaSyCAp6Ir10MUtYgi5xxOj40bfMXC3icJcbI";
return(  
  <>
  
   <View style={styles.container}>
       <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyCAp6Ir10MUtYgi5xxOj40bfMXC3icJcbI',
        language: 'en',
      }}
       styles={{
        container : {flex:0, position:'absolute', width:"100%", zIndex:1, padding:25,
        

      },
        listView : {backgroundColor:'red'}
      }}
    />
   
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude:  51.509865,
         longitude:-0.118092,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >

      <Marker coordinate={pin}
    pinColor="gold"
      draggable={true}
    onDragStart={(e)=> {
      console.log("Drag Start" + e.nativeEvent.coordinates)
    }}
    onDragEnd={(e)=> {
     setPin({
      latitude:e.nativeEvent.coordinate.latitude,
      longitude:e.nativeEvent.coordinate.longitude
     })
    }}
    />
     </MapView>
   </View>
   </>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });