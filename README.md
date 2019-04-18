# Robinhood Buy-Sell Module

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### CRUD API

  ### 1. Show price information for one company
  ```sh
  GET - /api/stocks/:stockId
  ```

  ### 2. Create new stock entry
  ```sh
  POST - /api/stocks/:stockId
  ```
  
  ### 3. Patch new stock price for company
  ```sh
  PATCH - /api/stocks/:stockId
  ```
  
  ### 4. Delete information for one stock
  ```sh
  DELETE - /api/stocks/:stockId
  ```
  

