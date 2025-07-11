// Simple test file for the MVP app
const app = require('../src/index');

function runTests() {
  console.log('Running tests...');
  
  // Test 1: Check if app exports correctly
  if (typeof app === 'function') {
    console.log('✓ App exports correctly');
  } else {
    console.log('✗ App export failed');
    process.exit(1);
  }
  
  // Test 2: Basic functionality test
  const request = require('http').request;
  
  // Start a test server
  const server = app.listen(0, () => {
    const port = server.address().port;
    
    // Test the health endpoint
    const options = {
      hostname: 'localhost',
      port: port,
      path: '/health',
      method: 'GET'
    };
    
    const req = request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.status === 'healthy') {
            console.log('✓ Health endpoint test passed');
          } else {
            console.log('✗ Health endpoint test failed');
            process.exit(1);
          }
        } catch (error) {
          console.log('✗ Health endpoint response parsing failed');
          process.exit(1);
        }
        
        server.close(() => {
          console.log('✓ All tests passed!');
          process.exit(0);
        });
      });
    });
    
    req.on('error', (error) => {
      console.log('✗ Request failed:', error.message);
      server.close();
      process.exit(1);
    });
    
    req.end();
  });
}

// Run tests
runTests();
