// Read the file from disk
fetch('data.json')
// Convert file into Json structure
  .then(response => response.json())
  .then(data => {
    console.log('Data fetched successfully!');
    // Iterate through the array using forEach
    data.forEach(bandInfo => {
      console.groupCollapsed(`Band: ${bandInfo.band}`);
      console.log(`Formed in: ${bandInfo.formedin}`);
      console.log(`Origin: ${bandInfo.origin}`);

      // Use an if-else statement to handle different actions based on the band
      const bandName = bandInfo.band;
      if (bandName === 'Five Finger Death Punch') {
        console.log('Five Finger Death Punch brings a powerful sound!');
      } else if (bandName === 'Marilyn Manson') {
        console.log('Marilyn Manson is known for his unique and provocative style!');
      } else if (bandName === 'Texas Hippie Coalition') {
        console.log('Texas Hippie Coalition delivers a mix of southern rock and heavy metal!');
      } else {
        console.log('This band is awesome too!');
      }

      // Iterate through the albums array for each band
      console.groupCollapsed('Albums:');
      bandInfo.albums.forEach(album => {
        console.log(`  Album: ${album.title}`);
        console.log(`  Year: ${album.year}`);
        console.log(`  Tracks: ${album.tracks}`);
      });
      console.groupEnd(); // End of Albums group

      console.groupEnd(); // End of Band group
    });
  })
  .catch(error => console.error('Error fetching JSON file:', error));
