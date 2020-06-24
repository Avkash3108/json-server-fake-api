var schema = {
  "type": "object",
  "properties": {
    "pizzas": {
      "type": "array",
      "minItems": 500,
      "maxItems": 1000,
      "items": {
        "type": "object",
        "properties": {
          "availableSizes": {
            "type": "string",
            "enum": ['S, M, L', 'S, L', 'L', 'S M']
          },
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1
          },
          "name": {
            "type": "string",
            "faker": "random.word"
          },
          "price": {
            "type": "string",
            "faker": "finance.amount"
          },
          "category": {
            "type": "string",
            "enum": ['Veg', 'Non - Veg']
          },
        },
        "required": ["availableSizes", "id", "name", "price", "category"]
      }
    },
    "users": {
      "type": "array",
      "minItems": 10,
      "maxItems": 20,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          },
          "password": {
            "type": "string",
            "faker": "internet.password"
          },
          "type": {
            "type": "string",
            "enum": ['user']
          },
          "address": {
            "type": "string",
            "faker": "address.streetAddress"
          },
          "contact": {
            "type": "string",
            "faker": "phone.phoneNumber"
          }
        },
        "required": ["id", "firstName", "password", "lastName", "email", "address", "contact"]
      }
    },
    "posts": {
      "type": "array",
      "minItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "faker": "lorem.sentence"
          },
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1
          },
          "description": {
            "type": "string",
            "faker": "lorem.paragraph"
          },
          "category": {
            "type": "string",
            "enum": ['Personal', 'Corporate', 'Finance', 'Sports', 'Business', 'Car', 'Fodd', 'Music', 'Movies']
          },
          "ownerId": {
            "type": "integer"
          }
        },
        "required": ["title", "id", "description", "ownerId", "category"]
      }
    }
  },
  "required": ["users", "pizzas", "posts"]
};

module.exports = schema;
