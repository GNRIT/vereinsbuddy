
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
  id: 'id',
  jf_mitglied_id: 'jf_mitglied_id',
  ff_mitglied_id: 'ff_mitglied_id',
  allergie: 'allergie',
  beschreibung: 'beschreibung',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.DienstgradScalarFieldEnum = {
  id: 'id',
  Abkuerzung_maennlich: 'Abkuerzung_maennlich',
  Beschreibung_maennlich: 'Beschreibung_maennlich',
  Abkuerzung_weiblich: 'Abkuerzung_weiblich',
  Beschreibung_weiblich: 'Beschreibung_weiblich',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.DienstabendScalarFieldEnum = {
  id: 'id',
  datum: 'datum',
  thema: 'thema',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.EinheitScalarFieldEnum = {
  id: 'id',
  abkuerzung: 'abkuerzung',
  beschreibung: 'beschreibung',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.EinsatzScalarFieldEnum = {
  id: 'id',
  einsatznummer: 'einsatznummer',
  Datum_Anfang: 'Datum_Anfang',
  Uhrzeit_Anfang: 'Uhrzeit_Anfang',
  Datum_Ende: 'Datum_Ende',
  Uhrzeit_Ende: 'Uhrzeit_Ende',
  beschreibung: 'beschreibung',
  strasse: 'strasse',
  hausnummer: 'hausnummer',
  postleitzahl: 'postleitzahl',
  ort: 'ort',
  art: 'art',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.EinteilungScalarFieldEnum = {
  id: 'id',
  einsatz_id: 'einsatz_id',
  dienstabend_id: 'dienstabend_id',
  fahrzeug_id: 'fahrzeug_id',
  ff_mitglied_id: 'ff_mitglied_id',
  einheit_id: 'einheit_id'
};

exports.Prisma.FahrzeugScalarFieldEnum = {
  id: 'id',
  kennzeichen: 'kennzeichen',
  fahrzeugtyp: 'fahrzeugtyp',
  besatzungsstaerke: 'besatzungsstaerke',
  status: 'status',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Ff_mitgliedScalarFieldEnum = {
  id: 'id',
  person_id: 'person_id',
  eintrittsdatum: 'eintrittsdatum',
  austrittsdatum: 'austrittsdatum',
  aufnahmedatum: 'aufnahmedatum',
  status: 'status',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Ff_mitglied_lehrgangScalarFieldEnum = {
  id: 'id',
  ff_mitglied_id: 'ff_mitglied_id',
  lehrgang_id: 'lehrgang_id',
  Datum_bestanden: 'Datum_bestanden',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Funktion_ffScalarFieldEnum = {
  id: 'id',
  name: 'name',
  ist_admin: 'ist_admin',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Funktion_jfScalarFieldEnum = {
  id: 'id',
  name: 'name',
  ist_admin: 'ist_admin',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Jf_erziehungsberechtigterScalarFieldEnum = {
  id: 'id',
  jf_mitglied_id: 'jf_mitglied_id',
  person_id: 'person_id',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Jf_mitgliedScalarFieldEnum = {
  id: 'id',
  person_id: 'person_id',
  eintrittsdatum: 'eintrittsdatum',
  austrittsdatum: 'austrittsdatum',
  aufnahmedatum: 'aufnahmedatum',
  status: 'status',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.LehrgangScalarFieldEnum = {
  id: 'id',
  Abk_rzung: 'Abk_rzung',
  beschreibung: 'beschreibung',
  reihenfolge: 'reihenfolge',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Mitglied_funktionenScalarFieldEnum = {
  id: 'id',
  mitglied_id: 'mitglied_id',
  funktion_id: 'funktion_id',
  typ: 'typ',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.Mitglied_loginScalarFieldEnum = {
  id: 'id',
  benutzer_id: 'benutzer_id',
  mitglied_id: 'mitglied_id',
  typ: 'typ',
  Erstellt_am: 'Erstellt_am',
  Geaendert_am: 'Geaendert_am'
};

exports.Prisma.TeilnahmeScalarFieldEnum = {
  id: 'id',
  mitglied_id: 'mitglied_id',
  veranstaltung_id: 'veranstaltung_id',
  typ: 'typ',
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
  "inlineSchema": "generator client {\n  provider      = \"prisma-client-js\"\n  output        = \"../generated/verein_db\"\n  binaryTargets = [\"native\", \"linux-arm64-openssl-3.0.x\"]\n}\n\ndatasource vereindb {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL_VEREINDB\")\n}\n\nmodel allergie {\n  id             Int         @id @default(autoincrement())\n  jf_mitglied_id Int\n  ff_mitglied_id Int\n  allergie       String      @vereindb.VarChar(255)\n  beschreibung   String?\n  Erstellt_am    DateTime?   @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am   DateTime?   @map(\"Geaendert am\") @vereindb.Date\n  ff_mitglied    ff_mitglied @relation(fields: [ff_mitglied_id], references: [id], onDelete: NoAction, onUpdate: Restrict, map: \"allergie_ibfk_1\")\n  jf_mitglied    jf_mitglied @relation(fields: [jf_mitglied_id], references: [id], onDelete: NoAction, onUpdate: Restrict, map: \"allergie_ibfk_2\")\n\n  @@index([ff_mitglied_id], map: \"FF_Mitglied_ID\")\n  @@index([jf_mitglied_id], map: \"JF_Mitglied_ID\")\n}\n\nmodel dienstgrad {\n  id                     Int       @id @default(autoincrement())\n  Abkuerzung_maennlich   String?   @map(\"Abkuerzung maennlich\") @vereindb.VarChar(100)\n  Beschreibung_maennlich String?   @map(\"Beschreibung maennlich\")\n  Abkuerzung_weiblich    String?   @map(\"Abkuerzung weiblich\") @vereindb.VarChar(100)\n  Beschreibung_weiblich  String?   @map(\"Beschreibung weiblich\")\n  Erstellt_am            DateTime? @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am           DateTime? @map(\"Geaendert am\") @vereindb.Date\n}\n\nmodel dienstabend {\n  id           Int          @id @default(autoincrement())\n  datum        DateTime?    @vereindb.Timestamp(6)\n  thema        String?      @vereindb.VarChar(255)\n  Erstellt_am  DateTime     @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am DateTime?    @map(\"Geaendert am\") @vereindb.Date\n  einteilung   einteilung[]\n}\n\nmodel einheit {\n  id           Int          @id @default(autoincrement())\n  abkuerzung   String?      @vereindb.VarChar(255)\n  beschreibung String?\n  Erstellt_am  DateTime?    @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am DateTime?    @map(\"Geaendert am\") @vereindb.Date\n  einteilung   einteilung[]\n}\n\nmodel einsatz {\n  id             Int          @id @default(autoincrement())\n  einsatznummer  Int\n  Datum_Anfang   DateTime     @map(\"Datum Anfang\") @vereindb.Timestamp(6)\n  Uhrzeit_Anfang DateTime     @map(\"Uhrzeit Anfang\") @vereindb.Time(6)\n  Datum_Ende     DateTime?    @map(\"Datum Ende\") @vereindb.Date\n  Uhrzeit_Ende   DateTime?    @map(\"Uhrzeit Ende\") @vereindb.Time(6)\n  beschreibung   String?\n  strasse        String?      @vereindb.VarChar(255)\n  hausnummer     String?      @vereindb.VarChar(32)\n  postleitzahl   String?      @vereindb.VarChar(32)\n  ort            String?      @vereindb.VarChar(255)\n  art            einsatz_art\n  Erstellt_am    DateTime?    @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am   DateTime?    @map(\"Geaendert am\") @vereindb.Date\n  einteilung     einteilung[]\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel einteilung {\n  id             Int         @id @default(autoincrement())\n  einsatz_id     Int\n  dienstabend_id Int\n  fahrzeug_id    Int\n  ff_mitglied_id Int\n  einheit_id     Int\n  dienstabend    dienstabend @relation(fields: [dienstabend_id], references: [id], onDelete: NoAction, onUpdate: Restrict, map: \"einteilung_dienstabend\")\n  einheit        einheit     @relation(fields: [einheit_id], references: [id], onDelete: NoAction, onUpdate: Restrict, map: \"einteilung_einheit\")\n  einsatz        einsatz     @relation(fields: [einsatz_id], references: [id], onDelete: NoAction, onUpdate: Restrict, map: \"einteilung_einsatz\")\n  fahrzeug       fahrzeug    @relation(fields: [fahrzeug_id], references: [id], onDelete: NoAction, onUpdate: Restrict, map: \"einteilung_fahrzeug\")\n  ff_mitglied    ff_mitglied @relation(fields: [ff_mitglied_id], references: [id], onDelete: NoAction, onUpdate: Restrict, map: \"einteilung_ff_mitglied\")\n\n  @@index([dienstabend_id], map: \"einteilung_ibfk_1\")\n  @@index([einheit_id], map: \"einteilung_ibfk_2\")\n  @@index([einsatz_id], map: \"einteilung_ibfk_3\")\n  @@index([fahrzeug_id], map: \"einteilung_ibfk_4\")\n  @@index([ff_mitglied_id], map: \"einteilung_ibfk_5\")\n}\n\nmodel fahrzeug {\n  id                Int              @id @default(autoincrement())\n  kennzeichen       String?          @vereindb.VarChar(100)\n  fahrzeugtyp       String?          @vereindb.VarChar(100)\n  besatzungsstaerke String?          @vereindb.VarChar(100)\n  status            fahrzeug_status? @default(verfuegbar)\n  Erstellt_am       DateTime?        @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am      DateTime?        @map(\"Geaendert am\") @vereindb.Date\n  einteilung        einteilung[]\n}\n\nmodel ff_mitglied {\n  id                   Int                    @id @default(autoincrement())\n  person_id            Int\n  eintrittsdatum       DateTime               @vereindb.Date\n  austrittsdatum       DateTime?              @vereindb.Date\n  aufnahmedatum        DateTime?              @vereindb.Date\n  status               ff_mitglied_status?    @default(aktiv)\n  Erstellt_am          DateTime               @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am         DateTime?              @map(\"Geaendert am\") @vereindb.Date\n  allergie             allergie[]\n  einteilung           einteilung[]\n  ff_mitglied_lehrgang ff_mitglied_lehrgang[]\n  mitglied_funktionen  mitglied_funktionen[]\n\n  @@index([person_id], map: \"ff_mitglied_ibfk_1\")\n}\n\nmodel ff_mitglied_lehrgang {\n  id              Int         @id @default(autoincrement())\n  ff_mitglied_id  Int\n  lehrgang_id     Int\n  Datum_bestanden DateTime?   @map(\"Datum bestanden\") @vereindb.Date\n  Erstellt_am     DateTime?   @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am    DateTime?   @map(\"Geaendert am\") @vereindb.Date\n  ff_mitglied     ff_mitglied @relation(fields: [ff_mitglied_id], references: [id], onDelete: NoAction, onUpdate: Restrict, map: \"ff_mitglied_lehrgang_ibfk_1\")\n  lehrgang        lehrgang    @relation(fields: [lehrgang_id], references: [id], onDelete: NoAction, onUpdate: Restrict, map: \"ff_mitglied_lehrgang_ibfk_2\")\n\n  @@index([lehrgang_id], map: \"Lehrgang_ID\")\n}\n\nmodel funktion_ff {\n  id           Int       @id @default(autoincrement())\n  name         String    @vereindb.VarChar(100)\n  ist_admin    Boolean?  @default(false)\n  Erstellt_am  DateTime? @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am DateTime? @map(\"Geaendert am\") @vereindb.Date\n}\n\nmodel funktion_jf {\n  id           Int       @id @default(autoincrement())\n  name         String    @vereindb.VarChar(100)\n  ist_admin    Boolean?  @default(false)\n  Erstellt_am  DateTime  @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am DateTime? @map(\"Geaendert am\") @vereindb.Date\n}\n\nmodel jf_erziehungsberechtigter {\n  id             Int         @id @default(autoincrement())\n  jf_mitglied_id Int\n  person_id      Int\n  Erstellt_am    DateTime?   @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am   DateTime?   @map(\"Geaendert am\") @vereindb.Date\n  jf_mitglied    jf_mitglied @relation(fields: [jf_mitglied_id], references: [id], onDelete: NoAction, onUpdate: Restrict, map: \"jf_erziehungsberechtigter_jf_mitglied\")\n\n  @@index([jf_mitglied_id], map: \"jf_erziehungsberechtigter_ibfk_1\")\n  @@index([person_id], map: \"jf_erziehungsberechtigter_ibfk_2\")\n}\n\nmodel jf_mitglied {\n  id                        Int                         @id @default(autoincrement())\n  person_id                 Int\n  eintrittsdatum            DateTime                    @vereindb.Date\n  austrittsdatum            DateTime?                   @vereindb.Date\n  aufnahmedatum             DateTime?                   @vereindb.Date\n  status                    jf_mitglied_status?         @default(aktiv)\n  Erstellt_am               DateTime?                   @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am              DateTime?                   @map(\"Geaendert am\") @vereindb.Date\n  allergie                  allergie[]\n  jf_erziehungsberechtigter jf_erziehungsberechtigter[]\n\n  @@index([person_id], map: \"jf_mitglied_ibfk_1\")\n}\n\nmodel lehrgang {\n  id                   Int                    @id @default(autoincrement())\n  Abk_rzung            String?                @map(\"Abkürzung\") @vereindb.VarChar(255)\n  beschreibung         String?\n  reihenfolge          Int?\n  Erstellt_am          DateTime?              @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am         DateTime?              @map(\"Geaendert am\") @vereindb.Date\n  ff_mitglied_lehrgang ff_mitglied_lehrgang[]\n}\n\nmodel mitglied_funktionen {\n  id           Int                     @id @default(autoincrement())\n  mitglied_id  Int\n  funktion_id  Int\n  typ          mitglied_funktionen_typ\n  Erstellt_am  DateTime?               @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am DateTime?               @map(\"Geaendert am\") @vereindb.Date\n  ff_mitglied  ff_mitglied             @relation(fields: [mitglied_id], references: [id], onDelete: NoAction, onUpdate: Restrict, map: \"mitglied_funktionen_ff_mitglied\")\n\n  @@index([mitglied_id], map: \"mitglied_funktionen_ibfk_1\")\n  @@index([funktion_id], map: \"mitglied_funktionen_ibfk_2\")\n}\n\nmodel mitglied_login {\n  id           Int                @id @default(autoincrement())\n  benutzer_id  Int\n  mitglied_id  Int\n  typ          mitglied_login_typ\n  Erstellt_am  DateTime           @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am DateTime?          @map(\"Geaendert am\") @vereindb.Date\n\n  @@index([benutzer_id], map: \"mitglied_login_ibfk_1\")\n  @@index([mitglied_id], map: \"mitglied_login_ibfk_2\")\n}\n\nmodel teilnahme {\n  id               Int           @id @default(autoincrement())\n  mitglied_id      Int\n  veranstaltung_id Int\n  typ              teilnahme_typ\n  Erstellt_am      DateTime      @map(\"Erstellt am\") @vereindb.Date\n  Geaendert_am     DateTime?     @map(\"Geaendert am\") @vereindb.Date\n\n  @@index([veranstaltung_id], map: \"teilnahme_ibfk_4\")\n  @@index([mitglied_id], map: \"Mitglied_ID\")\n}\n\nenum einsatz_art {\n  brand\n  hilfeleistung\n  sonstiges\n}\n\nenum fahrzeug_status {\n  verfuegbar\n  im_einsatz    @map(\"im einsatz\")\n  in_wartung    @map(\"in wartung\")\n  ausser_dienst @map(\"ausser dienst\")\n}\n\nenum ff_mitglied_status {\n  aktiv\n  anwaerter\n  ausgetreten\n}\n\nenum jf_mitglied_status {\n  aktiv\n  anwaerter\n  ausgetreten\n}\n\nenum mitglied_funktionen_typ {\n  ff\n  jf\n}\n\nenum mitglied_login_typ {\n  ff\n  jf\n}\n\nenum teilnahme_typ {\n  einsatz\n  dienstabend\n}\n",
  "inlineSchemaHash": "8d9ca6a912ea3ff009f4486774fdc3f26976e1ccc8612ba042f7caa38d17ec86",
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"allergie\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jf_mitglied_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allergie\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"beschreibung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied\",\"nativeType\":null,\"relationName\":\"allergieToff_mitglied\",\"relationFromFields\":[\"ff_mitglied_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jf_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jf_mitglied\",\"nativeType\":null,\"relationName\":\"allergieTojf_mitglied\",\"relationFromFields\":[\"jf_mitglied_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"dienstgrad\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Abkuerzung_maennlich\",\"dbName\":\"Abkuerzung maennlich\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Beschreibung_maennlich\",\"dbName\":\"Beschreibung maennlich\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Abkuerzung_weiblich\",\"dbName\":\"Abkuerzung weiblich\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Beschreibung_weiblich\",\"dbName\":\"Beschreibung weiblich\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"dienstabend\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"datum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thema\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einteilung\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einteilung\",\"nativeType\":null,\"relationName\":\"dienstabendToeinteilung\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"einheit\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"abkuerzung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"beschreibung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einteilung\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einteilung\",\"nativeType\":null,\"relationName\":\"einheitToeinteilung\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"einsatz\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einsatznummer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Datum_Anfang\",\"dbName\":\"Datum Anfang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Uhrzeit_Anfang\",\"dbName\":\"Uhrzeit Anfang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Datum_Ende\",\"dbName\":\"Datum Ende\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Uhrzeit_Ende\",\"dbName\":\"Uhrzeit Ende\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"beschreibung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strasse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hausnummer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postleitzahl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"art\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einsatz_art\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einteilung\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einteilung\",\"nativeType\":null,\"relationName\":\"einsatzToeinteilung\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"einteilung\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einsatz_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dienstabend_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fahrzeug_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einheit_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dienstabend\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dienstabend\",\"nativeType\":null,\"relationName\":\"dienstabendToeinteilung\",\"relationFromFields\":[\"dienstabend_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einheit\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einheit\",\"nativeType\":null,\"relationName\":\"einheitToeinteilung\",\"relationFromFields\":[\"einheit_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einsatz\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einsatz\",\"nativeType\":null,\"relationName\":\"einsatzToeinteilung\",\"relationFromFields\":[\"einsatz_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fahrzeug\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fahrzeug\",\"nativeType\":null,\"relationName\":\"einteilungTofahrzeug\",\"relationFromFields\":[\"fahrzeug_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied\",\"nativeType\":null,\"relationName\":\"einteilungToff_mitglied\",\"relationFromFields\":[\"ff_mitglied_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"fahrzeug\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kennzeichen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fahrzeugtyp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"besatzungsstaerke\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"fahrzeug_status\",\"nativeType\":null,\"default\":\"verfuegbar\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einteilung\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einteilung\",\"nativeType\":null,\"relationName\":\"einteilungTofahrzeug\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ff_mitglied\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"person_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eintrittsdatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"austrittsdatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aufnahmedatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ff_mitglied_status\",\"nativeType\":null,\"default\":\"aktiv\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allergie\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"allergie\",\"nativeType\":null,\"relationName\":\"allergieToff_mitglied\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einteilung\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"einteilung\",\"nativeType\":null,\"relationName\":\"einteilungToff_mitglied\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied_lehrgang\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied_lehrgang\",\"nativeType\":null,\"relationName\":\"ff_mitgliedToff_mitglied_lehrgang\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mitglied_funktionen\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mitglied_funktionen\",\"nativeType\":null,\"relationName\":\"ff_mitgliedTomitglied_funktionen\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ff_mitglied_lehrgang\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lehrgang_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Datum_bestanden\",\"dbName\":\"Datum bestanden\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied\",\"nativeType\":null,\"relationName\":\"ff_mitgliedToff_mitglied_lehrgang\",\"relationFromFields\":[\"ff_mitglied_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lehrgang\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"lehrgang\",\"nativeType\":null,\"relationName\":\"ff_mitglied_lehrgangTolehrgang\",\"relationFromFields\":[\"lehrgang_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"funktion_ff\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ist_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"funktion_jf\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ist_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"jf_erziehungsberechtigter\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jf_mitglied_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"person_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jf_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jf_mitglied\",\"nativeType\":null,\"relationName\":\"jf_erziehungsberechtigterTojf_mitglied\",\"relationFromFields\":[\"jf_mitglied_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"jf_mitglied\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"person_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eintrittsdatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"austrittsdatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aufnahmedatum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"jf_mitglied_status\",\"nativeType\":null,\"default\":\"aktiv\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allergie\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"allergie\",\"nativeType\":null,\"relationName\":\"allergieTojf_mitglied\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jf_erziehungsberechtigter\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jf_erziehungsberechtigter\",\"nativeType\":null,\"relationName\":\"jf_erziehungsberechtigterTojf_mitglied\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"lehrgang\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Abk_rzung\",\"dbName\":\"Abkürzung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"beschreibung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reihenfolge\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied_lehrgang\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied_lehrgang\",\"nativeType\":null,\"relationName\":\"ff_mitglied_lehrgangTolehrgang\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"mitglied_funktionen\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mitglied_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"funktion_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typ\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mitglied_funktionen_typ\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ff_mitglied\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ff_mitglied\",\"nativeType\":null,\"relationName\":\"ff_mitgliedTomitglied_funktionen\",\"relationFromFields\":[\"mitglied_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"mitglied_login\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"benutzer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mitglied_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typ\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mitglied_login_typ\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"teilnahme\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mitglied_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"veranstaltung_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typ\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"teilnahme_typ\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Erstellt_am\",\"dbName\":\"Erstellt am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Geaendert_am\",\"dbName\":\"Geaendert am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"einsatz_art\":{\"values\":[{\"name\":\"brand\",\"dbName\":null},{\"name\":\"hilfeleistung\",\"dbName\":null},{\"name\":\"sonstiges\",\"dbName\":null}],\"dbName\":null},\"fahrzeug_status\":{\"values\":[{\"name\":\"verfuegbar\",\"dbName\":null},{\"name\":\"im_einsatz\",\"dbName\":\"im einsatz\"},{\"name\":\"in_wartung\",\"dbName\":\"in wartung\"},{\"name\":\"ausser_dienst\",\"dbName\":\"ausser dienst\"}],\"dbName\":null},\"ff_mitglied_status\":{\"values\":[{\"name\":\"aktiv\",\"dbName\":null},{\"name\":\"anwaerter\",\"dbName\":null},{\"name\":\"ausgetreten\",\"dbName\":null}],\"dbName\":null},\"jf_mitglied_status\":{\"values\":[{\"name\":\"aktiv\",\"dbName\":null},{\"name\":\"anwaerter\",\"dbName\":null},{\"name\":\"ausgetreten\",\"dbName\":null}],\"dbName\":null},\"mitglied_funktionen_typ\":{\"values\":[{\"name\":\"ff\",\"dbName\":null},{\"name\":\"jf\",\"dbName\":null}],\"dbName\":null},\"mitglied_login_typ\":{\"values\":[{\"name\":\"ff\",\"dbName\":null},{\"name\":\"jf\",\"dbName\":null}],\"dbName\":null},\"teilnahme_typ\":{\"values\":[{\"name\":\"einsatz\",\"dbName\":null},{\"name\":\"dienstabend\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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
