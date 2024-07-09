/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker, Button, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import HeaderButtons from '../../components/HeaderButtons/HeaderButtons';
import { useNavigation} from '@react-navigation/native';

const FindPartner = () => {

  const navigation = useNavigation();

  const originalProfiles = [
      { name: 'Sam Wilson', distance: 10, gender: 'male', disability: 'none', image: require('../../assets/originalProfiles/sam_wilson.png') },
      { name: 'Alex Johnson', distance: 2, gender: 'other', disability: 'none', image: require('../../assets/originalProfiles/alex_johnson.png') },
      { name: 'Emily Davis', distance: 7, gender: 'female', disability: 'hearing impairment', image: require('../../assets/originalProfiles/emily_davis.png') },
      { name: 'Michael Brown', distance: 4, gender: 'male', disability: 'mobility impairment', image: require('../../assets/originalProfiles/michael_brown.png') },
      { name: 'Alice Walker', distance: 12, gender: 'female', disability: 'none', image: require('../../assets/originalProfiles/alice_walker.png') },
      { name: 'Bob Harris', distance: 15, gender: 'male', disability: 'visual impairment', image: require('../../assets/originalProfiles/bob_harris.png') },
      { name: 'Charlie Martin', distance: 8, gender: 'male', disability: 'none', image: require('../../assets/originalProfiles/charlie_martin.png') },
      { name: 'David Lee', distance: 14, gender: 'male', disability: 'none', image: require('../../assets/originalProfiles/david_lee.png') },
      { name: 'Eva Clark', distance: 6, gender: 'female', disability: 'hearing impairment', image: require('../../assets/originalProfiles/eva_clark.png') },
      { name: 'Frank White', distance: 3, gender: 'male', disability: 'mobility impairment', image: require('../../assets/originalProfiles/frank_white.png') },
      { name: 'Grace Lewis', distance: 11, gender: 'female', disability: 'none', image: require('../../assets/originalProfiles/grace_lewis.png') },
      { name: 'Hannah Young', distance: 9, gender: 'female', disability: 'visual impairment', image: require('../../assets/originalProfiles/hannah_young.png') },
      { name: 'Ivan Scott', distance: 7, gender: 'male', disability: 'none', image: require('../../assets/originalProfiles/ivan_scott.png') },
      { name: 'Jack King', distance: 13, gender: 'male', disability: 'none', image: require('../../assets/originalProfiles/jack_king.png') },
      { name: 'Katie Green', distance: 5, gender: 'female', disability: 'hearing impairment', image: require('../../assets/originalProfiles/katie_green.png') },
      { name: 'Liam Hall', distance: 2, gender: 'male', disability: 'mobility impairment', image: require('../../assets/originalProfiles/liam_hall.png') },
      { name: 'Mona Allen', distance: 10, gender: 'female', disability: 'none', image: require('../../assets/originalProfiles/mona_allen.png') },
      { name: 'Nathan Wright', distance: 4, gender: 'male', disability: 'visual impairment', image: require('../../assets/originalProfiles/nathan_wright.png') },
      { name: 'Olivia Lopez', distance: 6, gender: 'female', disability: 'none', image: require('../../assets/originalProfiles/olivia_lopez.png') },
      { name: 'Paul Hill', distance: 9, gender: 'male', disability: 'none', image: require('../../assets/originalProfiles/paul_hill.png') },
      { name: 'Quinn Adams', distance: 8, gender: 'other', disability: 'hearing impairment', image: require('../../assets/originalProfiles/quinn_adams.png') },
      { name: 'Rachel Baker', distance: 5, gender: 'female', disability: 'mobility impairment', image: require('../../assets/originalProfiles/rachel_baker.png') },
      { name: 'Sam Nelson', distance: 3, gender: 'male', disability: 'none', image: require('../../assets/originalProfiles/sam_nelson.png') },
      { name: 'Tina Carter', distance: 10, gender: 'female', disability: 'visual impairment', image: require('../../assets/originalProfiles/tina_carter.png') },
      { name: 'Uma Mitchell', distance: 7, gender: 'female', disability: 'none', image: require('../../assets/originalProfiles/uma_mitchell.png') },
      { name: 'Victor Perez', distance: 6, gender: 'male', disability: 'none', image: require('../../assets/originalProfiles/victor_perez.png') },
      { name: 'Wendy Roberts', distance: 13, gender: 'female', disability: 'hearing impairment', image: require('../../assets/originalProfiles/wendy_roberts.png') },
      { name: 'Xander Turner', distance: 11, gender: 'male', disability: 'mobility impairment', image: require('../../assets/originalProfiles/xander_turner.png') },
      { name: 'Yara Phillips', distance: 4, gender: 'female', disability: 'none', image: require('../../assets/originalProfiles/yara_phillips.png') }, 
      { name: 'John Doe', distance: 5, gender: 'male', disability: 'none', image: require('../../assets/originalProfiles/john_doe.png') },
      { name: 'Jane Smith', distance: 3, gender: 'female', disability: 'none', image: require('../../assets/originalProfiles/jane_smith.png') },  
  ];

  
  const onHomeButtonPressed = () => {
    
    navigation.navigate('Home');
  }


  const [gender, setGender] = useState('');
  const [distance, setDistance] = useState('');
  const [disability, setDisability] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState(originalProfiles);

  const handleSearch = () => {
    let filtered = originalProfiles;

    if (gender) {
      filtered = filtered.filter(profile => profile.gender === gender);
    }
    if (distance) {
      filtered = filtered.filter(profile => profile.distance <= parseInt(distance));
    }
    if (disability) {
      filtered = filtered.filter(profile => profile.disability === disability);
    }

    console.log('Filtered Profiles after search:', filtered);
    setFilteredProfiles(filtered);
  };

  return (
    
    //first displays header components including buttons at top of screen
    //second displays the profile lists
    //then displays search preferences and options

    <View style={styles.container}>
      
      <View style={styles.header}>
        
        <HeaderButtons/>
        
      </View>
      
      
      <View style={styles.content}>
      <View style={styles.profileList}>
        <View style={styles.profileGrid}>
          {filteredProfiles.map((profile, index) => (
            <TouchableOpacity key={index} style={styles.profileItem}>
              <Image 
                style={styles.profilePicturePlaceholder} 
                source={profile.image}
              />
              <Text>Name: {profile.name}</Text>
              <Text>Distance: {profile.distance} miles</Text>
            </TouchableOpacity>
          ))}
        </View>
        <marketplaceButton/>
        <bettingButton/>
      </View>
      
      <View style={styles.searchBox}>
        <Text style={styles.searchTitle}>Search by:</Text>
        <Text>Gender:</Text>
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
        
        
        <Text>Distance (miles): {distance}</Text>
          <Slider
            style={{ width: '100%', height: 45 }}
            minimumValue={1}
            maximumValue={100}
            step={1}
            value={distance}
            onValueChange={(value) => setDistance(value)}
        />
        
        
        <Text>Disability:</Text>
        <Picker
          selectedValue={disability}
          style={styles.picker}
          onValueChange={(itemValue) => setDisability(itemValue)}>

          <Picker.Item label="Select Disability" value="" />
          <Picker.Item label="None" value="none" />
          <Picker.Item label="Visual Impairment" value="visual impairment" />
          <Picker.Item label="Hearing Impairment" value="hearing impairment" />
          <Picker.Item label="Mobility Impairment" value="mobility impairment" />
        </Picker>
        
        <Button title="Search" onPress={handleSearch} />
       
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
  },
  profileGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  spacer: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  profileList: {
    flex: 3,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  profileItem: {
    width: '49%',
    padding: 15,
    backgroundColor: '#e8f5e9',
    marginBottom: 10,
    marginHorizontal: 2,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#c8e6c9',
    alignItems: 'center',
    height: 500, // Adjust this value to make the profile item taller
  },
  profilePicturePlaceholder: {
    width: '95%', // Make it a square that fits the width of the profile item
    height: 420, // Adjust the height to fit within the profile item
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#c8e6c9',
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
  searchBox: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  searchTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#4caf50',
  },
  searchInput: {
    height: 40,
    borderColor: '#c8e6c9',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  picker: {
    height: 40,
    marginBottom: 25,
  },
});

export default FindPartner;