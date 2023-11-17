import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(0);

  const handleSubmit = () => {
    
    updateLastBookRead({ title, author, genre, numberOfPages });
    updateTotalPageCount(totalPageCount + numberOfPages);
    updateAveragePagesPerBook(totalPageCount / (books.length + 1));
  };

  return (
    <View>
      <Text>Title:</Text>
      <TextInput value={title} onChangeText={setTitle} />
      <Text>Author:</Text>
      <TextInput value={author} onChangeText={setAuthor} />
      <Text>Genre:</Text>
      <TextInput value={genre} onChangeText={setGenre} />
      <Text>Number of pages:</Text>
      <TextInput value={numberOfPages} onChangeText={setNumberOfPages} />
      <Button title="Add Book" onPress={handleSubmit} />
    </View>
  );
};

export default AddBook;