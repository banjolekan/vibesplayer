import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { PDFDocument, Page, Text as PDFText } from 'react-native-pdf-lib';
import axios from 'axios';

const createPDF = async (data) => {
  const page = Page.create()
    .drawText(`Data from API: ${data}`, {
      x: 5,
      y: 5,
      size: 24,
    });

  const pdfPath = `${RNFS.DocumentDirectoryPath}/sample.pdf`;

  const pdf = PDFDocument.create(pdfPath)
    .addPages(page)
    .write() // Returns a promise that resolves with the PDF's path

  console.log(`PDF created at: ${pdfPath}`);
};

const Upgrade = () => {
  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('lekanbanjo@gmail.com_0mYgeFH9EXspOFTR7yslji1W5HEVfTk08ApkhJkGyMyGV9sg6U40rysSUhFGVNAy');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Fetch Data" onPress={fetchData} />
      <Button title="Create PDF" onPress={() => createPDF(data)} />
    </View>
  );
};

// export default App;






















// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Upgrade = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Upgrade</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default Upgrade;