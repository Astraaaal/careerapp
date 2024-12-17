import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useJobContext } from '../../JobContext'; 

const JobSearch = () => {
  const { jobPosts } = useJobContext();

  console.log(jobPosts);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Job Listings</Text>
      {jobPosts.length > 0 ? (
        <FlatList
          data={jobPosts}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.jobItem}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.jobDescription}>{item.description}</Text>
              <Text style={styles.jobRequirements}>Requirements: {item.requirements}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noJobsText}>No jobs available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 20,
    color: '#333',
  },
  jobItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  jobDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  jobRequirements: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  applyButton: {
    marginTop: 10,
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  noJobsText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default JobSearch;
