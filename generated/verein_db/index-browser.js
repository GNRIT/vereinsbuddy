
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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

exports.Prisma.DientsabendScalarFieldEnum = {
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
  Ist_admin: 'Ist_admin',
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

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.allergieOrderByRelevanceFieldEnum = {
  Allergie: 'Allergie',
  Beschreibung: 'Beschreibung'
};

exports.Prisma.dienstgradOrderByRelevanceFieldEnum = {
  Abkuerzung_maennlich: 'Abkuerzung_maennlich',
  Beschreibung_maennlich: 'Beschreibung_maennlich',
  Abkuerzung_weiblich: 'Abkuerzung_weiblich',
  Beschreibung_weiblich: 'Beschreibung_weiblich'
};

exports.Prisma.dientsabendOrderByRelevanceFieldEnum = {
  Thema: 'Thema'
};

exports.Prisma.einheitOrderByRelevanceFieldEnum = {
  Abkuerzung: 'Abkuerzung',
  Beschreibung: 'Beschreibung'
};

exports.Prisma.einsatzOrderByRelevanceFieldEnum = {
  Beschreibung: 'Beschreibung',
  Strasse: 'Strasse',
  Hausnummer: 'Hausnummer',
  Postleitzahl: 'Postleitzahl',
  Ort: 'Ort'
};

exports.Prisma.fahrzeugOrderByRelevanceFieldEnum = {
  Kennzeichen: 'Kennzeichen',
  Fahrzeugtyp: 'Fahrzeugtyp',
  Besatzungsstaerke: 'Besatzungsstaerke'
};

exports.Prisma.funktion_ffOrderByRelevanceFieldEnum = {
  Name: 'Name'
};

exports.Prisma.funktion_jfOrderByRelevanceFieldEnum = {
  Name: 'Name'
};

exports.Prisma.lehrgangOrderByRelevanceFieldEnum = {
  Abk_rzung: 'Abk_rzung',
  Beschreibung: 'Beschreibung'
};
exports.einsatz_Art = exports.$Enums.einsatz_Art = {
  brand: 'brand',
  hilfeleistung: 'hilfeleistung',
  sonstiges: 'sonstiges'
};

exports.fahrzeug_Status = exports.$Enums.fahrzeug_Status = {
  verfuegbar: 'verfuegbar',
  im_einsatz: 'im_einsatz',
  in_wartung: 'in_wartung',
  ausser_dienst: 'ausser_dienst'
};

exports.ff_mitglied_Status = exports.$Enums.ff_mitglied_Status = {
  aktiv: 'aktiv',
  anwaerter: 'anwaerter',
  ausgetreten: 'ausgetreten'
};

exports.jf_mitglied_Status = exports.$Enums.jf_mitglied_Status = {
  aktiv: 'aktiv',
  anwaerter: 'anwaerter',
  ausgetreten: 'ausgetreten'
};

exports.mitglied_funktionen_Typ = exports.$Enums.mitglied_funktionen_Typ = {
  ff: 'ff',
  jf: 'jf'
};

exports.mitglied_login_Typ = exports.$Enums.mitglied_login_Typ = {
  ff: 'ff',
  jf: 'jf'
};

exports.teilnahme_Typ = exports.$Enums.teilnahme_Typ = {
  einsatz: 'einsatz',
  dienstabend: 'dienstabend'
};

exports.Prisma.ModelName = {
  allergie: 'allergie',
  dienstgrad: 'dienstgrad',
  dientsabend: 'dientsabend',
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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
