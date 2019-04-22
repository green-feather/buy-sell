var ExpressCassandra = require('express-cassandra');

var models = ExpressCassandra.createClient({
  clientOptions: {
    contactPoints: ['127.0.0.1'],
    protocolOptions: {
      port: 9042
    },
    keyspace: 'mykeyspace',
    queryOptions: {
      consistency: ExpressCassandra.consistencies.one
    }
  },
  ormOptions: {
    defaultReplicationStrategy: {
      class: 'SimpleStrategy',
      replication_factor: 1
    },
    migration: 'safe',
  }
});

var MyModel = models.loadSchema('Person', {
  fields: {
    name: "text",
    surname: "text",
    age: "int",
    created: "timestamp"
  },
  key: ["name"]
});
