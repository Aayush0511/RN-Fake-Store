import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {productAPIBaseURL} from '../../common/constants';
import ProductCard from '../../components/ProductCard';

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [isFetchingProducts, setIsFetchingProducts] = useState(false);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
        setIsFetchingProducts(true);
      const res = await fetch(`${productAPIBaseURL}/products`);
      const list = await res.json();
      setProductsList(list);
      setIsFetchingProducts(false);
    } catch (e) {
      console.log(e);
      setIsFetchingProducts(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {productsList.length > 0 ? (
        <FlatList
          data={productsList}
          renderItem={ProductCard}
          keyExtractor={item => item.id}
        />
      ) : isFetchingProducts ? (
        <View style={styles.subContainer}>
          <Text style={styles.textStyle}>Please wait 😃</Text>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={styles.subContainer}>
          <Text style={styles.textStyle}>Error 😢</Text>
        </View>
      )}
      <TouchableOpacity>
        <Text>View Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    padding: 20,
    fontSize: 18,
  },
});
