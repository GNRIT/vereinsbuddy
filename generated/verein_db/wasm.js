
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
