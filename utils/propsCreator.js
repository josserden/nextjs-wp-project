export const propsCreator = property => {
  return {
    destination: property.uri,
    title: property.title,
    image: property.image,
    bedrooms: property.propertyFeatures.bedrooms,
    bathrooms: property.propertyFeatures.bathrooms,
    hasParking: property.propertyFeatures.hasParking,
    petFriendly: property.propertyFeatures.petFriendly,
    image: property.featuredImage?.node?.sourceUrl,
    price: property.propertyFeatures.price,
  };
};
