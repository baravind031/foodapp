import React, {useEffect, useState} from 'react';

import { View, Text, FlatList, StyleSheet } from 'react-native';

import  Product  from './Product.js';

import { getProducts } from './ProductsService.js';

function ProductsList ({navigation}) {

function renderProduct({item: product}) {

    return (

      <div>
        <Product 
      {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,

        });

      }}

      />
      </div>
      

    );

  }

  const [products, setProducts] = useState([]);

  useEffect(() => {

    setProducts(getProducts());

  });

  return (

    <FlatList

      style={styles.productsList}

      contentContainerStyle={styles.productsListContainer}

      keyExtractor={(item) => item.id.toString()}

      data={products}

      renderItem={renderProduct}

    />

  );

}

export default ProductsList;
const styles = StyleSheet.create({

  productsList: {

    backgroundColor: '#eeeeee',

  },

  productsListContainer: {

    backgroundColor: '#eeeeee',

    paddingVertical: 8,

    marginHorizontal: 8,

  },
});