# Say Number

This is a simple javascript program that takes a number and prints it out in English.

## Setting Up The Application On Your Local Machine 🔧

### Prerequisites

- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.

## Installation :package:

#### Downloading the application from GitHub

1. Download the application by clicking the 'Code' button and then clicking 'Download ZIP'
2. Extract the ZIP file to a folder of your choice

### Running The App :desktop_computer:

1. Open a terminal window inside of the "Section C" folder
2. Run the following command to install the required dependencies:

```
npm install
```

3. Run the following command to start the application:

```
node say-the-number
```

### Scripts :page_with_curl:

The following script will be needed in the `package.json` file to run the test suite. The `package.json` file is located in the "Section C" folder.

```json
"scripts": {
    "test": "jest"
}
```

### Testing The App :test_tube:

1. Open a terminal window inside of the "Section C" folder
2. Ensure that you have installed and started the application as described above
3. Run the following command to test the application:

```
npm test
```

## Worst-case space complexity 📈

The worst-case space complexity of this code is **O(1)**, as the size of the data that needs to be stored does not
depend on the size of the input "n".

The code uses a fixed number of variables to store intermediate results, and the size of the final result string
is also a constant, as it only needs to store a limited number of words for the digits in "n". The memory usage
of the code is independent of the size of "n", so its space complexity is constant, or O(1).
