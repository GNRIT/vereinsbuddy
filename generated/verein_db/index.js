
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.EinsatzScalarFieldEnum = {
  id: 'id',
  datum: 'datum',
  beschreibung: 'beschreibung',
  ort: 'ort',
  art: 'art'
};

exports.Prisma.Ff_mitgliedScalarFieldEnum = {
  id: 'id',
  person_id: 'person_id',
  eintrittsdatum: 'eintrittsdatum',
  austrittsdatum: 'austrittsdatum',
  status: 'status'
};

exports.Prisma.Funktion_ffScalarFieldEnum = {
  id: 'id',
  name: 'name',
  ist_admin: 'ist_admin'
};

exports.Prisma.Funktion_jfScalarFieldEnum = {
  id: 'id',
  name: 'name',
  ist_admin: 'ist_admin'
};

exports.Prisma.Jf_erziehungsberechtigterScalarFieldEnum = {
  id: 'id',
  jf_mitglied_id: 'jf_mitglied_id',
  person_id: 'person_id'
};

exports.Prisma.Jf_mitgliedScalarFieldEnum = {
  id: 'id',
  person_id: 'person_id',
  eintrittsdatum: 'eintrittsdatum',
  austrittsdatum: 'austrittsdatum',
  status: 'status'
};

exports.Prisma.Mitglied_funktionenScalarFieldEnum = {
  id: 'id',
  mitglied_id: 'mitglied_id',
  funktion_id: 'funktion_id',
  typ: 'typ'
};

exports.Prisma.Mitglied_loginScalarFieldEnum = {
  id: 'id',
  benutzer_id: 'benutzer_id',
  mitglied_id: 'mitglied_id',
  ty: 'ty'
};

exports.Prisma.PersonScalarFieldEnum = {
  id: 'id',
  vorname: 'vorname',
  name: 'name',
  geburtsdatum: 'geburtsdatum',
  email: 'email'
};

exports.Prisma.TeilnahmeScalarFieldEnum = {
  id: 'id',
  mitglied_id: 'mitglied_id',
  veranstaltung_id: 'veranstaltung_id',
  typ: 'typ'
};

