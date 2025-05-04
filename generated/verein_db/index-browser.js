
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
