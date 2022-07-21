import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ProductCard = ({item}) => {
  return (
    <View style={styles.productContainer}>
      <Text style={styles.titleStyle}>{item.title}</Text>
      <View style={styles.wrapperStyle}>
        <Image style={styles.imgStyle} source={{uri: item.image}} />
        <View style={{paddingLeft: 10}}>
          <Text>{`$ ${item.price}`}</Text>
          <Text>{`⭐️ ${item.rating.rate} / 5 (${item.rating.count})`}</Text>
          <Text>{item.category}</Text>
        </View>
      </View>
      <Text>{item.description}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={[styles.titleStyle, styles.addText]}>+ ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productContainer: {
    backgroundColor: '#F7F7FA',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    minHeight: 60,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'gray',
  },
  wrapperStyle: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  addText: {
    color: "#0F0"
  },
  addButton: {
    marginTop: 4
  }
});