exports.Prisma.UebungsabendScalarFieldEnum = {
  id: 'id',
  datum: 'datum',
  thema: 'thema'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.einsatzOrderByRelevanceFieldEnum = {
  beschreibung: 'beschreibung',
  ort: 'ort'
};

exports.Prisma.funktion_ffOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.funktion_jfOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.personOrderByRelevanceFieldEnum = {
  vorname: 'vorname',
  name: 'name',
  email: 'email'
};

exports.Prisma.uebungsabendOrderByRelevanceFieldEnum = {
  thema: 'thema'
};
exports.mitglied_funktionen_typ = exports.$Enums.mitglied_funktionen_typ = {
  ff: 'ff',
  jf: 'jf'
};

exports.mitglied_login_ty = exports.$Enums.mitglied_login_ty = {
  ff: 'ff',
  jf: 'jf'
};

exports.teilnahme_typ = exports.$Enums.teilnahme_typ = {
  einsatz: 'einsatz',
  uebung: 'uebung'
};

exports.einsatz_art = exports.$Enums.einsatz_art = {
  brand: 'brand',
  hilfeleistung: 'hilfeleistung',
  sonstiges: 'sonstiges'
};

exports.ff_mitglied_status = exports.$Enums.ff_mitglied_status = {
  aktiv: 'aktiv',
  anw_rter: 'anw_rter',
  ausgetreten: 'ausgetreten'
};

exports.jf_mitglied_status = exports.$Enums.jf_mitglied_status = {
  aktiv: 'aktiv',
  anw_rter: 'anw_rter',
  ausgetreten: 'ausgetreten'
};

exports.Prisma.ModelName = {
  einsatz: 'einsatz',
  ff_mitglied: 'ff_mitglied',
  funktion_ff: 'funktion_ff',
  funktion_jf: 'funktion_jf',
  jf_erziehungsberechtigter: 'jf_erziehungsberechtigter',
  jf_mitglied: 'jf_mitglied',
  mitglied_funktionen: 'mitglied_funktionen',
  mitglied_login: 'mitglied_login',
  person: 'person',
  teilnahme: 'teilnahme',
  uebungsabend: 'uebungsabend'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\oncle\\next\\vereinsbuddy\\generated\\verein_db",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\oncle\\next\\vereinsbuddy\\prisma\\schema.verein_db.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_VEREINDB",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/verein_db\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL_VEREINDB\")\n}\n\nmodel einsatz {\n  id           Int         @id @default(autoincrement())\n  datum        DateTime    @db.DateTime(0)\n  beschreibung String?     @db.Text\n  ort          String?     @db.VarChar(255)\n  art          einsatz_art\n}\n\nmodel ff_mitglied {\n  id                  Int                   @id @default(autoincrement())\n  person_id           Int\n  eintrittsdatum      DateTime              @db.Date\n  austrittsdatum      DateTime?             @db.Date\n  status              ff_mitglied_status    @default(aktiv)\n  person              person                @relation(fields: [person_id], references: [id], onUpdate: Restrict, map: \"ff_mitglied_ibfk_1\")\n  mitglied_funktionen mitglied_funktionen[]\n  teilnahme           teilnahme[]\n\n  @@index([person_id], map: \"person_id\")\n}\n\nmodel funktion_ff {\n  id                  Int                   @id @default(autoincrement())\n  name                String                @db.VarChar(100)\n  ist_admin           Boolean               @default(false)\n  mitglied_funktionen mitglied_funktionen[]\n}\n\nmodel funktion_jf {\n  id        Int     @id @default(autoincrement())\n  name      String  @db.VarChar(100)\n  ist_admin Boolean @default(false)\n}\n\nmodel jf_erziehungsberechtigter {\n  id             Int         @id @default(autoincrement())\n  jf_mitglied_id Int\n  person_id      Int\n  jf_mitglied    jf_mitglied @relation(fields: [jf_mitglied_id], references: [id], onUpdate: Restrict, map: \"jf_erziehungsberechtigter_ibfk_1\")\n  person         person      @relation(fields: [person_id], references: [id], onUpdate: Restrict, map: \"jf_erziehungsberechtigter_ibfk_2\")\n\n  @@index([jf_mitglied_id], map: \"jf_mitglied_id\")\n  @@index([person_id], map: \"person_id\")\n}\n\nmodel jf_mitglied {\n  id                        Int                         @id @default(autoincrement())\n  person_id                 Int\n  eintrittsdatum            DateTime                    @db.Date\n  austrittsdatum            DateTime?                   @db.Date\n  status                    jf_mitglied_status          @default(aktiv)\n  jf_erziehungsberechtigter jf_erziehungsberechtigter[]\n  person                    person                      @relation(fields: [person_id], references: [id], onUpdate: Restrict, map: \"jf_mitglied_ibfk_1\")\n\n  @@index([person_id], map: \"person_id\")\n}\n\nmodel mitglied_funktionen {\n  id          Int                     @id @default(autoincrement())\n  mitglied_id Int\n  funktion_id Int\n  typ         mitglied_funktionen_typ\n  ff_mitglied ff_mitglied             @relation(fields: [mitglied_id], references: [id], onUpdate: Restrict, map: \"mitglied_funktionen_ibfk_1\")\n  funktion_ff funktion_ff             @relation(fields: [funktion_id], references: [id], onUpdate: Restrict, map: \"mitglied_funktionen_ibfk_2\")\n\n  @@index([funktion_id], map: \"funktion_id\")\n  @@index([mitglied_id], map: \"mitglied_id\")\n}\n\nmodel mitglied_login {\n  id          Int               @id @default(autoincrement())\n  benutzer_id Int\n  mitglied_id Int\n  ty          mitglied_login_ty\n}\n\nmodel person {\n  id                        Int                         @id @default(autoincrement())\n  vorname                   String                      @db.VarChar(100)\n  name                      String                      @db.VarChar(100)\n  geburtsdatum              DateTime?                   @db.Date\n  email                     String                      @db.VarChar(255)\n  ff_mitglied               ff_mitglied[]\n  jf_erziehungsberechtigter jf_erziehungsberechtigter[]\n  jf_mitglied               jf_mitglied[]\n}\n\nmodel teilnahme {\n  id               Int           @id @default(autoincrement())\n  mitglied_id      Int\n  veranstaltung_id Int\n  typ              teilnahme_typ\n  ff_mitglied      ff_mitglied   @relation(fields: [mitglied_id], references: [id], onUpdate: Restrict, map: \"teilnahme_ibfk_1\")\n\n  @@index([mitglied_id], map: \"mitglied_id\")\n}\n\nmodel uebungsabend {\n  id    Int      @id @default(autoincrement())\n  datum DateTime @db.DateTime(0)\n  thema String?  @db.VarChar(255)\n}\n\nenum mitglied_funktionen_typ {\n  ff\n  jf\n}\n\nenum mitglied_login_ty {\n  ff\n  jf\n}\n\nenum teilnahme_typ {\n  einsatz\n  uebung\n}\n\nenum einsatz_art {\n  brand\n  hilfeleistung\n  sonstiges\n}\n\nenum ff_mitglied_status {\n  aktiv\n  anw_rter    @map(\"anwärter\")\n  ausgetreten\n}\n\nenum jf_mitglied_status {\n  aktiv\n  anw_rter    @map(\"anwärter\")\n  ausgetreten\n}\n",
  "inlineSchemaHash": "ebf95ec34a9d2f8c3bf67d87f201a36c6cfc48239ea8c066cec233212639b034",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/verein_db",
    "verein_db",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"einsatz\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"datum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"beschreibung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"art\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einsatz_art\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ff_mitglied\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"person_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eintrittsdatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"austrittsdatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ff_mitglied_status\",\"nativeType\":null,\"default\":\"aktiv\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"person\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"person\",\"nativeType\":null,\"relationName\":\"ff_mitgliedToperson\",\"relationFromFields\":[\"person_id\"],\"relationToFields\":[\"id\"],\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mitglied_funktionen\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mitglied_funktionen\",\"nativeType\":null,\"relationName\":\"ff_mitgliedTomitglied_funktionen\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teilnahme\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"teilnahme\",\"nativeType\":null,\"relationName\":\"ff_mitgliedToteilnahme\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"funktion_ff\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ist_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mitglied_funktionen\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mitglied_funktionen\",\"nativeType\":null,\"relationName\":\"funktion_ffTomitglied_funktionen\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"funktion_jf\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ist_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"jf_erziehungsberechtigter\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jf_mitglied_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"person_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jf_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jf_mitglied\",\"nativeType\":null,\"relationName\":\"jf_erziehungsberechtigterTojf_mitglied\",\"relationFromFields\":[\"jf_mitglied_id\"],\"relationToFields\":[\"id\"],\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"person\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"person\",\"nativeType\":null,\"relationName\":\"jf_erziehungsberechtigterToperson\",\"relationFromFields\":[\"person_id\"],\"relationToFields\":[\"id\"],\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"jf_mitglied\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"person_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eintrittsdatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"austrittsdatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"jf_mitglied_status\",\"nativeType\":null,\"default\":\"aktiv\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jf_erziehungsberechtigter\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jf_erziehungsberechtigter\",\"nativeType\":null,\"relationName\":\"jf_erziehungsberechtigterTojf_mitglied\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"person\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"person\",\"nativeType\":null,\"relationName\":\"jf_mitgliedToperson\",\"relationFromFields\":[\"person_id\"],\"relationToFields\":[\"id\"],\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"mitglied_funktionen\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mitglied_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"funktion_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typ\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mitglied_funktionen_typ\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied\",\"nativeType\":null,\"relationName\":\"ff_mitgliedTomitglied_funktionen\",\"relationFromFields\":[\"mitglied_id\"],\"relationToFields\":[\"id\"],\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"funktion_ff\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"funktion_ff\",\"nativeType\":null,\"relationName\":\"funktion_ffTomitglied_funktionen\",\"relationFromFields\":[\"funktion_id\"],\"relationToFields\":[\"id\"],\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"mitglied_login\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"benutzer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mitglied_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ty\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mitglied_login_ty\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"person\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vorname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"geburtsdatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied\",\"nativeType\":null,\"relationName\":\"ff_mitgliedToperson\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jf_erziehungsberechtigter\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jf_erziehungsberechtigter\",\"nativeType\":null,\"relationName\":\"jf_erziehungsberechtigterToperson\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jf_mitglied\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jf_mitglied\",\"nativeType\":null,\"relationName\":\"jf_mitgliedToperson\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"teilnahme\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mitglied_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"veranstaltung_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typ\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"teilnahme_typ\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied\",\"nativeType\":null,\"relationName\":\"ff_mitgliedToteilnahme\",\"relationFromFields\":[\"mitglied_id\"],\"relationToFields\":[\"id\"],\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"uebungsabend\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"datum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thema\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"mitglied_funktionen_typ\":{\"values\":[{\"name\":\"ff\",\"dbName\":null},{\"name\":\"jf\",\"dbName\":null}],\"dbName\":null},\"mitglied_login_ty\":{\"values\":[{\"name\":\"ff\",\"dbName\":null},{\"name\":\"jf\",\"dbName\":null}],\"dbName\":null},\"teilnahme_typ\":{\"values\":[{\"name\":\"einsatz\",\"dbName\":null},{\"name\":\"uebung\",\"dbName\":null}],\"dbName\":null},\"einsatz_art\":{\"values\":[{\"name\":\"brand\",\"dbName\":null},{\"name\":\"hilfeleistung\",\"dbName\":null},{\"name\":\"sonstiges\",\"dbName\":null}],\"dbName\":null},\"ff_mitglied_status\":{\"values\":[{\"name\":\"aktiv\",\"dbName\":null},{\"name\":\"anw_rter\",\"dbName\":\"anwärter\"},{\"name\":\"ausgetreten\",\"dbName\":null}],\"dbName\":null},\"jf_mitglied_status\":{\"values\":[{\"name\":\"aktiv\",\"dbName\":null},{\"name\":\"anw_rter\",\"dbName\":\"anwärter\"},{\"name\":\"ausgetreten\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/verein_db/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/verein_db/schema.prisma")
