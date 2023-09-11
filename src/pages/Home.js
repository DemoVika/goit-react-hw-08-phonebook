import { Box } from '@chakra-ui/react';
import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url("../images/fixiki-6.jpg")',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <Box
      backgroundImage="url('../images/fixiki-6.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <div style={styles.container}>
        <img src="../images/fixiki-6.jpg" alt="ggg" />
        <h1 style={styles.title}>Phonebook </h1>
      </div>
    </Box>
  );
}
