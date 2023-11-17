import React, { useState } from "react";
import { Text, View } from "react-native";

const Home = () => {
  const [lastBookRead, setLastBookRead] = useState(null);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [averagePagesPerBook, setAveragePagesPerBook] = useState(0);

  const updateLastBookRead = (book) => {
    setLastBookRead(book);
  };

  const updateTotalPageCount = (totalPageCount) => {
    setTotalPageCount(totalPageCount);
  };

  const updateAveragePagesPerBook = (averagePagesPerBook) => {
    setAveragePagesPerBook(averagePagesPerBook);
  };

  return (
    <View>
      <Text>Last book read: {lastBookRead?.title}</Text>
      <Text>Total pages read: {totalPageCount}</Text>
      <Text>Average pages per book: {averagePagesPerBook}</Text>
    </View>
  );
};

export default Home;