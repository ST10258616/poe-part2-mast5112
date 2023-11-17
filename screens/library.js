import React from "react";
import { View, Text, FlatList } from "react-native";

const BookItem = ({ book }) => {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{book.title}</Text>
      <Text style={{ fontSize: 16 }}>Author: {book.author}</Text>
      <Text style={{ fontSize: 16 }}>Genre: {book.genre}</Text>
      <Text style={{ fontSize: 16 }}>Number of pages: {book.numberOfPages}</Text>
    </View>
  );
};

const Library = () => {
  const [books, setBooks] = useState([]); 

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Library</Text>

      <FlatList
        data={books}
        renderItem={({ item }) => <BookItem book={item} />}
        keyExtractor={(book) => book.id} 
      />
    </View>
  );
};

export default Library;