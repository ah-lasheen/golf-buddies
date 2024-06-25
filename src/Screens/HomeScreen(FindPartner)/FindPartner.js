import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Picker, Button } from 'react-native';

const FindPartner = () => {
  const originalProfiles = [
    { name: 'John Doe', distance: 5, gender: 'male', disability: 'none' },
    { name: 'Jane Smith', distance: 3, gender: 'female', disability: 'none' },
    { name: 'Sam Wilson', distance: 10, gender: 'male', disability: 'none' },
    { name: 'Alex Johnson', distance: 2, gender: 'other', disability: 'none' },
    { name: 'Emily Davis', distance: 7, gender: 'female', disability: 'hearing impairment' },
    { name: 'Michael Brown', distance: 4, gender: 'male', disability: 'mobility impairment' },
  ];

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
    <View>
    <View style={styles.container}>
      <View style={styles.profileList}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile, index) => (
              <TouchableOpacity key={index} style={styles.profileItem}>
                <View style={styles.profilePicturePlaceholder} />
                <Text>Name: {profile.name}</Text>
                <Text>Distance: {profile.distance} miles</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text>No profiles found</Text>
          )}
        </ScrollView>
      </View>
      <View style={styles.searchBox}>
        <Text style={styles.searchTitle}>Search Preferences</Text>
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
        <Text>Distance (miles):</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter max distance"
          keyboardType="numeric"
          value={distance}
          onChangeText={(text) => setDistance(text)}
        />
        <Text>Disability:</Text>
        <Picker
          selectedValue={disability}
          style={styles.picker}
          onValueChange={(itemValue) => setDisability(itemValue)}
        >
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
    flexDirection: 'row',
    padding: 10,
  },
  profileList: {
    flex: 3,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  profileItem: {
    padding: 15,
    backgroundColor: '#e8f5e9',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#c8e6c9',
    alignItems: 'center',
  },
  profilePicturePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
    marginBottom: 10,
  },
});

export default FindPartner;
