
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

exports.Prisma.AllergieScalarFieldEnum = {
  ID: 'ID',
  JF_Mitglied_ID: 'JF_Mitglied_ID',
  FF_Mitglied_ID: 'FF_Mitglied_ID',
  Allergie: 'Allergie',
  Beschreibung: 'Beschreibung',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.DienstgradScalarFieldEnum = {
  ID: 'ID',
  Abkuerzung_maennlich: 'Abkuerzung_maennlich',
  Beschreibung_maennlich: 'Beschreibung_maennlich',
  Abkuerzung_weiblich: 'Abkuerzung_weiblich',
  Beschreibung_weiblich: 'Beschreibung_weiblich',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.DienstabendScalarFieldEnum = {
  ID: 'ID',
  Datum: 'Datum',
  Thema: 'Thema',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.EinheitScalarFieldEnum = {
  ID: 'ID',
  Abkuerzung: 'Abkuerzung',
  Beschreibung: 'Beschreibung',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.EinsatzScalarFieldEnum = {
  ID: 'ID',
  Einsatznummer: 'Einsatznummer',
  Datum_Anfang: 'Datum_Anfang',
  Uhrzeit_Anfang: 'Uhrzeit_Anfang',
  Datum_Ende: 'Datum_Ende',
  Uhrzeit_Ende: 'Uhrzeit_Ende',
  Beschreibung: 'Beschreibung',
  Strasse: 'Strasse',
  Hausnummer: 'Hausnummer',
  Postleitzahl: 'Postleitzahl',
  Ort: 'Ort',
  Art: 'Art',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.EinteilungScalarFieldEnum = {
  ID: 'ID',
  Einsatz_ID: 'Einsatz_ID',
  Dienstabend_ID: 'Dienstabend_ID',
  Fahrzeug_ID: 'Fahrzeug_ID',
  FF_Mitglied_ID: 'FF_Mitglied_ID',
  Einheit_ID: 'Einheit_ID'
};

exports.Prisma.FahrzeugScalarFieldEnum = {
  ID: 'ID',
  Kennzeichen: 'Kennzeichen',
  Fahrzeugtyp: 'Fahrzeugtyp',
  Besatzungsstaerke: 'Besatzungsstaerke',
  Status: 'Status',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Ff_mitgliedScalarFieldEnum = {
  ID: 'ID',
  Person_ID: 'Person_ID',
  Eintrittsdatum: 'Eintrittsdatum',
  Austrittsdatum: 'Austrittsdatum',
  Aufnahmedatum: 'Aufnahmedatum',
  Status: 'Status',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Ff_mitglied_lehrgangScalarFieldEnum = {
  ID: 'ID',
  FF_Mitglied_ID: 'FF_Mitglied_ID',
  Lehrgang_ID: 'Lehrgang_ID',
  Datum_bestanden: 'Datum_bestanden',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Funktion_ffScalarFieldEnum = {
  ID: 'ID',
  Name: 'Name',
  Ist_Admin: 'Ist_Admin',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Funktion_jfScalarFieldEnum = {
  ID: 'ID',
  Name: 'Name',
  Ist_Admin: 'Ist_Admin',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Jf_erziehungsberechtigterScalarFieldEnum = {
  ID: 'ID',
  JF_Mitglied_ID: 'JF_Mitglied_ID',
  Person_ID: 'Person_ID',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Jf_mitgliedScalarFieldEnum = {
  ID: 'ID',
  Person_ID: 'Person_ID',
  Eintrittsdatum: 'Eintrittsdatum',
  Austrittsdatum: 'Austrittsdatum',
  Aufnahmedatum: 'Aufnahmedatum',
  Status: 'Status',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.LehrgangScalarFieldEnum = {
  ID: 'ID',
  Abk_rzung: 'Abk_rzung',
  Beschreibung: 'Beschreibung',
  Reihenfolge: 'Reihenfolge',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Mitglied_funktionenScalarFieldEnum = {
  ID: 'ID',
  Mitglied_ID: 'Mitglied_ID',
  Funktion_ID: 'Funktion_ID',
  Typ: 'Typ',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Mitglied_loginScalarFieldEnum = {
  ID: 'ID',
  Benutzer_ID: 'Benutzer_ID',
  Mitglied_ID: 'Mitglied_ID',
  Typ: 'Typ',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.TeilnahmeScalarFieldEnum = {
  ID: 'ID',
  Mitglied_ID: 'Mitglied_ID',
  Veranstaltung_ID: 'Veranstaltung_ID',
  Typ: 'Typ',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.einsatz_art = exports.$Enums.einsatz_art = {
  brand: 'brand',
  hilfeleistung: 'hilfeleistung',
  sonstiges: 'sonstiges'
};

exports.fahrzeug_status = exports.$Enums.fahrzeug_status = {
  verfuegbar: 'verfuegbar',
  im_einsatz: 'im_einsatz',
  in_wartung: 'in_wartung',
  ausser_dienst: 'ausser_dienst'
};

exports.ff_mitglied_status = exports.$Enums.ff_mitglied_status = {
  aktiv: 'aktiv',
  anwaerter: 'anwaerter',
  ausgetreten: 'ausgetreten'
};

exports.jf_mitglied_status = exports.$Enums.jf_mitglied_status = {
  aktiv: 'aktiv',
  anwaerter: 'anwaerter',
  ausgetreten: 'ausgetreten'
};

exports.mitglied_funktionen_typ = exports.$Enums.mitglied_funktionen_typ = {
  ff: 'ff',
  jf: 'jf'
};

exports.mitglied_login_typ = exports.$Enums.mitglied_login_typ = {
  ff: 'ff',
  jf: 'jf'
};

exports.teilnahme_typ = exports.$Enums.teilnahme_typ = {
  einsatz: 'einsatz',
  dienstabend: 'dienstabend'
};

exports.Prisma.ModelName = {
  allergie: 'allergie',
  dienstgrad: 'dienstgrad',
  dienstabend: 'dienstabend',
  einheit: 'einheit',
  einsatz: 'einsatz',
  einteilung: 'einteilung',
  fahrzeug: 'fahrzeug',
  ff_mitglied: 'ff_mitglied',
  ff_mitglied_lehrgang: 'ff_mitglied_lehrgang',
  funktion_ff: 'funktion_ff',
  funktion_jf: 'funktion_jf',
  jf_erziehungsberechtigter: 'jf_erziehungsberechtigter',
  jf_mitglied: 'jf_mitglied',
  lehrgang: 'lehrgang',
  mitglied_funktionen: 'mitglied_funktionen',
  mitglied_login: 'mitglied_login',
  teilnahme: 'teilnahme'
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
      },
      {
        "fromEnvVar": null,
        "value": "linux-arm64-openssl-3.0.x"
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\oncle\\next\\vereinsbuddy\\prisma\\schema.verein_db.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "vereindb"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "vereindb": {
      "url": {
        "fromEnvVar": "DATABASE_URL_VEREINDB",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider      = \"prisma-client-js\"\n  output        = \"../generated/verein_db\"\n  binaryTargets = [\"native\", \"linux-arm64-openssl-3.0.x\"]\n}\n\ndatasource vereindb {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL_VEREINDB\")\n}\n\nmodel allergie {\n  ID             Int         @id @default(autoincrement())\n  JF_Mitglied_ID Int\n  FF_Mitglied_ID Int\n  Allergie       String      @vereindb.VarChar(255)\n  Beschreibung   String?\n  Erstellt_am    DateTime?   @vereindb.Date\n  Geaendert_am   DateTime?   @vereindb.Date\n  ff_mitglied    ff_mitglied @relation(fields: [FF_Mitglied_ID], references: [ID], onDelete: NoAction, onUpdate: Restrict, map: \"allergie_ibfk_1\")\n  jf_mitglied    jf_mitglied @relation(fields: [JF_Mitglied_ID], references: [ID], onDelete: NoAction, onUpdate: Restrict, map: \"allergie_ibfk_2\")\n\n  @@index([FF_Mitglied_ID], map: \"FF_Mitglied_ID\")\n  @@index([JF_Mitglied_ID], map: \"JF_Mitglied_ID\")\n}\n\nmodel dienstgrad {\n  ID                     Int       @id @default(autoincrement())\n  Abkuerzung_maennlich   String?   @vereindb.VarChar(100)\n  Beschreibung_maennlich String?\n  Abkuerzung_weiblich    String?   @vereindb.VarChar(100)\n  Beschreibung_weiblich  String?\n  Erstellt_am            DateTime? @vereindb.Date\n  Geaendert_am           DateTime? @vereindb.Date\n}\n\nmodel dienstabend {\n  ID           Int          @id @default(autoincrement())\n  Datum        DateTime?    @vereindb.Timestamp(6)\n  Thema        String?      @vereindb.VarChar(255)\n  Erstellt_am  DateTime     @vereindb.Date\n  Geaendert_am DateTime?    @vereindb.Date\n  einteilung   einteilung[]\n}\n\nmodel einheit {\n  ID           Int          @id @default(autoincrement())\n  Abkuerzung   String?      @vereindb.VarChar(255)\n  Beschreibung String?\n  Erstellt_am  DateTime?    @vereindb.Date\n  Geaendert_am DateTime?    @vereindb.Date\n  einteilung   einteilung[]\n}\n\nmodel einsatz {\n  ID             Int          @id @default(autoincrement())\n  Einsatznummer  Int\n  Datum_Anfang   DateTime     @vereindb.Timestamp(6)\n  Uhrzeit_Anfang DateTime     @vereindb.Time(6)\n  Datum_Ende     DateTime?    @vereindb.Date\n  Uhrzeit_Ende   DateTime?    @vereindb.Time(6)\n  Beschreibung   String?\n  Strasse        String?      @vereindb.VarChar(255)\n  Hausnummer     String?      @vereindb.VarChar(32)\n  Postleitzahl   String?      @vereindb.VarChar(32)\n  Ort            String?      @vereindb.VarChar(255)\n  Art            einsatz_art\n  Erstellt_am    DateTime?    @vereindb.Date\n  Geaendert_am   DateTime?    @vereindb.Date\n  einteilung     einteilung[]\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel einteilung {\n  ID             Int         @id @default(autoincrement())\n  Einsatz_ID     Int\n  Dienstabend_ID Int\n  Fahrzeug_ID    Int\n  FF_Mitglied_ID Int\n  Einheit_ID     Int\n  dienstabend    dienstabend @relation(fields: [Dienstabend_ID], references: [ID], onDelete: NoAction, onUpdate: Restrict, map: \"einteilung_dienstabend\")\n  einheit        einheit     @relation(fields: [Einheit_ID], references: [ID], onDelete: NoAction, onUpdate: Restrict, map: \"einteilung_einheit\")\n  einsatz        einsatz     @relation(fields: [Einsatz_ID], references: [ID], onDelete: NoAction, onUpdate: Restrict, map: \"einteilung_einsatz\")\n  fahrzeug       fahrzeug    @relation(fields: [Fahrzeug_ID], references: [ID], onDelete: NoAction, onUpdate: Restrict, map: \"einteilung_fahrzeug\")\n  ff_mitglied    ff_mitglied @relation(fields: [FF_Mitglied_ID], references: [ID], onDelete: NoAction, onUpdate: Restrict, map: \"einteilung_ff_mitglied\")\n\n  @@index([Dienstabend_ID], map: \"einteilung_ibfk_1\")\n  @@index([Einheit_ID], map: \"einteilung_ibfk_2\")\n  @@index([Einsatz_ID], map: \"einteilung_ibfk_3\")\n  @@index([Fahrzeug_ID], map: \"einteilung_ibfk_4\")\n  @@index([FF_Mitglied_ID], map: \"einteilung_ibfk_5\")\n}\n\nmodel fahrzeug {\n  ID                Int              @id @default(autoincrement())\n  Kennzeichen       String?          @vereindb.VarChar(100)\n  Fahrzeugtyp       String?          @vereindb.VarChar(100)\n  Besatzungsstaerke String?          @vereindb.VarChar(100)\n  Status            fahrzeug_status? @default(verfuegbar)\n  Erstellt_am       DateTime?        @vereindb.Date\n  Geaendert_am      DateTime?        @vereindb.Date\n  einteilung        einteilung[]\n}\n\nmodel ff_mitglied {\n  ID                   Int                    @id @default(autoincrement())\n  Person_ID            Int\n  Eintrittsdatum       DateTime               @vereindb.Date\n  Austrittsdatum       DateTime?              @vereindb.Date\n  Aufnahmedatum        DateTime?              @vereindb.Date\n  Status               ff_mitglied_status?    @default(aktiv)\n  Erstellt_am          DateTime               @vereindb.Date\n  Geaendert_am         DateTime?              @vereindb.Date\n  allergie             allergie[]\n  einteilung           einteilung[]\n  ff_mitglied_lehrgang ff_mitglied_lehrgang[]\n  mitglied_funktionen  mitglied_funktionen[]\n\n  @@index([Person_ID], map: \"ff_mitglied_ibfk_1\")\n}\n\nmodel ff_mitglied_lehrgang {\n  ID              Int         @id @default(autoincrement())\n  FF_Mitglied_ID  Int\n  Lehrgang_ID     Int\n  Datum_bestanden DateTime?   @vereindb.Date\n  Erstellt_am     DateTime?   @vereindb.Date\n  Geaendert_am    DateTime?   @vereindb.Date\n  ff_mitglied     ff_mitglied @relation(fields: [FF_Mitglied_ID], references: [ID], onDelete: NoAction, onUpdate: Restrict, map: \"ff_mitglied_lehrgang_ibfk_1\")\n  lehrgang        lehrgang    @relation(fields: [Lehrgang_ID], references: [ID], onDelete: NoAction, onUpdate: Restrict, map: \"ff_mitglied_lehrgang_ibfk_2\")\n\n  @@index([Lehrgang_ID], map: \"Lehrgang_ID\")\n}\n\nmodel funktion_ff {\n  ID           Int       @id @default(autoincrement())\n  Name         String    @vereindb.VarChar(100)\n  Ist_Admin    Boolean?  @default(false)\n  Erstellt_am  DateTime? @vereindb.Date\n  Geaendert_am DateTime? @vereindb.Date\n}\n\nmodel funktion_jf {\n  ID           Int       @id @default(autoincrement())\n  Name         String    @vereindb.VarChar(100)\n  Ist_Admin    Boolean?  @default(false)\n  Erstellt_am  DateTime  @vereindb.Date\n  Geaendert_am DateTime? @vereindb.Date\n}\n\nmodel jf_erziehungsberechtigter {\n  ID             Int         @id @default(autoincrement())\n  JF_Mitglied_ID Int\n  Person_ID      Int\n  Erstellt_am    DateTime?   @vereindb.Date\n  Geaendert_am   DateTime?   @vereindb.Date\n  jf_mitglied    jf_mitglied @relation(fields: [JF_Mitglied_ID], references: [ID], onDelete: NoAction, onUpdate: Restrict, map: \"jf_erziehungsberechtigter_jf_mitglied\")\n\n  @@index([JF_Mitglied_ID], map: \"jf_erziehungsberechtigter_ibfk_1\")\n  @@index([Person_ID], map: \"jf_erziehungsberechtigter_ibfk_2\")\n}\n\nmodel jf_mitglied {\n  ID                        Int                         @id @default(autoincrement())\n  Person_ID                 Int\n  Eintrittsdatum            DateTime                    @vereindb.Date\n  Austrittsdatum            DateTime?                   @vereindb.Date\n  Aufnahmedatum             DateTime?                   @vereindb.Date\n  Status                    jf_mitglied_status?         @default(aktiv)\n  Erstellt_am               DateTime?                   @vereindb.Date\n  Geaendert_am              DateTime?                   @vereindb.Date\n  allergie                  allergie[]\n  jf_erziehungsberechtigter jf_erziehungsberechtigter[]\n\n  @@index([Person_ID], map: \"jf_mitglied_ibfk_1\")\n}\n\nmodel lehrgang {\n  ID                   Int                    @id @default(autoincrement())\n  Abk_rzung            String?                @map(\"Abkürzung\") @vereindb.VarChar(255)\n  Beschreibung         String?\n  Reihenfolge          Int?\n  Erstellt_am          DateTime?              @vereindb.Date\n  Geaendert_am         DateTime?              @vereindb.Date\n  ff_mitglied_lehrgang ff_mitglied_lehrgang[]\n}\n\nmodel mitglied_funktionen {\n  ID           Int                     @id @default(autoincrement())\n  Mitglied_ID  Int\n  Funktion_ID  Int\n  Typ          mitglied_funktionen_typ\n  Erstellt_am  DateTime?               @vereindb.Date\n  Geaendert_am DateTime?               @vereindb.Date\n  ff_mitglied  ff_mitglied             @relation(fields: [Mitglied_ID], references: [ID], onDelete: NoAction, onUpdate: Restrict, map: \"mitglied_funktionen_mitglied\")\n\n  @@index([Mitglied_ID], map: \"mitglied_funktionen_ibfk_1\")\n  @@index([Funktion_ID], map: \"mitglied_funktionen_ibfk_2\")\n}\n\nmodel mitglied_login {\n  ID           Int                @id @default(autoincrement())\n  Benutzer_ID  Int\n  Mitglied_ID  Int\n  Typ          mitglied_login_typ\n  Erstellt_am  DateTime           @vereindb.Date\n  Geaendert_am DateTime?          @vereindb.Date\n\n  @@index([Benutzer_ID], map: \"mitglied_login_ibfk_1\")\n  @@index([Mitglied_ID], map: \"mitglied_login_ibfk_2\")\n}\n\nmodel teilnahme {\n  ID               Int           @id @default(autoincrement())\n  Mitglied_ID      Int\n  Veranstaltung_ID Int\n  Typ              teilnahme_typ\n  Erstellt_am      DateTime      @vereindb.Date\n  Geaendert_am     DateTime?     @vereindb.Date\n\n  @@index([Veranstaltung_ID], map: \"teilnahme_ibfk_4\")\n  @@index([Mitglied_ID], map: \"Mitglied_ID\")\n}\n\nenum einsatz_art {\n  brand\n  hilfeleistung\n  sonstiges\n}\n\nenum fahrzeug_status {\n  verfuegbar\n  im_einsatz    @map(\"im einsatz\")\n  in_wartung    @map(\"in wartung\")\n  ausser_dienst @map(\"ausser dienst\")\n}\n\nenum ff_mitglied_status {\n  aktiv\n  anwaerter\n  ausgetreten\n}\n\nenum jf_mitglied_status {\n  aktiv\n  anwaerter\n  ausgetreten\n}\n\nenum mitglied_funktionen_typ {\n  ff\n  jf\n}\n\nenum mitglied_login_typ {\n  ff\n  jf\n}\n\nenum teilnahme_typ {\n  einsatz\n  dienstabend\n}\n",
  "inlineSchemaHash": "65d2dff65ee538f00dae1dbfa53d655ef8bc6c7d966318a3e03afb87158020fc",
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"allergie\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JF_Mitglied_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FF_Mitglied_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Allergie\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Beschreibung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied\",\"nativeType\":null,\"relationName\":\"allergieToff_mitglied\",\"relationFromFields\":[\"FF_Mitglied_ID\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jf_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jf_mitglied\",\"nativeType\":null,\"relationName\":\"allergieTojf_mitglied\",\"relationFromFields\":[\"JF_Mitglied_ID\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"dienstgrad\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Abkuerzung_maennlich\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Beschreibung_maennlich\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Abkuerzung_weiblich\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Beschreibung_weiblich\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"dienstabend\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Datum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Thema\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einteilung\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einteilung\",\"nativeType\":null,\"relationName\":\"dienstabendToeinteilung\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"einheit\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Abkuerzung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Beschreibung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einteilung\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einteilung\",\"nativeType\":null,\"relationName\":\"einheitToeinteilung\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"einsatz\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Einsatznummer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Datum_Anfang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Uhrzeit_Anfang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Datum_Ende\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Uhrzeit_Ende\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Beschreibung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Strasse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Hausnummer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Postleitzahl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Art\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einsatz_art\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einteilung\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einteilung\",\"nativeType\":null,\"relationName\":\"einsatzToeinteilung\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"einteilung\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Einsatz_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dienstabend_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Fahrzeug_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FF_Mitglied_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Einheit_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dienstabend\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dienstabend\",\"nativeType\":null,\"relationName\":\"dienstabendToeinteilung\",\"relationFromFields\":[\"Dienstabend_ID\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einheit\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einheit\",\"nativeType\":null,\"relationName\":\"einheitToeinteilung\",\"relationFromFields\":[\"Einheit_ID\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einsatz\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einsatz\",\"nativeType\":null,\"relationName\":\"einsatzToeinteilung\",\"relationFromFields\":[\"Einsatz_ID\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fahrzeug\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fahrzeug\",\"nativeType\":null,\"relationName\":\"einteilungTofahrzeug\",\"relationFromFields\":[\"Fahrzeug_ID\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied\",\"nativeType\":null,\"relationName\":\"einteilungToff_mitglied\",\"relationFromFields\":[\"FF_Mitglied_ID\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"fahrzeug\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Kennzeichen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Fahrzeugtyp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Besatzungsstaerke\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"fahrzeug_status\",\"nativeType\":null,\"default\":\"verfuegbar\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einteilung\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einteilung\",\"nativeType\":null,\"relationName\":\"einteilungTofahrzeug\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ff_mitglied\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Person_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Eintrittsdatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Austrittsdatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Aufnahmedatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ff_mitglied_status\",\"nativeType\":null,\"default\":\"aktiv\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allergie\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"allergie\",\"nativeType\":null,\"relationName\":\"allergieToff_mitglied\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einteilung\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einteilung\",\"nativeType\":null,\"relationName\":\"einteilungToff_mitglied\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied_lehrgang\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied_lehrgang\",\"nativeType\":null,\"relationName\":\"ff_mitgliedToff_mitglied_lehrgang\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mitglied_funktionen\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mitglied_funktionen\",\"nativeType\":null,\"relationName\":\"ff_mitgliedTomitglied_funktionen\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ff_mitglied_lehrgang\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FF_Mitglied_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Lehrgang_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Datum_bestanden\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied\",\"nativeType\":null,\"relationName\":\"ff_mitgliedToff_mitglied_lehrgang\",\"relationFromFields\":[\"FF_Mitglied_ID\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lehrgang\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"lehrgang\",\"nativeType\":null,\"relationName\":\"ff_mitglied_lehrgangTolehrgang\",\"relationFromFields\":[\"Lehrgang_ID\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"funktion_ff\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ist_Admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"funktion_jf\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ist_Admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"jf_erziehungsberechtigter\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JF_Mitglied_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Person_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jf_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jf_mitglied\",\"nativeType\":null,\"relationName\":\"jf_erziehungsberechtigterTojf_mitglied\",\"relationFromFields\":[\"JF_Mitglied_ID\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"jf_mitglied\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Person_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Eintrittsdatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Austrittsdatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Aufnahmedatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"jf_mitglied_status\",\"nativeType\":null,\"default\":\"aktiv\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allergie\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"allergie\",\"nativeType\":null,\"relationName\":\"allergieTojf_mitglied\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jf_erziehungsberechtigter\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jf_erziehungsberechtigter\",\"nativeType\":null,\"relationName\":\"jf_erziehungsberechtigterTojf_mitglied\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"lehrgang\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Abk_rzung\",\"dbName\":\"Abkürzung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Beschreibung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reihenfolge\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied_lehrgang\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied_lehrgang\",\"nativeType\":null,\"relationName\":\"ff_mitglied_lehrgangTolehrgang\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"mitglied_funktionen\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mitglied_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Funktion_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Typ\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mitglied_funktionen_typ\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied\",\"nativeType\":null,\"relationName\":\"ff_mitgliedTomitglied_funktionen\",\"relationFromFields\":[\"Mitglied_ID\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"mitglied_login\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Benutzer_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mitglied_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Typ\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mitglied_login_typ\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"teilnahme\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mitglied_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Veranstaltung_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Typ\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"teilnahme_typ\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"einsatz_art\":{\"values\":[{\"name\":\"brand\",\"dbName\":null},{\"name\":\"hilfeleistung\",\"dbName\":null},{\"name\":\"sonstiges\",\"dbName\":null}],\"dbName\":null},\"fahrzeug_status\":{\"values\":[{\"name\":\"verfuegbar\",\"dbName\":null},{\"name\":\"im_einsatz\",\"dbName\":\"im einsatz\"},{\"name\":\"in_wartung\",\"dbName\":\"in wartung\"},{\"name\":\"ausser_dienst\",\"dbName\":\"ausser dienst\"}],\"dbName\":null},\"ff_mitglied_status\":{\"values\":[{\"name\":\"aktiv\",\"dbName\":null},{\"name\":\"anwaerter\",\"dbName\":null},{\"name\":\"ausgetreten\",\"dbName\":null}],\"dbName\":null},\"jf_mitglied_status\":{\"values\":[{\"name\":\"aktiv\",\"dbName\":null},{\"name\":\"anwaerter\",\"dbName\":null},{\"name\":\"ausgetreten\",\"dbName\":null}],\"dbName\":null},\"mitglied_funktionen_typ\":{\"values\":[{\"name\":\"ff\",\"dbName\":null},{\"name\":\"jf\",\"dbName\":null}],\"dbName\":null},\"mitglied_login_typ\":{\"values\":[{\"name\":\"ff\",\"dbName\":null},{\"name\":\"jf\",\"dbName\":null}],\"dbName\":null},\"teilnahme_typ\":{\"values\":[{\"name\":\"einsatz\",\"dbName\":null},{\"name\":\"dienstabend\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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
path.join(__dirname, "libquery_engine-linux-arm64-openssl-3.0.x.so.node");
path.join(process.cwd(), "generated/verein_db/libquery_engine-linux-arm64-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/verein_db/schema.prisma")
