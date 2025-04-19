
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model einsatz
 * 
 */
export type einsatz = $Result.DefaultSelection<Prisma.$einsatzPayload>
/**
 * Model ff_mitglied
 * 
 */
export type ff_mitglied = $Result.DefaultSelection<Prisma.$ff_mitgliedPayload>
/**
 * Model funktion_ff
 * 
 */
export type funktion_ff = $Result.DefaultSelection<Prisma.$funktion_ffPayload>
/**
 * Model funktion_jf
 * 
 */
export type funktion_jf = $Result.DefaultSelection<Prisma.$funktion_jfPayload>
/**
 * Model jf_erziehungsberechtigter
 * 
 */
export type jf_erziehungsberechtigter = $Result.DefaultSelection<Prisma.$jf_erziehungsberechtigterPayload>
/**
 * Model jf_mitglied
 * 
 */
export type jf_mitglied = $Result.DefaultSelection<Prisma.$jf_mitgliedPayload>
/**
 * Model mitglied_funktionen
 * 
 */
export type mitglied_funktionen = $Result.DefaultSelection<Prisma.$mitglied_funktionenPayload>
/**
 * Model mitglied_login
 * 
 */
export type mitglied_login = $Result.DefaultSelection<Prisma.$mitglied_loginPayload>
/**
 * Model person
 * 
 */
export type person = $Result.DefaultSelection<Prisma.$personPayload>
/**
 * Model teilnahme
 * 
 */
export type teilnahme = $Result.DefaultSelection<Prisma.$teilnahmePayload>
/**
 * Model uebungsabend
 * 
 */
export type uebungsabend = $Result.DefaultSelection<Prisma.$uebungsabendPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const mitglied_funktionen_typ: {
  ff: 'ff',
  jf: 'jf'
};

export type mitglied_funktionen_typ = (typeof mitglied_funktionen_typ)[keyof typeof mitglied_funktionen_typ]


export const mitglied_login_ty: {
  ff: 'ff',
  jf: 'jf'
};

export type mitglied_login_ty = (typeof mitglied_login_ty)[keyof typeof mitglied_login_ty]


export const teilnahme_typ: {
  einsatz: 'einsatz',
  uebung: 'uebung'
};

export type teilnahme_typ = (typeof teilnahme_typ)[keyof typeof teilnahme_typ]


export const einsatz_art: {
  brand: 'brand',
  hilfeleistung: 'hilfeleistung',
  sonstiges: 'sonstiges'
};

export type einsatz_art = (typeof einsatz_art)[keyof typeof einsatz_art]


export const ff_mitglied_status: {
  aktiv: 'aktiv',
  anw_rter: 'anw_rter',
  ausgetreten: 'ausgetreten'
};

export type ff_mitglied_status = (typeof ff_mitglied_status)[keyof typeof ff_mitglied_status]


export const jf_mitglied_status: {
  aktiv: 'aktiv',
  anw_rter: 'anw_rter',
  ausgetreten: 'ausgetreten'
};

export type jf_mitglied_status = (typeof jf_mitglied_status)[keyof typeof jf_mitglied_status]

}

export type mitglied_funktionen_typ = $Enums.mitglied_funktionen_typ

export const mitglied_funktionen_typ: typeof $Enums.mitglied_funktionen_typ

export type mitglied_login_ty = $Enums.mitglied_login_ty

export const mitglied_login_ty: typeof $Enums.mitglied_login_ty

export type teilnahme_typ = $Enums.teilnahme_typ

export const teilnahme_typ: typeof $Enums.teilnahme_typ

export type einsatz_art = $Enums.einsatz_art

export const einsatz_art: typeof $Enums.einsatz_art

export type ff_mitglied_status = $Enums.ff_mitglied_status

export const ff_mitglied_status: typeof $Enums.ff_mitglied_status

export type jf_mitglied_status = $Enums.jf_mitglied_status

export const jf_mitglied_status: typeof $Enums.jf_mitglied_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Einsatzs
 * const einsatzs = await prisma.einsatz.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Einsatzs
   * const einsatzs = await prisma.einsatz.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.einsatz`: Exposes CRUD operations for the **einsatz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Einsatzs
    * const einsatzs = await prisma.einsatz.findMany()
    * ```
    */
  get einsatz(): Prisma.einsatzDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ff_mitglied`: Exposes CRUD operations for the **ff_mitglied** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ff_mitglieds
    * const ff_mitglieds = await prisma.ff_mitglied.findMany()
    * ```
    */
  get ff_mitglied(): Prisma.ff_mitgliedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funktion_ff`: Exposes CRUD operations for the **funktion_ff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funktion_ffs
    * const funktion_ffs = await prisma.funktion_ff.findMany()
    * ```
    */
  get funktion_ff(): Prisma.funktion_ffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funktion_jf`: Exposes CRUD operations for the **funktion_jf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funktion_jfs
    * const funktion_jfs = await prisma.funktion_jf.findMany()
    * ```
    */
  get funktion_jf(): Prisma.funktion_jfDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jf_erziehungsberechtigter`: Exposes CRUD operations for the **jf_erziehungsberechtigter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jf_erziehungsberechtigters
    * const jf_erziehungsberechtigters = await prisma.jf_erziehungsberechtigter.findMany()
    * ```
    */
  get jf_erziehungsberechtigter(): Prisma.jf_erziehungsberechtigterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jf_mitglied`: Exposes CRUD operations for the **jf_mitglied** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jf_mitglieds
    * const jf_mitglieds = await prisma.jf_mitglied.findMany()
    * ```
    */
  get jf_mitglied(): Prisma.jf_mitgliedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mitglied_funktionen`: Exposes CRUD operations for the **mitglied_funktionen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mitglied_funktionens
    * const mitglied_funktionens = await prisma.mitglied_funktionen.findMany()
    * ```
    */
  get mitglied_funktionen(): Prisma.mitglied_funktionenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mitglied_login`: Exposes CRUD operations for the **mitglied_login** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mitglied_logins
    * const mitglied_logins = await prisma.mitglied_login.findMany()
    * ```
    */
  get mitglied_login(): Prisma.mitglied_loginDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.personDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teilnahme`: Exposes CRUD operations for the **teilnahme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teilnahmes
    * const teilnahmes = await prisma.teilnahme.findMany()
    * ```
    */
  get teilnahme(): Prisma.teilnahmeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uebungsabend`: Exposes CRUD operations for the **uebungsabend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Uebungsabends
    * const uebungsabends = await prisma.uebungsabend.findMany()
    * ```
    */
  get uebungsabend(): Prisma.uebungsabendDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "einsatz" | "ff_mitglied" | "funktion_ff" | "funktion_jf" | "jf_erziehungsberechtigter" | "jf_mitglied" | "mitglied_funktionen" | "mitglied_login" | "person" | "teilnahme" | "uebungsabend"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      einsatz: {
        payload: Prisma.$einsatzPayload<ExtArgs>
        fields: Prisma.einsatzFieldRefs
        operations: {
          findUnique: {
            args: Prisma.einsatzFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$einsatzPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.einsatzFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$einsatzPayload>
          }
          findFirst: {
            args: Prisma.einsatzFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$einsatzPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.einsatzFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$einsatzPayload>
          }
          findMany: {
            args: Prisma.einsatzFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$einsatzPayload>[]
          }
          create: {
            args: Prisma.einsatzCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$einsatzPayload>
          }
          createMany: {
            args: Prisma.einsatzCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.einsatzDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$einsatzPayload>
          }
          update: {
            args: Prisma.einsatzUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$einsatzPayload>
          }
          deleteMany: {
            args: Prisma.einsatzDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.einsatzUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.einsatzUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$einsatzPayload>
          }
          aggregate: {
            args: Prisma.EinsatzAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEinsatz>
          }
          groupBy: {
            args: Prisma.einsatzGroupByArgs<ExtArgs>
            result: $Utils.Optional<EinsatzGroupByOutputType>[]
          }
          count: {
            args: Prisma.einsatzCountArgs<ExtArgs>
            result: $Utils.Optional<EinsatzCountAggregateOutputType> | number
          }
        }
      }
      ff_mitglied: {
        payload: Prisma.$ff_mitgliedPayload<ExtArgs>
        fields: Prisma.ff_mitgliedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ff_mitgliedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ff_mitgliedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ff_mitgliedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ff_mitgliedPayload>
          }
          findFirst: {
            args: Prisma.ff_mitgliedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ff_mitgliedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ff_mitgliedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ff_mitgliedPayload>
          }
          findMany: {
            args: Prisma.ff_mitgliedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ff_mitgliedPayload>[]
          }
          create: {
            args: Prisma.ff_mitgliedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ff_mitgliedPayload>
          }
          createMany: {
            args: Prisma.ff_mitgliedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ff_mitgliedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ff_mitgliedPayload>
          }
          update: {
            args: Prisma.ff_mitgliedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ff_mitgliedPayload>
          }
          deleteMany: {
            args: Prisma.ff_mitgliedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ff_mitgliedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ff_mitgliedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ff_mitgliedPayload>
          }
          aggregate: {
            args: Prisma.Ff_mitgliedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFf_mitglied>
          }
          groupBy: {
            args: Prisma.ff_mitgliedGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ff_mitgliedGroupByOutputType>[]
          }
          count: {
            args: Prisma.ff_mitgliedCountArgs<ExtArgs>
            result: $Utils.Optional<Ff_mitgliedCountAggregateOutputType> | number
          }
        }
      }
      funktion_ff: {
        payload: Prisma.$funktion_ffPayload<ExtArgs>
        fields: Prisma.funktion_ffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.funktion_ffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_ffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.funktion_ffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_ffPayload>
          }
          findFirst: {
            args: Prisma.funktion_ffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_ffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.funktion_ffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_ffPayload>
          }
          findMany: {
            args: Prisma.funktion_ffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_ffPayload>[]
          }
          create: {
            args: Prisma.funktion_ffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_ffPayload>
          }
          createMany: {
            args: Prisma.funktion_ffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.funktion_ffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_ffPayload>
          }
          update: {
            args: Prisma.funktion_ffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_ffPayload>
          }
          deleteMany: {
            args: Prisma.funktion_ffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.funktion_ffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.funktion_ffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_ffPayload>
          }
          aggregate: {
            args: Prisma.Funktion_ffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFunktion_ff>
          }
          groupBy: {
            args: Prisma.funktion_ffGroupByArgs<ExtArgs>
            result: $Utils.Optional<Funktion_ffGroupByOutputType>[]
          }
          count: {
            args: Prisma.funktion_ffCountArgs<ExtArgs>
            result: $Utils.Optional<Funktion_ffCountAggregateOutputType> | number
          }
        }
      }
      funktion_jf: {
        payload: Prisma.$funktion_jfPayload<ExtArgs>
        fields: Prisma.funktion_jfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.funktion_jfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_jfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.funktion_jfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_jfPayload>
          }
          findFirst: {
            args: Prisma.funktion_jfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_jfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.funktion_jfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_jfPayload>
          }
          findMany: {
            args: Prisma.funktion_jfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_jfPayload>[]
          }
          create: {
            args: Prisma.funktion_jfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_jfPayload>
          }
          createMany: {
            args: Prisma.funktion_jfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.funktion_jfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_jfPayload>
          }
          update: {
            args: Prisma.funktion_jfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_jfPayload>
          }
          deleteMany: {
            args: Prisma.funktion_jfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.funktion_jfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.funktion_jfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funktion_jfPayload>
          }
          aggregate: {
            args: Prisma.Funktion_jfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFunktion_jf>
          }
          groupBy: {
            args: Prisma.funktion_jfGroupByArgs<ExtArgs>
            result: $Utils.Optional<Funktion_jfGroupByOutputType>[]
          }
          count: {
            args: Prisma.funktion_jfCountArgs<ExtArgs>
            result: $Utils.Optional<Funktion_jfCountAggregateOutputType> | number
          }
        }
      }
      jf_erziehungsberechtigter: {
        payload: Prisma.$jf_erziehungsberechtigterPayload<ExtArgs>
        fields: Prisma.jf_erziehungsberechtigterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jf_erziehungsberechtigterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_erziehungsberechtigterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jf_erziehungsberechtigterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_erziehungsberechtigterPayload>
          }
          findFirst: {
            args: Prisma.jf_erziehungsberechtigterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_erziehungsberechtigterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jf_erziehungsberechtigterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_erziehungsberechtigterPayload>
          }
          findMany: {
            args: Prisma.jf_erziehungsberechtigterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_erziehungsberechtigterPayload>[]
          }
          create: {
            args: Prisma.jf_erziehungsberechtigterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_erziehungsberechtigterPayload>
          }
          createMany: {
            args: Prisma.jf_erziehungsberechtigterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jf_erziehungsberechtigterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_erziehungsberechtigterPayload>
          }
          update: {
            args: Prisma.jf_erziehungsberechtigterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_erziehungsberechtigterPayload>
          }
          deleteMany: {
            args: Prisma.jf_erziehungsberechtigterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jf_erziehungsberechtigterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jf_erziehungsberechtigterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_erziehungsberechtigterPayload>
          }
          aggregate: {
            args: Prisma.Jf_erziehungsberechtigterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJf_erziehungsberechtigter>
          }
          groupBy: {
            args: Prisma.jf_erziehungsberechtigterGroupByArgs<ExtArgs>
            result: $Utils.Optional<Jf_erziehungsberechtigterGroupByOutputType>[]
          }
          count: {
            args: Prisma.jf_erziehungsberechtigterCountArgs<ExtArgs>
            result: $Utils.Optional<Jf_erziehungsberechtigterCountAggregateOutputType> | number
          }
        }
      }
      jf_mitglied: {
        payload: Prisma.$jf_mitgliedPayload<ExtArgs>
        fields: Prisma.jf_mitgliedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jf_mitgliedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_mitgliedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jf_mitgliedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_mitgliedPayload>
          }
          findFirst: {
            args: Prisma.jf_mitgliedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_mitgliedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jf_mitgliedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_mitgliedPayload>
          }
          findMany: {
            args: Prisma.jf_mitgliedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_mitgliedPayload>[]
          }
          create: {
            args: Prisma.jf_mitgliedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_mitgliedPayload>
          }
          createMany: {
            args: Prisma.jf_mitgliedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jf_mitgliedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_mitgliedPayload>
          }
          update: {
            args: Prisma.jf_mitgliedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_mitgliedPayload>
          }
          deleteMany: {
            args: Prisma.jf_mitgliedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jf_mitgliedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jf_mitgliedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jf_mitgliedPayload>
          }
          aggregate: {
            args: Prisma.Jf_mitgliedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJf_mitglied>
          }
          groupBy: {
            args: Prisma.jf_mitgliedGroupByArgs<ExtArgs>
            result: $Utils.Optional<Jf_mitgliedGroupByOutputType>[]
          }
          count: {
            args: Prisma.jf_mitgliedCountArgs<ExtArgs>
            result: $Utils.Optional<Jf_mitgliedCountAggregateOutputType> | number
          }
        }
      }
      mitglied_funktionen: {
        payload: Prisma.$mitglied_funktionenPayload<ExtArgs>
        fields: Prisma.mitglied_funktionenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mitglied_funktionenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_funktionenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mitglied_funktionenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_funktionenPayload>
          }
          findFirst: {
            args: Prisma.mitglied_funktionenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_funktionenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mitglied_funktionenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_funktionenPayload>
          }
          findMany: {
            args: Prisma.mitglied_funktionenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_funktionenPayload>[]
          }
          create: {
            args: Prisma.mitglied_funktionenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_funktionenPayload>
          }
          createMany: {
            args: Prisma.mitglied_funktionenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mitglied_funktionenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_funktionenPayload>
          }
          update: {
            args: Prisma.mitglied_funktionenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_funktionenPayload>
          }
          deleteMany: {
            args: Prisma.mitglied_funktionenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mitglied_funktionenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mitglied_funktionenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_funktionenPayload>
          }
          aggregate: {
            args: Prisma.Mitglied_funktionenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMitglied_funktionen>
          }
          groupBy: {
            args: Prisma.mitglied_funktionenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mitglied_funktionenGroupByOutputType>[]
          }
          count: {
            args: Prisma.mitglied_funktionenCountArgs<ExtArgs>
            result: $Utils.Optional<Mitglied_funktionenCountAggregateOutputType> | number
          }
        }
      }
      mitglied_login: {
        payload: Prisma.$mitglied_loginPayload<ExtArgs>
        fields: Prisma.mitglied_loginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mitglied_loginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_loginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mitglied_loginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_loginPayload>
          }
          findFirst: {
            args: Prisma.mitglied_loginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_loginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mitglied_loginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_loginPayload>
          }
          findMany: {
            args: Prisma.mitglied_loginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_loginPayload>[]
          }
          create: {
            args: Prisma.mitglied_loginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_loginPayload>
          }
          createMany: {
            args: Prisma.mitglied_loginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mitglied_loginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_loginPayload>
          }
          update: {
            args: Prisma.mitglied_loginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_loginPayload>
          }
          deleteMany: {
            args: Prisma.mitglied_loginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mitglied_loginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mitglied_loginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitglied_loginPayload>
          }
          aggregate: {
            args: Prisma.Mitglied_loginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMitglied_login>
          }
          groupBy: {
            args: Prisma.mitglied_loginGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mitglied_loginGroupByOutputType>[]
          }
          count: {
            args: Prisma.mitglied_loginCountArgs<ExtArgs>
            result: $Utils.Optional<Mitglied_loginCountAggregateOutputType> | number
          }
        }
      }
      person: {
        payload: Prisma.$personPayload<ExtArgs>
        fields: Prisma.personFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          findFirst: {
            args: Prisma.personFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          findMany: {
            args: Prisma.personFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>[]
          }
          create: {
            args: Prisma.personCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          createMany: {
            args: Prisma.personCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.personDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          update: {
            args: Prisma.personUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          deleteMany: {
            args: Prisma.personDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.personUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.personUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.personGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.personCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      teilnahme: {
        payload: Prisma.$teilnahmePayload<ExtArgs>
        fields: Prisma.teilnahmeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teilnahmeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teilnahmePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teilnahmeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teilnahmePayload>
          }
          findFirst: {
            args: Prisma.teilnahmeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teilnahmePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teilnahmeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teilnahmePayload>
          }
          findMany: {
            args: Prisma.teilnahmeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teilnahmePayload>[]
          }
          create: {
            args: Prisma.teilnahmeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teilnahmePayload>
          }
          createMany: {
            args: Prisma.teilnahmeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.teilnahmeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teilnahmePayload>
          }
          update: {
            args: Prisma.teilnahmeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teilnahmePayload>
          }
          deleteMany: {
            args: Prisma.teilnahmeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teilnahmeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.teilnahmeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teilnahmePayload>
          }
          aggregate: {
            args: Prisma.TeilnahmeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeilnahme>
          }
          groupBy: {
            args: Prisma.teilnahmeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeilnahmeGroupByOutputType>[]
          }
          count: {
            args: Prisma.teilnahmeCountArgs<ExtArgs>
            result: $Utils.Optional<TeilnahmeCountAggregateOutputType> | number
          }
        }
      }
      uebungsabend: {
        payload: Prisma.$uebungsabendPayload<ExtArgs>
        fields: Prisma.uebungsabendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.uebungsabendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uebungsabendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.uebungsabendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uebungsabendPayload>
          }
          findFirst: {
            args: Prisma.uebungsabendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uebungsabendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.uebungsabendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uebungsabendPayload>
          }
          findMany: {
            args: Prisma.uebungsabendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uebungsabendPayload>[]
          }
          create: {
            args: Prisma.uebungsabendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uebungsabendPayload>
          }
          createMany: {
            args: Prisma.uebungsabendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.uebungsabendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uebungsabendPayload>
          }
          update: {
            args: Prisma.uebungsabendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uebungsabendPayload>
          }
          deleteMany: {
            args: Prisma.uebungsabendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.uebungsabendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.uebungsabendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uebungsabendPayload>
          }
          aggregate: {
            args: Prisma.UebungsabendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUebungsabend>
          }
          groupBy: {
            args: Prisma.uebungsabendGroupByArgs<ExtArgs>
            result: $Utils.Optional<UebungsabendGroupByOutputType>[]
          }
          count: {
            args: Prisma.uebungsabendCountArgs<ExtArgs>
            result: $Utils.Optional<UebungsabendCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    einsatz?: einsatzOmit
    ff_mitglied?: ff_mitgliedOmit
    funktion_ff?: funktion_ffOmit
    funktion_jf?: funktion_jfOmit
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterOmit
    jf_mitglied?: jf_mitgliedOmit
    mitglied_funktionen?: mitglied_funktionenOmit
    mitglied_login?: mitglied_loginOmit
    person?: personOmit
    teilnahme?: teilnahmeOmit
    uebungsabend?: uebungsabendOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Ff_mitgliedCountOutputType
   */

  export type Ff_mitgliedCountOutputType = {
    mitglied_funktionen: number
    teilnahme: number
  }

  export type Ff_mitgliedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mitglied_funktionen?: boolean | Ff_mitgliedCountOutputTypeCountMitglied_funktionenArgs
    teilnahme?: boolean | Ff_mitgliedCountOutputTypeCountTeilnahmeArgs
  }

  // Custom InputTypes
  /**
   * Ff_mitgliedCountOutputType without action
   */
  export type Ff_mitgliedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ff_mitgliedCountOutputType
     */
    select?: Ff_mitgliedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Ff_mitgliedCountOutputType without action
   */
  export type Ff_mitgliedCountOutputTypeCountMitglied_funktionenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mitglied_funktionenWhereInput
  }

  /**
   * Ff_mitgliedCountOutputType without action
   */
  export type Ff_mitgliedCountOutputTypeCountTeilnahmeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teilnahmeWhereInput
  }


  /**
   * Count Type Funktion_ffCountOutputType
   */

  export type Funktion_ffCountOutputType = {
    mitglied_funktionen: number
  }

  export type Funktion_ffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mitglied_funktionen?: boolean | Funktion_ffCountOutputTypeCountMitglied_funktionenArgs
  }

  // Custom InputTypes
  /**
   * Funktion_ffCountOutputType without action
   */
  export type Funktion_ffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funktion_ffCountOutputType
     */
    select?: Funktion_ffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Funktion_ffCountOutputType without action
   */
  export type Funktion_ffCountOutputTypeCountMitglied_funktionenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mitglied_funktionenWhereInput
  }


  /**
   * Count Type Jf_mitgliedCountOutputType
   */

  export type Jf_mitgliedCountOutputType = {
    jf_erziehungsberechtigter: number
  }

  export type Jf_mitgliedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jf_erziehungsberechtigter?: boolean | Jf_mitgliedCountOutputTypeCountJf_erziehungsberechtigterArgs
  }

  // Custom InputTypes
  /**
   * Jf_mitgliedCountOutputType without action
   */
  export type Jf_mitgliedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jf_mitgliedCountOutputType
     */
    select?: Jf_mitgliedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Jf_mitgliedCountOutputType without action
   */
  export type Jf_mitgliedCountOutputTypeCountJf_erziehungsberechtigterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jf_erziehungsberechtigterWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    ff_mitglied: number
    jf_erziehungsberechtigter: number
    jf_mitglied: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ff_mitglied?: boolean | PersonCountOutputTypeCountFf_mitgliedArgs
    jf_erziehungsberechtigter?: boolean | PersonCountOutputTypeCountJf_erziehungsberechtigterArgs
    jf_mitglied?: boolean | PersonCountOutputTypeCountJf_mitgliedArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountFf_mitgliedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ff_mitgliedWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountJf_erziehungsberechtigterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jf_erziehungsberechtigterWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountJf_mitgliedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jf_mitgliedWhereInput
  }


  /**
   * Models
   */

  /**
   * Model einsatz
   */

  export type AggregateEinsatz = {
    _count: EinsatzCountAggregateOutputType | null
    _avg: EinsatzAvgAggregateOutputType | null
    _sum: EinsatzSumAggregateOutputType | null
    _min: EinsatzMinAggregateOutputType | null
    _max: EinsatzMaxAggregateOutputType | null
  }

  export type EinsatzAvgAggregateOutputType = {
    id: number | null
  }

  export type EinsatzSumAggregateOutputType = {
    id: number | null
  }

  export type EinsatzMinAggregateOutputType = {
    id: number | null
    datum: Date | null
    beschreibung: string | null
    ort: string | null
    art: $Enums.einsatz_art | null
  }

  export type EinsatzMaxAggregateOutputType = {
    id: number | null
    datum: Date | null
    beschreibung: string | null
    ort: string | null
    art: $Enums.einsatz_art | null
  }

  export type EinsatzCountAggregateOutputType = {
    id: number
    datum: number
    beschreibung: number
    ort: number
    art: number
    _all: number
  }


  export type EinsatzAvgAggregateInputType = {
    id?: true
  }

  export type EinsatzSumAggregateInputType = {
    id?: true
  }

  export type EinsatzMinAggregateInputType = {
    id?: true
    datum?: true
    beschreibung?: true
    ort?: true
    art?: true
  }

  export type EinsatzMaxAggregateInputType = {
    id?: true
    datum?: true
    beschreibung?: true
    ort?: true
    art?: true
  }

  export type EinsatzCountAggregateInputType = {
    id?: true
    datum?: true
    beschreibung?: true
    ort?: true
    art?: true
    _all?: true
  }

  export type EinsatzAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which einsatz to aggregate.
     */
    where?: einsatzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of einsatzs to fetch.
     */
    orderBy?: einsatzOrderByWithRelationInput | einsatzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: einsatzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` einsatzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` einsatzs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned einsatzs
    **/
    _count?: true | EinsatzCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EinsatzAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EinsatzSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EinsatzMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EinsatzMaxAggregateInputType
  }

  export type GetEinsatzAggregateType<T extends EinsatzAggregateArgs> = {
        [P in keyof T & keyof AggregateEinsatz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEinsatz[P]>
      : GetScalarType<T[P], AggregateEinsatz[P]>
  }




  export type einsatzGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: einsatzWhereInput
    orderBy?: einsatzOrderByWithAggregationInput | einsatzOrderByWithAggregationInput[]
    by: EinsatzScalarFieldEnum[] | EinsatzScalarFieldEnum
    having?: einsatzScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EinsatzCountAggregateInputType | true
    _avg?: EinsatzAvgAggregateInputType
    _sum?: EinsatzSumAggregateInputType
    _min?: EinsatzMinAggregateInputType
    _max?: EinsatzMaxAggregateInputType
  }

  export type EinsatzGroupByOutputType = {
    id: number
    datum: Date
    beschreibung: string | null
    ort: string | null
    art: $Enums.einsatz_art
    _count: EinsatzCountAggregateOutputType | null
    _avg: EinsatzAvgAggregateOutputType | null
    _sum: EinsatzSumAggregateOutputType | null
    _min: EinsatzMinAggregateOutputType | null
    _max: EinsatzMaxAggregateOutputType | null
  }

  type GetEinsatzGroupByPayload<T extends einsatzGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EinsatzGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EinsatzGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EinsatzGroupByOutputType[P]>
            : GetScalarType<T[P], EinsatzGroupByOutputType[P]>
        }
      >
    >


  export type einsatzSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datum?: boolean
    beschreibung?: boolean
    ort?: boolean
    art?: boolean
  }, ExtArgs["result"]["einsatz"]>



  export type einsatzSelectScalar = {
    id?: boolean
    datum?: boolean
    beschreibung?: boolean
    ort?: boolean
    art?: boolean
  }

  export type einsatzOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "datum" | "beschreibung" | "ort" | "art", ExtArgs["result"]["einsatz"]>

  export type $einsatzPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "einsatz"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      datum: Date
      beschreibung: string | null
      ort: string | null
      art: $Enums.einsatz_art
    }, ExtArgs["result"]["einsatz"]>
    composites: {}
  }

  type einsatzGetPayload<S extends boolean | null | undefined | einsatzDefaultArgs> = $Result.GetResult<Prisma.$einsatzPayload, S>

  type einsatzCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<einsatzFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EinsatzCountAggregateInputType | true
    }

  export interface einsatzDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['einsatz'], meta: { name: 'einsatz' } }
    /**
     * Find zero or one Einsatz that matches the filter.
     * @param {einsatzFindUniqueArgs} args - Arguments to find a Einsatz
     * @example
     * // Get one Einsatz
     * const einsatz = await prisma.einsatz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends einsatzFindUniqueArgs>(args: SelectSubset<T, einsatzFindUniqueArgs<ExtArgs>>): Prisma__einsatzClient<$Result.GetResult<Prisma.$einsatzPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Einsatz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {einsatzFindUniqueOrThrowArgs} args - Arguments to find a Einsatz
     * @example
     * // Get one Einsatz
     * const einsatz = await prisma.einsatz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends einsatzFindUniqueOrThrowArgs>(args: SelectSubset<T, einsatzFindUniqueOrThrowArgs<ExtArgs>>): Prisma__einsatzClient<$Result.GetResult<Prisma.$einsatzPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Einsatz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {einsatzFindFirstArgs} args - Arguments to find a Einsatz
     * @example
     * // Get one Einsatz
     * const einsatz = await prisma.einsatz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends einsatzFindFirstArgs>(args?: SelectSubset<T, einsatzFindFirstArgs<ExtArgs>>): Prisma__einsatzClient<$Result.GetResult<Prisma.$einsatzPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Einsatz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {einsatzFindFirstOrThrowArgs} args - Arguments to find a Einsatz
     * @example
     * // Get one Einsatz
     * const einsatz = await prisma.einsatz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends einsatzFindFirstOrThrowArgs>(args?: SelectSubset<T, einsatzFindFirstOrThrowArgs<ExtArgs>>): Prisma__einsatzClient<$Result.GetResult<Prisma.$einsatzPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Einsatzs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {einsatzFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Einsatzs
     * const einsatzs = await prisma.einsatz.findMany()
     * 
     * // Get first 10 Einsatzs
     * const einsatzs = await prisma.einsatz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const einsatzWithIdOnly = await prisma.einsatz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends einsatzFindManyArgs>(args?: SelectSubset<T, einsatzFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$einsatzPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Einsatz.
     * @param {einsatzCreateArgs} args - Arguments to create a Einsatz.
     * @example
     * // Create one Einsatz
     * const Einsatz = await prisma.einsatz.create({
     *   data: {
     *     // ... data to create a Einsatz
     *   }
     * })
     * 
     */
    create<T extends einsatzCreateArgs>(args: SelectSubset<T, einsatzCreateArgs<ExtArgs>>): Prisma__einsatzClient<$Result.GetResult<Prisma.$einsatzPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Einsatzs.
     * @param {einsatzCreateManyArgs} args - Arguments to create many Einsatzs.
     * @example
     * // Create many Einsatzs
     * const einsatz = await prisma.einsatz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends einsatzCreateManyArgs>(args?: SelectSubset<T, einsatzCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Einsatz.
     * @param {einsatzDeleteArgs} args - Arguments to delete one Einsatz.
     * @example
     * // Delete one Einsatz
     * const Einsatz = await prisma.einsatz.delete({
     *   where: {
     *     // ... filter to delete one Einsatz
     *   }
     * })
     * 
     */
    delete<T extends einsatzDeleteArgs>(args: SelectSubset<T, einsatzDeleteArgs<ExtArgs>>): Prisma__einsatzClient<$Result.GetResult<Prisma.$einsatzPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Einsatz.
     * @param {einsatzUpdateArgs} args - Arguments to update one Einsatz.
     * @example
     * // Update one Einsatz
     * const einsatz = await prisma.einsatz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends einsatzUpdateArgs>(args: SelectSubset<T, einsatzUpdateArgs<ExtArgs>>): Prisma__einsatzClient<$Result.GetResult<Prisma.$einsatzPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Einsatzs.
     * @param {einsatzDeleteManyArgs} args - Arguments to filter Einsatzs to delete.
     * @example
     * // Delete a few Einsatzs
     * const { count } = await prisma.einsatz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends einsatzDeleteManyArgs>(args?: SelectSubset<T, einsatzDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Einsatzs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {einsatzUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Einsatzs
     * const einsatz = await prisma.einsatz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends einsatzUpdateManyArgs>(args: SelectSubset<T, einsatzUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Einsatz.
     * @param {einsatzUpsertArgs} args - Arguments to update or create a Einsatz.
     * @example
     * // Update or create a Einsatz
     * const einsatz = await prisma.einsatz.upsert({
     *   create: {
     *     // ... data to create a Einsatz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Einsatz we want to update
     *   }
     * })
     */
    upsert<T extends einsatzUpsertArgs>(args: SelectSubset<T, einsatzUpsertArgs<ExtArgs>>): Prisma__einsatzClient<$Result.GetResult<Prisma.$einsatzPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Einsatzs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {einsatzCountArgs} args - Arguments to filter Einsatzs to count.
     * @example
     * // Count the number of Einsatzs
     * const count = await prisma.einsatz.count({
     *   where: {
     *     // ... the filter for the Einsatzs we want to count
     *   }
     * })
    **/
    count<T extends einsatzCountArgs>(
      args?: Subset<T, einsatzCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EinsatzCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Einsatz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EinsatzAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EinsatzAggregateArgs>(args: Subset<T, EinsatzAggregateArgs>): Prisma.PrismaPromise<GetEinsatzAggregateType<T>>

    /**
     * Group by Einsatz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {einsatzGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends einsatzGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: einsatzGroupByArgs['orderBy'] }
        : { orderBy?: einsatzGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, einsatzGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEinsatzGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the einsatz model
   */
  readonly fields: einsatzFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for einsatz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__einsatzClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the einsatz model
   */
  interface einsatzFieldRefs {
    readonly id: FieldRef<"einsatz", 'Int'>
    readonly datum: FieldRef<"einsatz", 'DateTime'>
    readonly beschreibung: FieldRef<"einsatz", 'String'>
    readonly ort: FieldRef<"einsatz", 'String'>
    readonly art: FieldRef<"einsatz", 'einsatz_art'>
  }
    

  // Custom InputTypes
  /**
   * einsatz findUnique
   */
  export type einsatzFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the einsatz
     */
    select?: einsatzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the einsatz
     */
    omit?: einsatzOmit<ExtArgs> | null
    /**
     * Filter, which einsatz to fetch.
     */
    where: einsatzWhereUniqueInput
  }

  /**
   * einsatz findUniqueOrThrow
   */
  export type einsatzFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the einsatz
     */
    select?: einsatzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the einsatz
     */
    omit?: einsatzOmit<ExtArgs> | null
    /**
     * Filter, which einsatz to fetch.
     */
    where: einsatzWhereUniqueInput
  }

  /**
   * einsatz findFirst
   */
  export type einsatzFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the einsatz
     */
    select?: einsatzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the einsatz
     */
    omit?: einsatzOmit<ExtArgs> | null
    /**
     * Filter, which einsatz to fetch.
     */
    where?: einsatzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of einsatzs to fetch.
     */
    orderBy?: einsatzOrderByWithRelationInput | einsatzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for einsatzs.
     */
    cursor?: einsatzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` einsatzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` einsatzs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of einsatzs.
     */
    distinct?: EinsatzScalarFieldEnum | EinsatzScalarFieldEnum[]
  }

  /**
   * einsatz findFirstOrThrow
   */
  export type einsatzFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the einsatz
     */
    select?: einsatzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the einsatz
     */
    omit?: einsatzOmit<ExtArgs> | null
    /**
     * Filter, which einsatz to fetch.
     */
    where?: einsatzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of einsatzs to fetch.
     */
    orderBy?: einsatzOrderByWithRelationInput | einsatzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for einsatzs.
     */
    cursor?: einsatzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` einsatzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` einsatzs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of einsatzs.
     */
    distinct?: EinsatzScalarFieldEnum | EinsatzScalarFieldEnum[]
  }

  /**
   * einsatz findMany
   */
  export type einsatzFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the einsatz
     */
    select?: einsatzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the einsatz
     */
    omit?: einsatzOmit<ExtArgs> | null
    /**
     * Filter, which einsatzs to fetch.
     */
    where?: einsatzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of einsatzs to fetch.
     */
    orderBy?: einsatzOrderByWithRelationInput | einsatzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing einsatzs.
     */
    cursor?: einsatzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` einsatzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` einsatzs.
     */
    skip?: number
    distinct?: EinsatzScalarFieldEnum | EinsatzScalarFieldEnum[]
  }

  /**
   * einsatz create
   */
  export type einsatzCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the einsatz
     */
    select?: einsatzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the einsatz
     */
    omit?: einsatzOmit<ExtArgs> | null
    /**
     * The data needed to create a einsatz.
     */
    data: XOR<einsatzCreateInput, einsatzUncheckedCreateInput>
  }

  /**
   * einsatz createMany
   */
  export type einsatzCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many einsatzs.
     */
    data: einsatzCreateManyInput | einsatzCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * einsatz update
   */
  export type einsatzUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the einsatz
     */
    select?: einsatzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the einsatz
     */
    omit?: einsatzOmit<ExtArgs> | null
    /**
     * The data needed to update a einsatz.
     */
    data: XOR<einsatzUpdateInput, einsatzUncheckedUpdateInput>
    /**
     * Choose, which einsatz to update.
     */
    where: einsatzWhereUniqueInput
  }

  /**
   * einsatz updateMany
   */
  export type einsatzUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update einsatzs.
     */
    data: XOR<einsatzUpdateManyMutationInput, einsatzUncheckedUpdateManyInput>
    /**
     * Filter which einsatzs to update
     */
    where?: einsatzWhereInput
    /**
     * Limit how many einsatzs to update.
     */
    limit?: number
  }

  /**
   * einsatz upsert
   */
  export type einsatzUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the einsatz
     */
    select?: einsatzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the einsatz
     */
    omit?: einsatzOmit<ExtArgs> | null
    /**
     * The filter to search for the einsatz to update in case it exists.
     */
    where: einsatzWhereUniqueInput
    /**
     * In case the einsatz found by the `where` argument doesn't exist, create a new einsatz with this data.
     */
    create: XOR<einsatzCreateInput, einsatzUncheckedCreateInput>
    /**
     * In case the einsatz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<einsatzUpdateInput, einsatzUncheckedUpdateInput>
  }

  /**
   * einsatz delete
   */
  export type einsatzDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the einsatz
     */
    select?: einsatzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the einsatz
     */
    omit?: einsatzOmit<ExtArgs> | null
    /**
     * Filter which einsatz to delete.
     */
    where: einsatzWhereUniqueInput
  }

  /**
   * einsatz deleteMany
   */
  export type einsatzDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which einsatzs to delete
     */
    where?: einsatzWhereInput
    /**
     * Limit how many einsatzs to delete.
     */
    limit?: number
  }

  /**
   * einsatz without action
   */
  export type einsatzDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the einsatz
     */
    select?: einsatzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the einsatz
     */
    omit?: einsatzOmit<ExtArgs> | null
  }


  /**
   * Model ff_mitglied
   */

  export type AggregateFf_mitglied = {
    _count: Ff_mitgliedCountAggregateOutputType | null
    _avg: Ff_mitgliedAvgAggregateOutputType | null
    _sum: Ff_mitgliedSumAggregateOutputType | null
    _min: Ff_mitgliedMinAggregateOutputType | null
    _max: Ff_mitgliedMaxAggregateOutputType | null
  }

  export type Ff_mitgliedAvgAggregateOutputType = {
    id: number | null
    person_id: number | null
  }

  export type Ff_mitgliedSumAggregateOutputType = {
    id: number | null
    person_id: number | null
  }

  export type Ff_mitgliedMinAggregateOutputType = {
    id: number | null
    person_id: number | null
    eintrittsdatum: Date | null
    austrittsdatum: Date | null
    status: $Enums.ff_mitglied_status | null
  }

  export type Ff_mitgliedMaxAggregateOutputType = {
    id: number | null
    person_id: number | null
    eintrittsdatum: Date | null
    austrittsdatum: Date | null
    status: $Enums.ff_mitglied_status | null
  }

  export type Ff_mitgliedCountAggregateOutputType = {
    id: number
    person_id: number
    eintrittsdatum: number
    austrittsdatum: number
    status: number
    _all: number
  }


  export type Ff_mitgliedAvgAggregateInputType = {
    id?: true
    person_id?: true
  }

  export type Ff_mitgliedSumAggregateInputType = {
    id?: true
    person_id?: true
  }

  export type Ff_mitgliedMinAggregateInputType = {
    id?: true
    person_id?: true
    eintrittsdatum?: true
    austrittsdatum?: true
    status?: true
  }

  export type Ff_mitgliedMaxAggregateInputType = {
    id?: true
    person_id?: true
    eintrittsdatum?: true
    austrittsdatum?: true
    status?: true
  }

  export type Ff_mitgliedCountAggregateInputType = {
    id?: true
    person_id?: true
    eintrittsdatum?: true
    austrittsdatum?: true
    status?: true
    _all?: true
  }

  export type Ff_mitgliedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ff_mitglied to aggregate.
     */
    where?: ff_mitgliedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ff_mitglieds to fetch.
     */
    orderBy?: ff_mitgliedOrderByWithRelationInput | ff_mitgliedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ff_mitgliedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ff_mitglieds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ff_mitglieds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ff_mitglieds
    **/
    _count?: true | Ff_mitgliedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ff_mitgliedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ff_mitgliedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ff_mitgliedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ff_mitgliedMaxAggregateInputType
  }

  export type GetFf_mitgliedAggregateType<T extends Ff_mitgliedAggregateArgs> = {
        [P in keyof T & keyof AggregateFf_mitglied]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFf_mitglied[P]>
      : GetScalarType<T[P], AggregateFf_mitglied[P]>
  }




  export type ff_mitgliedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ff_mitgliedWhereInput
    orderBy?: ff_mitgliedOrderByWithAggregationInput | ff_mitgliedOrderByWithAggregationInput[]
    by: Ff_mitgliedScalarFieldEnum[] | Ff_mitgliedScalarFieldEnum
    having?: ff_mitgliedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ff_mitgliedCountAggregateInputType | true
    _avg?: Ff_mitgliedAvgAggregateInputType
    _sum?: Ff_mitgliedSumAggregateInputType
    _min?: Ff_mitgliedMinAggregateInputType
    _max?: Ff_mitgliedMaxAggregateInputType
  }

  export type Ff_mitgliedGroupByOutputType = {
    id: number
    person_id: number
    eintrittsdatum: Date
    austrittsdatum: Date | null
    status: $Enums.ff_mitglied_status
    _count: Ff_mitgliedCountAggregateOutputType | null
    _avg: Ff_mitgliedAvgAggregateOutputType | null
    _sum: Ff_mitgliedSumAggregateOutputType | null
    _min: Ff_mitgliedMinAggregateOutputType | null
    _max: Ff_mitgliedMaxAggregateOutputType | null
  }

  type GetFf_mitgliedGroupByPayload<T extends ff_mitgliedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ff_mitgliedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ff_mitgliedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ff_mitgliedGroupByOutputType[P]>
            : GetScalarType<T[P], Ff_mitgliedGroupByOutputType[P]>
        }
      >
    >


  export type ff_mitgliedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    person_id?: boolean
    eintrittsdatum?: boolean
    austrittsdatum?: boolean
    status?: boolean
    person?: boolean | personDefaultArgs<ExtArgs>
    mitglied_funktionen?: boolean | ff_mitglied$mitglied_funktionenArgs<ExtArgs>
    teilnahme?: boolean | ff_mitglied$teilnahmeArgs<ExtArgs>
    _count?: boolean | Ff_mitgliedCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ff_mitglied"]>



  export type ff_mitgliedSelectScalar = {
    id?: boolean
    person_id?: boolean
    eintrittsdatum?: boolean
    austrittsdatum?: boolean
    status?: boolean
  }

  export type ff_mitgliedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "person_id" | "eintrittsdatum" | "austrittsdatum" | "status", ExtArgs["result"]["ff_mitglied"]>
  export type ff_mitgliedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | personDefaultArgs<ExtArgs>
    mitglied_funktionen?: boolean | ff_mitglied$mitglied_funktionenArgs<ExtArgs>
    teilnahme?: boolean | ff_mitglied$teilnahmeArgs<ExtArgs>
    _count?: boolean | Ff_mitgliedCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ff_mitgliedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ff_mitglied"
    objects: {
      person: Prisma.$personPayload<ExtArgs>
      mitglied_funktionen: Prisma.$mitglied_funktionenPayload<ExtArgs>[]
      teilnahme: Prisma.$teilnahmePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      person_id: number
      eintrittsdatum: Date
      austrittsdatum: Date | null
      status: $Enums.ff_mitglied_status
    }, ExtArgs["result"]["ff_mitglied"]>
    composites: {}
  }

  type ff_mitgliedGetPayload<S extends boolean | null | undefined | ff_mitgliedDefaultArgs> = $Result.GetResult<Prisma.$ff_mitgliedPayload, S>

  type ff_mitgliedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ff_mitgliedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ff_mitgliedCountAggregateInputType | true
    }

  export interface ff_mitgliedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ff_mitglied'], meta: { name: 'ff_mitglied' } }
    /**
     * Find zero or one Ff_mitglied that matches the filter.
     * @param {ff_mitgliedFindUniqueArgs} args - Arguments to find a Ff_mitglied
     * @example
     * // Get one Ff_mitglied
     * const ff_mitglied = await prisma.ff_mitglied.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ff_mitgliedFindUniqueArgs>(args: SelectSubset<T, ff_mitgliedFindUniqueArgs<ExtArgs>>): Prisma__ff_mitgliedClient<$Result.GetResult<Prisma.$ff_mitgliedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ff_mitglied that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ff_mitgliedFindUniqueOrThrowArgs} args - Arguments to find a Ff_mitglied
     * @example
     * // Get one Ff_mitglied
     * const ff_mitglied = await prisma.ff_mitglied.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ff_mitgliedFindUniqueOrThrowArgs>(args: SelectSubset<T, ff_mitgliedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ff_mitgliedClient<$Result.GetResult<Prisma.$ff_mitgliedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ff_mitglied that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ff_mitgliedFindFirstArgs} args - Arguments to find a Ff_mitglied
     * @example
     * // Get one Ff_mitglied
     * const ff_mitglied = await prisma.ff_mitglied.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ff_mitgliedFindFirstArgs>(args?: SelectSubset<T, ff_mitgliedFindFirstArgs<ExtArgs>>): Prisma__ff_mitgliedClient<$Result.GetResult<Prisma.$ff_mitgliedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ff_mitglied that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ff_mitgliedFindFirstOrThrowArgs} args - Arguments to find a Ff_mitglied
     * @example
     * // Get one Ff_mitglied
     * const ff_mitglied = await prisma.ff_mitglied.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ff_mitgliedFindFirstOrThrowArgs>(args?: SelectSubset<T, ff_mitgliedFindFirstOrThrowArgs<ExtArgs>>): Prisma__ff_mitgliedClient<$Result.GetResult<Prisma.$ff_mitgliedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ff_mitglieds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ff_mitgliedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ff_mitglieds
     * const ff_mitglieds = await prisma.ff_mitglied.findMany()
     * 
     * // Get first 10 Ff_mitglieds
     * const ff_mitglieds = await prisma.ff_mitglied.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ff_mitgliedWithIdOnly = await prisma.ff_mitglied.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ff_mitgliedFindManyArgs>(args?: SelectSubset<T, ff_mitgliedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ff_mitgliedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ff_mitglied.
     * @param {ff_mitgliedCreateArgs} args - Arguments to create a Ff_mitglied.
     * @example
     * // Create one Ff_mitglied
     * const Ff_mitglied = await prisma.ff_mitglied.create({
     *   data: {
     *     // ... data to create a Ff_mitglied
     *   }
     * })
     * 
     */
    create<T extends ff_mitgliedCreateArgs>(args: SelectSubset<T, ff_mitgliedCreateArgs<ExtArgs>>): Prisma__ff_mitgliedClient<$Result.GetResult<Prisma.$ff_mitgliedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ff_mitglieds.
     * @param {ff_mitgliedCreateManyArgs} args - Arguments to create many Ff_mitglieds.
     * @example
     * // Create many Ff_mitglieds
     * const ff_mitglied = await prisma.ff_mitglied.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ff_mitgliedCreateManyArgs>(args?: SelectSubset<T, ff_mitgliedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ff_mitglied.
     * @param {ff_mitgliedDeleteArgs} args - Arguments to delete one Ff_mitglied.
     * @example
     * // Delete one Ff_mitglied
     * const Ff_mitglied = await prisma.ff_mitglied.delete({
     *   where: {
     *     // ... filter to delete one Ff_mitglied
     *   }
     * })
     * 
     */
    delete<T extends ff_mitgliedDeleteArgs>(args: SelectSubset<T, ff_mitgliedDeleteArgs<ExtArgs>>): Prisma__ff_mitgliedClient<$Result.GetResult<Prisma.$ff_mitgliedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ff_mitglied.
     * @param {ff_mitgliedUpdateArgs} args - Arguments to update one Ff_mitglied.
     * @example
     * // Update one Ff_mitglied
     * const ff_mitglied = await prisma.ff_mitglied.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ff_mitgliedUpdateArgs>(args: SelectSubset<T, ff_mitgliedUpdateArgs<ExtArgs>>): Prisma__ff_mitgliedClient<$Result.GetResult<Prisma.$ff_mitgliedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ff_mitglieds.
     * @param {ff_mitgliedDeleteManyArgs} args - Arguments to filter Ff_mitglieds to delete.
     * @example
     * // Delete a few Ff_mitglieds
     * const { count } = await prisma.ff_mitglied.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ff_mitgliedDeleteManyArgs>(args?: SelectSubset<T, ff_mitgliedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ff_mitglieds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ff_mitgliedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ff_mitglieds
     * const ff_mitglied = await prisma.ff_mitglied.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ff_mitgliedUpdateManyArgs>(args: SelectSubset<T, ff_mitgliedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ff_mitglied.
     * @param {ff_mitgliedUpsertArgs} args - Arguments to update or create a Ff_mitglied.
     * @example
     * // Update or create a Ff_mitglied
     * const ff_mitglied = await prisma.ff_mitglied.upsert({
     *   create: {
     *     // ... data to create a Ff_mitglied
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ff_mitglied we want to update
     *   }
     * })
     */
    upsert<T extends ff_mitgliedUpsertArgs>(args: SelectSubset<T, ff_mitgliedUpsertArgs<ExtArgs>>): Prisma__ff_mitgliedClient<$Result.GetResult<Prisma.$ff_mitgliedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ff_mitglieds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ff_mitgliedCountArgs} args - Arguments to filter Ff_mitglieds to count.
     * @example
     * // Count the number of Ff_mitglieds
     * const count = await prisma.ff_mitglied.count({
     *   where: {
     *     // ... the filter for the Ff_mitglieds we want to count
     *   }
     * })
    **/
    count<T extends ff_mitgliedCountArgs>(
      args?: Subset<T, ff_mitgliedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ff_mitgliedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ff_mitglied.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ff_mitgliedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ff_mitgliedAggregateArgs>(args: Subset<T, Ff_mitgliedAggregateArgs>): Prisma.PrismaPromise<GetFf_mitgliedAggregateType<T>>

    /**
     * Group by Ff_mitglied.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ff_mitgliedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ff_mitgliedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ff_mitgliedGroupByArgs['orderBy'] }
        : { orderBy?: ff_mitgliedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ff_mitgliedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFf_mitgliedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ff_mitglied model
   */
  readonly fields: ff_mitgliedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ff_mitglied.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ff_mitgliedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends personDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personDefaultArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mitglied_funktionen<T extends ff_mitglied$mitglied_funktionenArgs<ExtArgs> = {}>(args?: Subset<T, ff_mitglied$mitglied_funktionenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mitglied_funktionenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teilnahme<T extends ff_mitglied$teilnahmeArgs<ExtArgs> = {}>(args?: Subset<T, ff_mitglied$teilnahmeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teilnahmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ff_mitglied model
   */
  interface ff_mitgliedFieldRefs {
    readonly id: FieldRef<"ff_mitglied", 'Int'>
    readonly person_id: FieldRef<"ff_mitglied", 'Int'>
    readonly eintrittsdatum: FieldRef<"ff_mitglied", 'DateTime'>
    readonly austrittsdatum: FieldRef<"ff_mitglied", 'DateTime'>
    readonly status: FieldRef<"ff_mitglied", 'ff_mitglied_status'>
  }
    

  // Custom InputTypes
  /**
   * ff_mitglied findUnique
   */
  export type ff_mitgliedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ff_mitglied
     */
    select?: ff_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ff_mitglied
     */
    omit?: ff_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ff_mitgliedInclude<ExtArgs> | null
    /**
     * Filter, which ff_mitglied to fetch.
     */
    where: ff_mitgliedWhereUniqueInput
  }

  /**
   * ff_mitglied findUniqueOrThrow
   */
  export type ff_mitgliedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ff_mitglied
     */
    select?: ff_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ff_mitglied
     */
    omit?: ff_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ff_mitgliedInclude<ExtArgs> | null
    /**
     * Filter, which ff_mitglied to fetch.
     */
    where: ff_mitgliedWhereUniqueInput
  }

  /**
   * ff_mitglied findFirst
   */
  export type ff_mitgliedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ff_mitglied
     */
    select?: ff_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ff_mitglied
     */
    omit?: ff_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ff_mitgliedInclude<ExtArgs> | null
    /**
     * Filter, which ff_mitglied to fetch.
     */
    where?: ff_mitgliedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ff_mitglieds to fetch.
     */
    orderBy?: ff_mitgliedOrderByWithRelationInput | ff_mitgliedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ff_mitglieds.
     */
    cursor?: ff_mitgliedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ff_mitglieds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ff_mitglieds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ff_mitglieds.
     */
    distinct?: Ff_mitgliedScalarFieldEnum | Ff_mitgliedScalarFieldEnum[]
  }

  /**
   * ff_mitglied findFirstOrThrow
   */
  export type ff_mitgliedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ff_mitglied
     */
    select?: ff_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ff_mitglied
     */
    omit?: ff_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ff_mitgliedInclude<ExtArgs> | null
    /**
     * Filter, which ff_mitglied to fetch.
     */
    where?: ff_mitgliedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ff_mitglieds to fetch.
     */
    orderBy?: ff_mitgliedOrderByWithRelationInput | ff_mitgliedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ff_mitglieds.
     */
    cursor?: ff_mitgliedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ff_mitglieds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ff_mitglieds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ff_mitglieds.
     */
    distinct?: Ff_mitgliedScalarFieldEnum | Ff_mitgliedScalarFieldEnum[]
  }

  /**
   * ff_mitglied findMany
   */
  export type ff_mitgliedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ff_mitglied
     */
    select?: ff_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ff_mitglied
     */
    omit?: ff_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ff_mitgliedInclude<ExtArgs> | null
    /**
     * Filter, which ff_mitglieds to fetch.
     */
    where?: ff_mitgliedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ff_mitglieds to fetch.
     */
    orderBy?: ff_mitgliedOrderByWithRelationInput | ff_mitgliedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ff_mitglieds.
     */
    cursor?: ff_mitgliedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ff_mitglieds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ff_mitglieds.
     */
    skip?: number
    distinct?: Ff_mitgliedScalarFieldEnum | Ff_mitgliedScalarFieldEnum[]
  }

  /**
   * ff_mitglied create
   */
  export type ff_mitgliedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ff_mitglied
     */
    select?: ff_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ff_mitglied
     */
    omit?: ff_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ff_mitgliedInclude<ExtArgs> | null
    /**
     * The data needed to create a ff_mitglied.
     */
    data: XOR<ff_mitgliedCreateInput, ff_mitgliedUncheckedCreateInput>
  }

  /**
   * ff_mitglied createMany
   */
  export type ff_mitgliedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ff_mitglieds.
     */
    data: ff_mitgliedCreateManyInput | ff_mitgliedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ff_mitglied update
   */
  export type ff_mitgliedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ff_mitglied
     */
    select?: ff_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ff_mitglied
     */
    omit?: ff_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ff_mitgliedInclude<ExtArgs> | null
    /**
     * The data needed to update a ff_mitglied.
     */
    data: XOR<ff_mitgliedUpdateInput, ff_mitgliedUncheckedUpdateInput>
    /**
     * Choose, which ff_mitglied to update.
     */
    where: ff_mitgliedWhereUniqueInput
  }

  /**
   * ff_mitglied updateMany
   */
  export type ff_mitgliedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ff_mitglieds.
     */
    data: XOR<ff_mitgliedUpdateManyMutationInput, ff_mitgliedUncheckedUpdateManyInput>
    /**
     * Filter which ff_mitglieds to update
     */
    where?: ff_mitgliedWhereInput
    /**
     * Limit how many ff_mitglieds to update.
     */
    limit?: number
  }

  /**
   * ff_mitglied upsert
   */
  export type ff_mitgliedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ff_mitglied
     */
    select?: ff_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ff_mitglied
     */
    omit?: ff_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ff_mitgliedInclude<ExtArgs> | null
    /**
     * The filter to search for the ff_mitglied to update in case it exists.
     */
    where: ff_mitgliedWhereUniqueInput
    /**
     * In case the ff_mitglied found by the `where` argument doesn't exist, create a new ff_mitglied with this data.
     */
    create: XOR<ff_mitgliedCreateInput, ff_mitgliedUncheckedCreateInput>
    /**
     * In case the ff_mitglied was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ff_mitgliedUpdateInput, ff_mitgliedUncheckedUpdateInput>
  }

  /**
   * ff_mitglied delete
   */
  export type ff_mitgliedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ff_mitglied
     */
    select?: ff_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ff_mitglied
     */
    omit?: ff_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ff_mitgliedInclude<ExtArgs> | null
    /**
     * Filter which ff_mitglied to delete.
     */
    where: ff_mitgliedWhereUniqueInput
  }

  /**
   * ff_mitglied deleteMany
   */
  export type ff_mitgliedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ff_mitglieds to delete
     */
    where?: ff_mitgliedWhereInput
    /**
     * Limit how many ff_mitglieds to delete.
     */
    limit?: number
  }

  /**
   * ff_mitglied.mitglied_funktionen
   */
  export type ff_mitglied$mitglied_funktionenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_funktionen
     */
    select?: mitglied_funktionenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_funktionen
     */
    omit?: mitglied_funktionenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mitglied_funktionenInclude<ExtArgs> | null
    where?: mitglied_funktionenWhereInput
    orderBy?: mitglied_funktionenOrderByWithRelationInput | mitglied_funktionenOrderByWithRelationInput[]
    cursor?: mitglied_funktionenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Mitglied_funktionenScalarFieldEnum | Mitglied_funktionenScalarFieldEnum[]
  }

  /**
   * ff_mitglied.teilnahme
   */
  export type ff_mitglied$teilnahmeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teilnahme
     */
    select?: teilnahmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teilnahme
     */
    omit?: teilnahmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teilnahmeInclude<ExtArgs> | null
    where?: teilnahmeWhereInput
    orderBy?: teilnahmeOrderByWithRelationInput | teilnahmeOrderByWithRelationInput[]
    cursor?: teilnahmeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeilnahmeScalarFieldEnum | TeilnahmeScalarFieldEnum[]
  }

  /**
   * ff_mitglied without action
   */
  export type ff_mitgliedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ff_mitglied
     */
    select?: ff_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ff_mitglied
     */
    omit?: ff_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ff_mitgliedInclude<ExtArgs> | null
  }


  /**
   * Model funktion_ff
   */

  export type AggregateFunktion_ff = {
    _count: Funktion_ffCountAggregateOutputType | null
    _avg: Funktion_ffAvgAggregateOutputType | null
    _sum: Funktion_ffSumAggregateOutputType | null
    _min: Funktion_ffMinAggregateOutputType | null
    _max: Funktion_ffMaxAggregateOutputType | null
  }

  export type Funktion_ffAvgAggregateOutputType = {
    id: number | null
  }

  export type Funktion_ffSumAggregateOutputType = {
    id: number | null
  }

  export type Funktion_ffMinAggregateOutputType = {
    id: number | null
    name: string | null
    ist_admin: boolean | null
  }

  export type Funktion_ffMaxAggregateOutputType = {
    id: number | null
    name: string | null
    ist_admin: boolean | null
  }

  export type Funktion_ffCountAggregateOutputType = {
    id: number
    name: number
    ist_admin: number
    _all: number
  }


  export type Funktion_ffAvgAggregateInputType = {
    id?: true
  }

  export type Funktion_ffSumAggregateInputType = {
    id?: true
  }

  export type Funktion_ffMinAggregateInputType = {
    id?: true
    name?: true
    ist_admin?: true
  }

  export type Funktion_ffMaxAggregateInputType = {
    id?: true
    name?: true
    ist_admin?: true
  }

  export type Funktion_ffCountAggregateInputType = {
    id?: true
    name?: true
    ist_admin?: true
    _all?: true
  }

  export type Funktion_ffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funktion_ff to aggregate.
     */
    where?: funktion_ffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funktion_ffs to fetch.
     */
    orderBy?: funktion_ffOrderByWithRelationInput | funktion_ffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: funktion_ffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funktion_ffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funktion_ffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned funktion_ffs
    **/
    _count?: true | Funktion_ffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Funktion_ffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Funktion_ffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Funktion_ffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Funktion_ffMaxAggregateInputType
  }

  export type GetFunktion_ffAggregateType<T extends Funktion_ffAggregateArgs> = {
        [P in keyof T & keyof AggregateFunktion_ff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFunktion_ff[P]>
      : GetScalarType<T[P], AggregateFunktion_ff[P]>
  }




  export type funktion_ffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: funktion_ffWhereInput
    orderBy?: funktion_ffOrderByWithAggregationInput | funktion_ffOrderByWithAggregationInput[]
    by: Funktion_ffScalarFieldEnum[] | Funktion_ffScalarFieldEnum
    having?: funktion_ffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Funktion_ffCountAggregateInputType | true
    _avg?: Funktion_ffAvgAggregateInputType
    _sum?: Funktion_ffSumAggregateInputType
    _min?: Funktion_ffMinAggregateInputType
    _max?: Funktion_ffMaxAggregateInputType
  }

  export type Funktion_ffGroupByOutputType = {
    id: number
    name: string
    ist_admin: boolean
    _count: Funktion_ffCountAggregateOutputType | null
    _avg: Funktion_ffAvgAggregateOutputType | null
    _sum: Funktion_ffSumAggregateOutputType | null
    _min: Funktion_ffMinAggregateOutputType | null
    _max: Funktion_ffMaxAggregateOutputType | null
  }

  type GetFunktion_ffGroupByPayload<T extends funktion_ffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Funktion_ffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Funktion_ffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Funktion_ffGroupByOutputType[P]>
            : GetScalarType<T[P], Funktion_ffGroupByOutputType[P]>
        }
      >
    >


  export type funktion_ffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ist_admin?: boolean
    mitglied_funktionen?: boolean | funktion_ff$mitglied_funktionenArgs<ExtArgs>
    _count?: boolean | Funktion_ffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funktion_ff"]>



  export type funktion_ffSelectScalar = {
    id?: boolean
    name?: boolean
    ist_admin?: boolean
  }

  export type funktion_ffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ist_admin", ExtArgs["result"]["funktion_ff"]>
  export type funktion_ffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mitglied_funktionen?: boolean | funktion_ff$mitglied_funktionenArgs<ExtArgs>
    _count?: boolean | Funktion_ffCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $funktion_ffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "funktion_ff"
    objects: {
      mitglied_funktionen: Prisma.$mitglied_funktionenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      ist_admin: boolean
    }, ExtArgs["result"]["funktion_ff"]>
    composites: {}
  }

  type funktion_ffGetPayload<S extends boolean | null | undefined | funktion_ffDefaultArgs> = $Result.GetResult<Prisma.$funktion_ffPayload, S>

  type funktion_ffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<funktion_ffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Funktion_ffCountAggregateInputType | true
    }

  export interface funktion_ffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['funktion_ff'], meta: { name: 'funktion_ff' } }
    /**
     * Find zero or one Funktion_ff that matches the filter.
     * @param {funktion_ffFindUniqueArgs} args - Arguments to find a Funktion_ff
     * @example
     * // Get one Funktion_ff
     * const funktion_ff = await prisma.funktion_ff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends funktion_ffFindUniqueArgs>(args: SelectSubset<T, funktion_ffFindUniqueArgs<ExtArgs>>): Prisma__funktion_ffClient<$Result.GetResult<Prisma.$funktion_ffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funktion_ff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {funktion_ffFindUniqueOrThrowArgs} args - Arguments to find a Funktion_ff
     * @example
     * // Get one Funktion_ff
     * const funktion_ff = await prisma.funktion_ff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends funktion_ffFindUniqueOrThrowArgs>(args: SelectSubset<T, funktion_ffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__funktion_ffClient<$Result.GetResult<Prisma.$funktion_ffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funktion_ff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funktion_ffFindFirstArgs} args - Arguments to find a Funktion_ff
     * @example
     * // Get one Funktion_ff
     * const funktion_ff = await prisma.funktion_ff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends funktion_ffFindFirstArgs>(args?: SelectSubset<T, funktion_ffFindFirstArgs<ExtArgs>>): Prisma__funktion_ffClient<$Result.GetResult<Prisma.$funktion_ffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funktion_ff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funktion_ffFindFirstOrThrowArgs} args - Arguments to find a Funktion_ff
     * @example
     * // Get one Funktion_ff
     * const funktion_ff = await prisma.funktion_ff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends funktion_ffFindFirstOrThrowArgs>(args?: SelectSubset<T, funktion_ffFindFirstOrThrowArgs<ExtArgs>>): Prisma__funktion_ffClient<$Result.GetResult<Prisma.$funktion_ffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funktion_ffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funktion_ffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funktion_ffs
     * const funktion_ffs = await prisma.funktion_ff.findMany()
     * 
     * // Get first 10 Funktion_ffs
     * const funktion_ffs = await prisma.funktion_ff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funktion_ffWithIdOnly = await prisma.funktion_ff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends funktion_ffFindManyArgs>(args?: SelectSubset<T, funktion_ffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funktion_ffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funktion_ff.
     * @param {funktion_ffCreateArgs} args - Arguments to create a Funktion_ff.
     * @example
     * // Create one Funktion_ff
     * const Funktion_ff = await prisma.funktion_ff.create({
     *   data: {
     *     // ... data to create a Funktion_ff
     *   }
     * })
     * 
     */
    create<T extends funktion_ffCreateArgs>(args: SelectSubset<T, funktion_ffCreateArgs<ExtArgs>>): Prisma__funktion_ffClient<$Result.GetResult<Prisma.$funktion_ffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funktion_ffs.
     * @param {funktion_ffCreateManyArgs} args - Arguments to create many Funktion_ffs.
     * @example
     * // Create many Funktion_ffs
     * const funktion_ff = await prisma.funktion_ff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends funktion_ffCreateManyArgs>(args?: SelectSubset<T, funktion_ffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Funktion_ff.
     * @param {funktion_ffDeleteArgs} args - Arguments to delete one Funktion_ff.
     * @example
     * // Delete one Funktion_ff
     * const Funktion_ff = await prisma.funktion_ff.delete({
     *   where: {
     *     // ... filter to delete one Funktion_ff
     *   }
     * })
     * 
     */
    delete<T extends funktion_ffDeleteArgs>(args: SelectSubset<T, funktion_ffDeleteArgs<ExtArgs>>): Prisma__funktion_ffClient<$Result.GetResult<Prisma.$funktion_ffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funktion_ff.
     * @param {funktion_ffUpdateArgs} args - Arguments to update one Funktion_ff.
     * @example
     * // Update one Funktion_ff
     * const funktion_ff = await prisma.funktion_ff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends funktion_ffUpdateArgs>(args: SelectSubset<T, funktion_ffUpdateArgs<ExtArgs>>): Prisma__funktion_ffClient<$Result.GetResult<Prisma.$funktion_ffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funktion_ffs.
     * @param {funktion_ffDeleteManyArgs} args - Arguments to filter Funktion_ffs to delete.
     * @example
     * // Delete a few Funktion_ffs
     * const { count } = await prisma.funktion_ff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends funktion_ffDeleteManyArgs>(args?: SelectSubset<T, funktion_ffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funktion_ffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funktion_ffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funktion_ffs
     * const funktion_ff = await prisma.funktion_ff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends funktion_ffUpdateManyArgs>(args: SelectSubset<T, funktion_ffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Funktion_ff.
     * @param {funktion_ffUpsertArgs} args - Arguments to update or create a Funktion_ff.
     * @example
     * // Update or create a Funktion_ff
     * const funktion_ff = await prisma.funktion_ff.upsert({
     *   create: {
     *     // ... data to create a Funktion_ff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funktion_ff we want to update
     *   }
     * })
     */
    upsert<T extends funktion_ffUpsertArgs>(args: SelectSubset<T, funktion_ffUpsertArgs<ExtArgs>>): Prisma__funktion_ffClient<$Result.GetResult<Prisma.$funktion_ffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funktion_ffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funktion_ffCountArgs} args - Arguments to filter Funktion_ffs to count.
     * @example
     * // Count the number of Funktion_ffs
     * const count = await prisma.funktion_ff.count({
     *   where: {
     *     // ... the filter for the Funktion_ffs we want to count
     *   }
     * })
    **/
    count<T extends funktion_ffCountArgs>(
      args?: Subset<T, funktion_ffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Funktion_ffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funktion_ff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Funktion_ffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Funktion_ffAggregateArgs>(args: Subset<T, Funktion_ffAggregateArgs>): Prisma.PrismaPromise<GetFunktion_ffAggregateType<T>>

    /**
     * Group by Funktion_ff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funktion_ffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends funktion_ffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: funktion_ffGroupByArgs['orderBy'] }
        : { orderBy?: funktion_ffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, funktion_ffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFunktion_ffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the funktion_ff model
   */
  readonly fields: funktion_ffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for funktion_ff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__funktion_ffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mitglied_funktionen<T extends funktion_ff$mitglied_funktionenArgs<ExtArgs> = {}>(args?: Subset<T, funktion_ff$mitglied_funktionenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mitglied_funktionenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the funktion_ff model
   */
  interface funktion_ffFieldRefs {
    readonly id: FieldRef<"funktion_ff", 'Int'>
    readonly name: FieldRef<"funktion_ff", 'String'>
    readonly ist_admin: FieldRef<"funktion_ff", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * funktion_ff findUnique
   */
  export type funktion_ffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_ff
     */
    select?: funktion_ffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_ff
     */
    omit?: funktion_ffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funktion_ffInclude<ExtArgs> | null
    /**
     * Filter, which funktion_ff to fetch.
     */
    where: funktion_ffWhereUniqueInput
  }

  /**
   * funktion_ff findUniqueOrThrow
   */
  export type funktion_ffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_ff
     */
    select?: funktion_ffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_ff
     */
    omit?: funktion_ffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funktion_ffInclude<ExtArgs> | null
    /**
     * Filter, which funktion_ff to fetch.
     */
    where: funktion_ffWhereUniqueInput
  }

  /**
   * funktion_ff findFirst
   */
  export type funktion_ffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_ff
     */
    select?: funktion_ffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_ff
     */
    omit?: funktion_ffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funktion_ffInclude<ExtArgs> | null
    /**
     * Filter, which funktion_ff to fetch.
     */
    where?: funktion_ffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funktion_ffs to fetch.
     */
    orderBy?: funktion_ffOrderByWithRelationInput | funktion_ffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funktion_ffs.
     */
    cursor?: funktion_ffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funktion_ffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funktion_ffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funktion_ffs.
     */
    distinct?: Funktion_ffScalarFieldEnum | Funktion_ffScalarFieldEnum[]
  }

  /**
   * funktion_ff findFirstOrThrow
   */
  export type funktion_ffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_ff
     */
    select?: funktion_ffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_ff
     */
    omit?: funktion_ffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funktion_ffInclude<ExtArgs> | null
    /**
     * Filter, which funktion_ff to fetch.
     */
    where?: funktion_ffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funktion_ffs to fetch.
     */
    orderBy?: funktion_ffOrderByWithRelationInput | funktion_ffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funktion_ffs.
     */
    cursor?: funktion_ffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funktion_ffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funktion_ffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funktion_ffs.
     */
    distinct?: Funktion_ffScalarFieldEnum | Funktion_ffScalarFieldEnum[]
  }

  /**
   * funktion_ff findMany
   */
  export type funktion_ffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_ff
     */
    select?: funktion_ffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_ff
     */
    omit?: funktion_ffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funktion_ffInclude<ExtArgs> | null
    /**
     * Filter, which funktion_ffs to fetch.
     */
    where?: funktion_ffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funktion_ffs to fetch.
     */
    orderBy?: funktion_ffOrderByWithRelationInput | funktion_ffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing funktion_ffs.
     */
    cursor?: funktion_ffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funktion_ffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funktion_ffs.
     */
    skip?: number
    distinct?: Funktion_ffScalarFieldEnum | Funktion_ffScalarFieldEnum[]
  }

  /**
   * funktion_ff create
   */
  export type funktion_ffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_ff
     */
    select?: funktion_ffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_ff
     */
    omit?: funktion_ffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funktion_ffInclude<ExtArgs> | null
    /**
     * The data needed to create a funktion_ff.
     */
    data: XOR<funktion_ffCreateInput, funktion_ffUncheckedCreateInput>
  }

  /**
   * funktion_ff createMany
   */
  export type funktion_ffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many funktion_ffs.
     */
    data: funktion_ffCreateManyInput | funktion_ffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * funktion_ff update
   */
  export type funktion_ffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_ff
     */
    select?: funktion_ffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_ff
     */
    omit?: funktion_ffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funktion_ffInclude<ExtArgs> | null
    /**
     * The data needed to update a funktion_ff.
     */
    data: XOR<funktion_ffUpdateInput, funktion_ffUncheckedUpdateInput>
    /**
     * Choose, which funktion_ff to update.
     */
    where: funktion_ffWhereUniqueInput
  }

  /**
   * funktion_ff updateMany
   */
  export type funktion_ffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update funktion_ffs.
     */
    data: XOR<funktion_ffUpdateManyMutationInput, funktion_ffUncheckedUpdateManyInput>
    /**
     * Filter which funktion_ffs to update
     */
    where?: funktion_ffWhereInput
    /**
     * Limit how many funktion_ffs to update.
     */
    limit?: number
  }

  /**
   * funktion_ff upsert
   */
  export type funktion_ffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_ff
     */
    select?: funktion_ffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_ff
     */
    omit?: funktion_ffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funktion_ffInclude<ExtArgs> | null
    /**
     * The filter to search for the funktion_ff to update in case it exists.
     */
    where: funktion_ffWhereUniqueInput
    /**
     * In case the funktion_ff found by the `where` argument doesn't exist, create a new funktion_ff with this data.
     */
    create: XOR<funktion_ffCreateInput, funktion_ffUncheckedCreateInput>
    /**
     * In case the funktion_ff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<funktion_ffUpdateInput, funktion_ffUncheckedUpdateInput>
  }

  /**
   * funktion_ff delete
   */
  export type funktion_ffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_ff
     */
    select?: funktion_ffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_ff
     */
    omit?: funktion_ffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funktion_ffInclude<ExtArgs> | null
    /**
     * Filter which funktion_ff to delete.
     */
    where: funktion_ffWhereUniqueInput
  }

  /**
   * funktion_ff deleteMany
   */
  export type funktion_ffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funktion_ffs to delete
     */
    where?: funktion_ffWhereInput
    /**
     * Limit how many funktion_ffs to delete.
     */
    limit?: number
  }

  /**
   * funktion_ff.mitglied_funktionen
   */
  export type funktion_ff$mitglied_funktionenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_funktionen
     */
    select?: mitglied_funktionenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_funktionen
     */
    omit?: mitglied_funktionenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mitglied_funktionenInclude<ExtArgs> | null
    where?: mitglied_funktionenWhereInput
    orderBy?: mitglied_funktionenOrderByWithRelationInput | mitglied_funktionenOrderByWithRelationInput[]
    cursor?: mitglied_funktionenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Mitglied_funktionenScalarFieldEnum | Mitglied_funktionenScalarFieldEnum[]
  }

  /**
   * funktion_ff without action
   */
  export type funktion_ffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_ff
     */
    select?: funktion_ffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_ff
     */
    omit?: funktion_ffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funktion_ffInclude<ExtArgs> | null
  }


  /**
   * Model funktion_jf
   */

  export type AggregateFunktion_jf = {
    _count: Funktion_jfCountAggregateOutputType | null
    _avg: Funktion_jfAvgAggregateOutputType | null
    _sum: Funktion_jfSumAggregateOutputType | null
    _min: Funktion_jfMinAggregateOutputType | null
    _max: Funktion_jfMaxAggregateOutputType | null
  }

  export type Funktion_jfAvgAggregateOutputType = {
    id: number | null
  }

  export type Funktion_jfSumAggregateOutputType = {
    id: number | null
  }

  export type Funktion_jfMinAggregateOutputType = {
    id: number | null
    name: string | null
    ist_admin: boolean | null
  }

  export type Funktion_jfMaxAggregateOutputType = {
    id: number | null
    name: string | null
    ist_admin: boolean | null
  }

  export type Funktion_jfCountAggregateOutputType = {
    id: number
    name: number
    ist_admin: number
    _all: number
  }


  export type Funktion_jfAvgAggregateInputType = {
    id?: true
  }

  export type Funktion_jfSumAggregateInputType = {
    id?: true
  }

  export type Funktion_jfMinAggregateInputType = {
    id?: true
    name?: true
    ist_admin?: true
  }

  export type Funktion_jfMaxAggregateInputType = {
    id?: true
    name?: true
    ist_admin?: true
  }

  export type Funktion_jfCountAggregateInputType = {
    id?: true
    name?: true
    ist_admin?: true
    _all?: true
  }

  export type Funktion_jfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funktion_jf to aggregate.
     */
    where?: funktion_jfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funktion_jfs to fetch.
     */
    orderBy?: funktion_jfOrderByWithRelationInput | funktion_jfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: funktion_jfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funktion_jfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funktion_jfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned funktion_jfs
    **/
    _count?: true | Funktion_jfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Funktion_jfAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Funktion_jfSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Funktion_jfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Funktion_jfMaxAggregateInputType
  }

  export type GetFunktion_jfAggregateType<T extends Funktion_jfAggregateArgs> = {
        [P in keyof T & keyof AggregateFunktion_jf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFunktion_jf[P]>
      : GetScalarType<T[P], AggregateFunktion_jf[P]>
  }




  export type funktion_jfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: funktion_jfWhereInput
    orderBy?: funktion_jfOrderByWithAggregationInput | funktion_jfOrderByWithAggregationInput[]
    by: Funktion_jfScalarFieldEnum[] | Funktion_jfScalarFieldEnum
    having?: funktion_jfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Funktion_jfCountAggregateInputType | true
    _avg?: Funktion_jfAvgAggregateInputType
    _sum?: Funktion_jfSumAggregateInputType
    _min?: Funktion_jfMinAggregateInputType
    _max?: Funktion_jfMaxAggregateInputType
  }

  export type Funktion_jfGroupByOutputType = {
    id: number
    name: string
    ist_admin: boolean
    _count: Funktion_jfCountAggregateOutputType | null
    _avg: Funktion_jfAvgAggregateOutputType | null
    _sum: Funktion_jfSumAggregateOutputType | null
    _min: Funktion_jfMinAggregateOutputType | null
    _max: Funktion_jfMaxAggregateOutputType | null
  }

  type GetFunktion_jfGroupByPayload<T extends funktion_jfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Funktion_jfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Funktion_jfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Funktion_jfGroupByOutputType[P]>
            : GetScalarType<T[P], Funktion_jfGroupByOutputType[P]>
        }
      >
    >


  export type funktion_jfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ist_admin?: boolean
  }, ExtArgs["result"]["funktion_jf"]>



  export type funktion_jfSelectScalar = {
    id?: boolean
    name?: boolean
    ist_admin?: boolean
  }

  export type funktion_jfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ist_admin", ExtArgs["result"]["funktion_jf"]>

  export type $funktion_jfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "funktion_jf"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      ist_admin: boolean
    }, ExtArgs["result"]["funktion_jf"]>
    composites: {}
  }

  type funktion_jfGetPayload<S extends boolean | null | undefined | funktion_jfDefaultArgs> = $Result.GetResult<Prisma.$funktion_jfPayload, S>

  type funktion_jfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<funktion_jfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Funktion_jfCountAggregateInputType | true
    }

  export interface funktion_jfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['funktion_jf'], meta: { name: 'funktion_jf' } }
    /**
     * Find zero or one Funktion_jf that matches the filter.
     * @param {funktion_jfFindUniqueArgs} args - Arguments to find a Funktion_jf
     * @example
     * // Get one Funktion_jf
     * const funktion_jf = await prisma.funktion_jf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends funktion_jfFindUniqueArgs>(args: SelectSubset<T, funktion_jfFindUniqueArgs<ExtArgs>>): Prisma__funktion_jfClient<$Result.GetResult<Prisma.$funktion_jfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funktion_jf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {funktion_jfFindUniqueOrThrowArgs} args - Arguments to find a Funktion_jf
     * @example
     * // Get one Funktion_jf
     * const funktion_jf = await prisma.funktion_jf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends funktion_jfFindUniqueOrThrowArgs>(args: SelectSubset<T, funktion_jfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__funktion_jfClient<$Result.GetResult<Prisma.$funktion_jfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funktion_jf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funktion_jfFindFirstArgs} args - Arguments to find a Funktion_jf
     * @example
     * // Get one Funktion_jf
     * const funktion_jf = await prisma.funktion_jf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends funktion_jfFindFirstArgs>(args?: SelectSubset<T, funktion_jfFindFirstArgs<ExtArgs>>): Prisma__funktion_jfClient<$Result.GetResult<Prisma.$funktion_jfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funktion_jf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funktion_jfFindFirstOrThrowArgs} args - Arguments to find a Funktion_jf
     * @example
     * // Get one Funktion_jf
     * const funktion_jf = await prisma.funktion_jf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends funktion_jfFindFirstOrThrowArgs>(args?: SelectSubset<T, funktion_jfFindFirstOrThrowArgs<ExtArgs>>): Prisma__funktion_jfClient<$Result.GetResult<Prisma.$funktion_jfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funktion_jfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funktion_jfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funktion_jfs
     * const funktion_jfs = await prisma.funktion_jf.findMany()
     * 
     * // Get first 10 Funktion_jfs
     * const funktion_jfs = await prisma.funktion_jf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funktion_jfWithIdOnly = await prisma.funktion_jf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends funktion_jfFindManyArgs>(args?: SelectSubset<T, funktion_jfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funktion_jfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funktion_jf.
     * @param {funktion_jfCreateArgs} args - Arguments to create a Funktion_jf.
     * @example
     * // Create one Funktion_jf
     * const Funktion_jf = await prisma.funktion_jf.create({
     *   data: {
     *     // ... data to create a Funktion_jf
     *   }
     * })
     * 
     */
    create<T extends funktion_jfCreateArgs>(args: SelectSubset<T, funktion_jfCreateArgs<ExtArgs>>): Prisma__funktion_jfClient<$Result.GetResult<Prisma.$funktion_jfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funktion_jfs.
     * @param {funktion_jfCreateManyArgs} args - Arguments to create many Funktion_jfs.
     * @example
     * // Create many Funktion_jfs
     * const funktion_jf = await prisma.funktion_jf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends funktion_jfCreateManyArgs>(args?: SelectSubset<T, funktion_jfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Funktion_jf.
     * @param {funktion_jfDeleteArgs} args - Arguments to delete one Funktion_jf.
     * @example
     * // Delete one Funktion_jf
     * const Funktion_jf = await prisma.funktion_jf.delete({
     *   where: {
     *     // ... filter to delete one Funktion_jf
     *   }
     * })
     * 
     */
    delete<T extends funktion_jfDeleteArgs>(args: SelectSubset<T, funktion_jfDeleteArgs<ExtArgs>>): Prisma__funktion_jfClient<$Result.GetResult<Prisma.$funktion_jfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funktion_jf.
     * @param {funktion_jfUpdateArgs} args - Arguments to update one Funktion_jf.
     * @example
     * // Update one Funktion_jf
     * const funktion_jf = await prisma.funktion_jf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends funktion_jfUpdateArgs>(args: SelectSubset<T, funktion_jfUpdateArgs<ExtArgs>>): Prisma__funktion_jfClient<$Result.GetResult<Prisma.$funktion_jfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funktion_jfs.
     * @param {funktion_jfDeleteManyArgs} args - Arguments to filter Funktion_jfs to delete.
     * @example
     * // Delete a few Funktion_jfs
     * const { count } = await prisma.funktion_jf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends funktion_jfDeleteManyArgs>(args?: SelectSubset<T, funktion_jfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funktion_jfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funktion_jfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funktion_jfs
     * const funktion_jf = await prisma.funktion_jf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends funktion_jfUpdateManyArgs>(args: SelectSubset<T, funktion_jfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Funktion_jf.
     * @param {funktion_jfUpsertArgs} args - Arguments to update or create a Funktion_jf.
     * @example
     * // Update or create a Funktion_jf
     * const funktion_jf = await prisma.funktion_jf.upsert({
     *   create: {
     *     // ... data to create a Funktion_jf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funktion_jf we want to update
     *   }
     * })
     */
    upsert<T extends funktion_jfUpsertArgs>(args: SelectSubset<T, funktion_jfUpsertArgs<ExtArgs>>): Prisma__funktion_jfClient<$Result.GetResult<Prisma.$funktion_jfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funktion_jfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funktion_jfCountArgs} args - Arguments to filter Funktion_jfs to count.
     * @example
     * // Count the number of Funktion_jfs
     * const count = await prisma.funktion_jf.count({
     *   where: {
     *     // ... the filter for the Funktion_jfs we want to count
     *   }
     * })
    **/
    count<T extends funktion_jfCountArgs>(
      args?: Subset<T, funktion_jfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Funktion_jfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funktion_jf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Funktion_jfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Funktion_jfAggregateArgs>(args: Subset<T, Funktion_jfAggregateArgs>): Prisma.PrismaPromise<GetFunktion_jfAggregateType<T>>

    /**
     * Group by Funktion_jf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funktion_jfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends funktion_jfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: funktion_jfGroupByArgs['orderBy'] }
        : { orderBy?: funktion_jfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, funktion_jfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFunktion_jfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the funktion_jf model
   */
  readonly fields: funktion_jfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for funktion_jf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__funktion_jfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the funktion_jf model
   */
  interface funktion_jfFieldRefs {
    readonly id: FieldRef<"funktion_jf", 'Int'>
    readonly name: FieldRef<"funktion_jf", 'String'>
    readonly ist_admin: FieldRef<"funktion_jf", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * funktion_jf findUnique
   */
  export type funktion_jfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_jf
     */
    select?: funktion_jfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_jf
     */
    omit?: funktion_jfOmit<ExtArgs> | null
    /**
     * Filter, which funktion_jf to fetch.
     */
    where: funktion_jfWhereUniqueInput
  }

  /**
   * funktion_jf findUniqueOrThrow
   */
  export type funktion_jfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_jf
     */
    select?: funktion_jfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_jf
     */
    omit?: funktion_jfOmit<ExtArgs> | null
    /**
     * Filter, which funktion_jf to fetch.
     */
    where: funktion_jfWhereUniqueInput
  }

  /**
   * funktion_jf findFirst
   */
  export type funktion_jfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_jf
     */
    select?: funktion_jfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_jf
     */
    omit?: funktion_jfOmit<ExtArgs> | null
    /**
     * Filter, which funktion_jf to fetch.
     */
    where?: funktion_jfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funktion_jfs to fetch.
     */
    orderBy?: funktion_jfOrderByWithRelationInput | funktion_jfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funktion_jfs.
     */
    cursor?: funktion_jfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funktion_jfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funktion_jfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funktion_jfs.
     */
    distinct?: Funktion_jfScalarFieldEnum | Funktion_jfScalarFieldEnum[]
  }

  /**
   * funktion_jf findFirstOrThrow
   */
  export type funktion_jfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_jf
     */
    select?: funktion_jfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_jf
     */
    omit?: funktion_jfOmit<ExtArgs> | null
    /**
     * Filter, which funktion_jf to fetch.
     */
    where?: funktion_jfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funktion_jfs to fetch.
     */
    orderBy?: funktion_jfOrderByWithRelationInput | funktion_jfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funktion_jfs.
     */
    cursor?: funktion_jfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funktion_jfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funktion_jfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funktion_jfs.
     */
    distinct?: Funktion_jfScalarFieldEnum | Funktion_jfScalarFieldEnum[]
  }

  /**
   * funktion_jf findMany
   */
  export type funktion_jfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_jf
     */
    select?: funktion_jfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_jf
     */
    omit?: funktion_jfOmit<ExtArgs> | null
    /**
     * Filter, which funktion_jfs to fetch.
     */
    where?: funktion_jfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funktion_jfs to fetch.
     */
    orderBy?: funktion_jfOrderByWithRelationInput | funktion_jfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing funktion_jfs.
     */
    cursor?: funktion_jfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funktion_jfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funktion_jfs.
     */
    skip?: number
    distinct?: Funktion_jfScalarFieldEnum | Funktion_jfScalarFieldEnum[]
  }

  /**
   * funktion_jf create
   */
  export type funktion_jfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_jf
     */
    select?: funktion_jfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_jf
     */
    omit?: funktion_jfOmit<ExtArgs> | null
    /**
     * The data needed to create a funktion_jf.
     */
    data: XOR<funktion_jfCreateInput, funktion_jfUncheckedCreateInput>
  }

  /**
   * funktion_jf createMany
   */
  export type funktion_jfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many funktion_jfs.
     */
    data: funktion_jfCreateManyInput | funktion_jfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * funktion_jf update
   */
  export type funktion_jfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_jf
     */
    select?: funktion_jfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_jf
     */
    omit?: funktion_jfOmit<ExtArgs> | null
    /**
     * The data needed to update a funktion_jf.
     */
    data: XOR<funktion_jfUpdateInput, funktion_jfUncheckedUpdateInput>
    /**
     * Choose, which funktion_jf to update.
     */
    where: funktion_jfWhereUniqueInput
  }

  /**
   * funktion_jf updateMany
   */
  export type funktion_jfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update funktion_jfs.
     */
    data: XOR<funktion_jfUpdateManyMutationInput, funktion_jfUncheckedUpdateManyInput>
    /**
     * Filter which funktion_jfs to update
     */
    where?: funktion_jfWhereInput
    /**
     * Limit how many funktion_jfs to update.
     */
    limit?: number
  }

  /**
   * funktion_jf upsert
   */
  export type funktion_jfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_jf
     */
    select?: funktion_jfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_jf
     */
    omit?: funktion_jfOmit<ExtArgs> | null
    /**
     * The filter to search for the funktion_jf to update in case it exists.
     */
    where: funktion_jfWhereUniqueInput
    /**
     * In case the funktion_jf found by the `where` argument doesn't exist, create a new funktion_jf with this data.
     */
    create: XOR<funktion_jfCreateInput, funktion_jfUncheckedCreateInput>
    /**
     * In case the funktion_jf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<funktion_jfUpdateInput, funktion_jfUncheckedUpdateInput>
  }

  /**
   * funktion_jf delete
   */
  export type funktion_jfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_jf
     */
    select?: funktion_jfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_jf
     */
    omit?: funktion_jfOmit<ExtArgs> | null
    /**
     * Filter which funktion_jf to delete.
     */
    where: funktion_jfWhereUniqueInput
  }

  /**
   * funktion_jf deleteMany
   */
  export type funktion_jfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funktion_jfs to delete
     */
    where?: funktion_jfWhereInput
    /**
     * Limit how many funktion_jfs to delete.
     */
    limit?: number
  }

  /**
   * funktion_jf without action
   */
  export type funktion_jfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funktion_jf
     */
    select?: funktion_jfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funktion_jf
     */
    omit?: funktion_jfOmit<ExtArgs> | null
  }


  /**
   * Model jf_erziehungsberechtigter
   */

  export type AggregateJf_erziehungsberechtigter = {
    _count: Jf_erziehungsberechtigterCountAggregateOutputType | null
    _avg: Jf_erziehungsberechtigterAvgAggregateOutputType | null
    _sum: Jf_erziehungsberechtigterSumAggregateOutputType | null
    _min: Jf_erziehungsberechtigterMinAggregateOutputType | null
    _max: Jf_erziehungsberechtigterMaxAggregateOutputType | null
  }

  export type Jf_erziehungsberechtigterAvgAggregateOutputType = {
    id: number | null
    jf_mitglied_id: number | null
    person_id: number | null
  }

  export type Jf_erziehungsberechtigterSumAggregateOutputType = {
    id: number | null
    jf_mitglied_id: number | null
    person_id: number | null
  }

  export type Jf_erziehungsberechtigterMinAggregateOutputType = {
    id: number | null
    jf_mitglied_id: number | null
    person_id: number | null
  }

  export type Jf_erziehungsberechtigterMaxAggregateOutputType = {
    id: number | null
    jf_mitglied_id: number | null
    person_id: number | null
  }

  export type Jf_erziehungsberechtigterCountAggregateOutputType = {
    id: number
    jf_mitglied_id: number
    person_id: number
    _all: number
  }


  export type Jf_erziehungsberechtigterAvgAggregateInputType = {
    id?: true
    jf_mitglied_id?: true
    person_id?: true
  }

  export type Jf_erziehungsberechtigterSumAggregateInputType = {
    id?: true
    jf_mitglied_id?: true
    person_id?: true
  }

  export type Jf_erziehungsberechtigterMinAggregateInputType = {
    id?: true
    jf_mitglied_id?: true
    person_id?: true
  }

  export type Jf_erziehungsberechtigterMaxAggregateInputType = {
    id?: true
    jf_mitglied_id?: true
    person_id?: true
  }

  export type Jf_erziehungsberechtigterCountAggregateInputType = {
    id?: true
    jf_mitglied_id?: true
    person_id?: true
    _all?: true
  }

  export type Jf_erziehungsberechtigterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jf_erziehungsberechtigter to aggregate.
     */
    where?: jf_erziehungsberechtigterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jf_erziehungsberechtigters to fetch.
     */
    orderBy?: jf_erziehungsberechtigterOrderByWithRelationInput | jf_erziehungsberechtigterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jf_erziehungsberechtigterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jf_erziehungsberechtigters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jf_erziehungsberechtigters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jf_erziehungsberechtigters
    **/
    _count?: true | Jf_erziehungsberechtigterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Jf_erziehungsberechtigterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Jf_erziehungsberechtigterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Jf_erziehungsberechtigterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Jf_erziehungsberechtigterMaxAggregateInputType
  }

  export type GetJf_erziehungsberechtigterAggregateType<T extends Jf_erziehungsberechtigterAggregateArgs> = {
        [P in keyof T & keyof AggregateJf_erziehungsberechtigter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJf_erziehungsberechtigter[P]>
      : GetScalarType<T[P], AggregateJf_erziehungsberechtigter[P]>
  }




  export type jf_erziehungsberechtigterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jf_erziehungsberechtigterWhereInput
    orderBy?: jf_erziehungsberechtigterOrderByWithAggregationInput | jf_erziehungsberechtigterOrderByWithAggregationInput[]
    by: Jf_erziehungsberechtigterScalarFieldEnum[] | Jf_erziehungsberechtigterScalarFieldEnum
    having?: jf_erziehungsberechtigterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Jf_erziehungsberechtigterCountAggregateInputType | true
    _avg?: Jf_erziehungsberechtigterAvgAggregateInputType
    _sum?: Jf_erziehungsberechtigterSumAggregateInputType
    _min?: Jf_erziehungsberechtigterMinAggregateInputType
    _max?: Jf_erziehungsberechtigterMaxAggregateInputType
  }

  export type Jf_erziehungsberechtigterGroupByOutputType = {
    id: number
    jf_mitglied_id: number
    person_id: number
    _count: Jf_erziehungsberechtigterCountAggregateOutputType | null
    _avg: Jf_erziehungsberechtigterAvgAggregateOutputType | null
    _sum: Jf_erziehungsberechtigterSumAggregateOutputType | null
    _min: Jf_erziehungsberechtigterMinAggregateOutputType | null
    _max: Jf_erziehungsberechtigterMaxAggregateOutputType | null
  }

  type GetJf_erziehungsberechtigterGroupByPayload<T extends jf_erziehungsberechtigterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Jf_erziehungsberechtigterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Jf_erziehungsberechtigterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Jf_erziehungsberechtigterGroupByOutputType[P]>
            : GetScalarType<T[P], Jf_erziehungsberechtigterGroupByOutputType[P]>
        }
      >
    >


  export type jf_erziehungsberechtigterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jf_mitglied_id?: boolean
    person_id?: boolean
    jf_mitglied?: boolean | jf_mitgliedDefaultArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jf_erziehungsberechtigter"]>



  export type jf_erziehungsberechtigterSelectScalar = {
    id?: boolean
    jf_mitglied_id?: boolean
    person_id?: boolean
  }

  export type jf_erziehungsberechtigterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jf_mitglied_id" | "person_id", ExtArgs["result"]["jf_erziehungsberechtigter"]>
  export type jf_erziehungsberechtigterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jf_mitglied?: boolean | jf_mitgliedDefaultArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
  }

  export type $jf_erziehungsberechtigterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jf_erziehungsberechtigter"
    objects: {
      jf_mitglied: Prisma.$jf_mitgliedPayload<ExtArgs>
      person: Prisma.$personPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jf_mitglied_id: number
      person_id: number
    }, ExtArgs["result"]["jf_erziehungsberechtigter"]>
    composites: {}
  }

  type jf_erziehungsberechtigterGetPayload<S extends boolean | null | undefined | jf_erziehungsberechtigterDefaultArgs> = $Result.GetResult<Prisma.$jf_erziehungsberechtigterPayload, S>

  type jf_erziehungsberechtigterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jf_erziehungsberechtigterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Jf_erziehungsberechtigterCountAggregateInputType | true
    }

  export interface jf_erziehungsberechtigterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jf_erziehungsberechtigter'], meta: { name: 'jf_erziehungsberechtigter' } }
    /**
     * Find zero or one Jf_erziehungsberechtigter that matches the filter.
     * @param {jf_erziehungsberechtigterFindUniqueArgs} args - Arguments to find a Jf_erziehungsberechtigter
     * @example
     * // Get one Jf_erziehungsberechtigter
     * const jf_erziehungsberechtigter = await prisma.jf_erziehungsberechtigter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jf_erziehungsberechtigterFindUniqueArgs>(args: SelectSubset<T, jf_erziehungsberechtigterFindUniqueArgs<ExtArgs>>): Prisma__jf_erziehungsberechtigterClient<$Result.GetResult<Prisma.$jf_erziehungsberechtigterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jf_erziehungsberechtigter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jf_erziehungsberechtigterFindUniqueOrThrowArgs} args - Arguments to find a Jf_erziehungsberechtigter
     * @example
     * // Get one Jf_erziehungsberechtigter
     * const jf_erziehungsberechtigter = await prisma.jf_erziehungsberechtigter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jf_erziehungsberechtigterFindUniqueOrThrowArgs>(args: SelectSubset<T, jf_erziehungsberechtigterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jf_erziehungsberechtigterClient<$Result.GetResult<Prisma.$jf_erziehungsberechtigterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jf_erziehungsberechtigter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jf_erziehungsberechtigterFindFirstArgs} args - Arguments to find a Jf_erziehungsberechtigter
     * @example
     * // Get one Jf_erziehungsberechtigter
     * const jf_erziehungsberechtigter = await prisma.jf_erziehungsberechtigter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jf_erziehungsberechtigterFindFirstArgs>(args?: SelectSubset<T, jf_erziehungsberechtigterFindFirstArgs<ExtArgs>>): Prisma__jf_erziehungsberechtigterClient<$Result.GetResult<Prisma.$jf_erziehungsberechtigterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jf_erziehungsberechtigter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jf_erziehungsberechtigterFindFirstOrThrowArgs} args - Arguments to find a Jf_erziehungsberechtigter
     * @example
     * // Get one Jf_erziehungsberechtigter
     * const jf_erziehungsberechtigter = await prisma.jf_erziehungsberechtigter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jf_erziehungsberechtigterFindFirstOrThrowArgs>(args?: SelectSubset<T, jf_erziehungsberechtigterFindFirstOrThrowArgs<ExtArgs>>): Prisma__jf_erziehungsberechtigterClient<$Result.GetResult<Prisma.$jf_erziehungsberechtigterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jf_erziehungsberechtigters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jf_erziehungsberechtigterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jf_erziehungsberechtigters
     * const jf_erziehungsberechtigters = await prisma.jf_erziehungsberechtigter.findMany()
     * 
     * // Get first 10 Jf_erziehungsberechtigters
     * const jf_erziehungsberechtigters = await prisma.jf_erziehungsberechtigter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jf_erziehungsberechtigterWithIdOnly = await prisma.jf_erziehungsberechtigter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jf_erziehungsberechtigterFindManyArgs>(args?: SelectSubset<T, jf_erziehungsberechtigterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jf_erziehungsberechtigterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jf_erziehungsberechtigter.
     * @param {jf_erziehungsberechtigterCreateArgs} args - Arguments to create a Jf_erziehungsberechtigter.
     * @example
     * // Create one Jf_erziehungsberechtigter
     * const Jf_erziehungsberechtigter = await prisma.jf_erziehungsberechtigter.create({
     *   data: {
     *     // ... data to create a Jf_erziehungsberechtigter
     *   }
     * })
     * 
     */
    create<T extends jf_erziehungsberechtigterCreateArgs>(args: SelectSubset<T, jf_erziehungsberechtigterCreateArgs<ExtArgs>>): Prisma__jf_erziehungsberechtigterClient<$Result.GetResult<Prisma.$jf_erziehungsberechtigterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jf_erziehungsberechtigters.
     * @param {jf_erziehungsberechtigterCreateManyArgs} args - Arguments to create many Jf_erziehungsberechtigters.
     * @example
     * // Create many Jf_erziehungsberechtigters
     * const jf_erziehungsberechtigter = await prisma.jf_erziehungsberechtigter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jf_erziehungsberechtigterCreateManyArgs>(args?: SelectSubset<T, jf_erziehungsberechtigterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jf_erziehungsberechtigter.
     * @param {jf_erziehungsberechtigterDeleteArgs} args - Arguments to delete one Jf_erziehungsberechtigter.
     * @example
     * // Delete one Jf_erziehungsberechtigter
     * const Jf_erziehungsberechtigter = await prisma.jf_erziehungsberechtigter.delete({
     *   where: {
     *     // ... filter to delete one Jf_erziehungsberechtigter
     *   }
     * })
     * 
     */
    delete<T extends jf_erziehungsberechtigterDeleteArgs>(args: SelectSubset<T, jf_erziehungsberechtigterDeleteArgs<ExtArgs>>): Prisma__jf_erziehungsberechtigterClient<$Result.GetResult<Prisma.$jf_erziehungsberechtigterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jf_erziehungsberechtigter.
     * @param {jf_erziehungsberechtigterUpdateArgs} args - Arguments to update one Jf_erziehungsberechtigter.
     * @example
     * // Update one Jf_erziehungsberechtigter
     * const jf_erziehungsberechtigter = await prisma.jf_erziehungsberechtigter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jf_erziehungsberechtigterUpdateArgs>(args: SelectSubset<T, jf_erziehungsberechtigterUpdateArgs<ExtArgs>>): Prisma__jf_erziehungsberechtigterClient<$Result.GetResult<Prisma.$jf_erziehungsberechtigterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jf_erziehungsberechtigters.
     * @param {jf_erziehungsberechtigterDeleteManyArgs} args - Arguments to filter Jf_erziehungsberechtigters to delete.
     * @example
     * // Delete a few Jf_erziehungsberechtigters
     * const { count } = await prisma.jf_erziehungsberechtigter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jf_erziehungsberechtigterDeleteManyArgs>(args?: SelectSubset<T, jf_erziehungsberechtigterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jf_erziehungsberechtigters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jf_erziehungsberechtigterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jf_erziehungsberechtigters
     * const jf_erziehungsberechtigter = await prisma.jf_erziehungsberechtigter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jf_erziehungsberechtigterUpdateManyArgs>(args: SelectSubset<T, jf_erziehungsberechtigterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jf_erziehungsberechtigter.
     * @param {jf_erziehungsberechtigterUpsertArgs} args - Arguments to update or create a Jf_erziehungsberechtigter.
     * @example
     * // Update or create a Jf_erziehungsberechtigter
     * const jf_erziehungsberechtigter = await prisma.jf_erziehungsberechtigter.upsert({
     *   create: {
     *     // ... data to create a Jf_erziehungsberechtigter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jf_erziehungsberechtigter we want to update
     *   }
     * })
     */
    upsert<T extends jf_erziehungsberechtigterUpsertArgs>(args: SelectSubset<T, jf_erziehungsberechtigterUpsertArgs<ExtArgs>>): Prisma__jf_erziehungsberechtigterClient<$Result.GetResult<Prisma.$jf_erziehungsberechtigterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jf_erziehungsberechtigters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jf_erziehungsberechtigterCountArgs} args - Arguments to filter Jf_erziehungsberechtigters to count.
     * @example
     * // Count the number of Jf_erziehungsberechtigters
     * const count = await prisma.jf_erziehungsberechtigter.count({
     *   where: {
     *     // ... the filter for the Jf_erziehungsberechtigters we want to count
     *   }
     * })
    **/
    count<T extends jf_erziehungsberechtigterCountArgs>(
      args?: Subset<T, jf_erziehungsberechtigterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Jf_erziehungsberechtigterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jf_erziehungsberechtigter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jf_erziehungsberechtigterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Jf_erziehungsberechtigterAggregateArgs>(args: Subset<T, Jf_erziehungsberechtigterAggregateArgs>): Prisma.PrismaPromise<GetJf_erziehungsberechtigterAggregateType<T>>

    /**
     * Group by Jf_erziehungsberechtigter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jf_erziehungsberechtigterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jf_erziehungsberechtigterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jf_erziehungsberechtigterGroupByArgs['orderBy'] }
        : { orderBy?: jf_erziehungsberechtigterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jf_erziehungsberechtigterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJf_erziehungsberechtigterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jf_erziehungsberechtigter model
   */
  readonly fields: jf_erziehungsberechtigterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jf_erziehungsberechtigter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jf_erziehungsberechtigterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jf_mitglied<T extends jf_mitgliedDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jf_mitgliedDefaultArgs<ExtArgs>>): Prisma__jf_mitgliedClient<$Result.GetResult<Prisma.$jf_mitgliedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    person<T extends personDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personDefaultArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jf_erziehungsberechtigter model
   */
  interface jf_erziehungsberechtigterFieldRefs {
    readonly id: FieldRef<"jf_erziehungsberechtigter", 'Int'>
    readonly jf_mitglied_id: FieldRef<"jf_erziehungsberechtigter", 'Int'>
    readonly person_id: FieldRef<"jf_erziehungsberechtigter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * jf_erziehungsberechtigter findUnique
   */
  export type jf_erziehungsberechtigterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_erziehungsberechtigter
     */
    select?: jf_erziehungsberechtigterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_erziehungsberechtigter
     */
    omit?: jf_erziehungsberechtigterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_erziehungsberechtigterInclude<ExtArgs> | null
    /**
     * Filter, which jf_erziehungsberechtigter to fetch.
     */
    where: jf_erziehungsberechtigterWhereUniqueInput
  }

  /**
   * jf_erziehungsberechtigter findUniqueOrThrow
   */
  export type jf_erziehungsberechtigterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_erziehungsberechtigter
     */
    select?: jf_erziehungsberechtigterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_erziehungsberechtigter
     */
    omit?: jf_erziehungsberechtigterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_erziehungsberechtigterInclude<ExtArgs> | null
    /**
     * Filter, which jf_erziehungsberechtigter to fetch.
     */
    where: jf_erziehungsberechtigterWhereUniqueInput
  }

  /**
   * jf_erziehungsberechtigter findFirst
   */
  export type jf_erziehungsberechtigterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_erziehungsberechtigter
     */
    select?: jf_erziehungsberechtigterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_erziehungsberechtigter
     */
    omit?: jf_erziehungsberechtigterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_erziehungsberechtigterInclude<ExtArgs> | null
    /**
     * Filter, which jf_erziehungsberechtigter to fetch.
     */
    where?: jf_erziehungsberechtigterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jf_erziehungsberechtigters to fetch.
     */
    orderBy?: jf_erziehungsberechtigterOrderByWithRelationInput | jf_erziehungsberechtigterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jf_erziehungsberechtigters.
     */
    cursor?: jf_erziehungsberechtigterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jf_erziehungsberechtigters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jf_erziehungsberechtigters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jf_erziehungsberechtigters.
     */
    distinct?: Jf_erziehungsberechtigterScalarFieldEnum | Jf_erziehungsberechtigterScalarFieldEnum[]
  }

  /**
   * jf_erziehungsberechtigter findFirstOrThrow
   */
  export type jf_erziehungsberechtigterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_erziehungsberechtigter
     */
    select?: jf_erziehungsberechtigterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_erziehungsberechtigter
     */
    omit?: jf_erziehungsberechtigterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_erziehungsberechtigterInclude<ExtArgs> | null
    /**
     * Filter, which jf_erziehungsberechtigter to fetch.
     */
    where?: jf_erziehungsberechtigterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jf_erziehungsberechtigters to fetch.
     */
    orderBy?: jf_erziehungsberechtigterOrderByWithRelationInput | jf_erziehungsberechtigterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jf_erziehungsberechtigters.
     */
    cursor?: jf_erziehungsberechtigterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jf_erziehungsberechtigters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jf_erziehungsberechtigters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jf_erziehungsberechtigters.
     */
    distinct?: Jf_erziehungsberechtigterScalarFieldEnum | Jf_erziehungsberechtigterScalarFieldEnum[]
  }

  /**
   * jf_erziehungsberechtigter findMany
   */
  export type jf_erziehungsberechtigterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_erziehungsberechtigter
     */
    select?: jf_erziehungsberechtigterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_erziehungsberechtigter
     */
    omit?: jf_erziehungsberechtigterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_erziehungsberechtigterInclude<ExtArgs> | null
    /**
     * Filter, which jf_erziehungsberechtigters to fetch.
     */
    where?: jf_erziehungsberechtigterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jf_erziehungsberechtigters to fetch.
     */
    orderBy?: jf_erziehungsberechtigterOrderByWithRelationInput | jf_erziehungsberechtigterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jf_erziehungsberechtigters.
     */
    cursor?: jf_erziehungsberechtigterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jf_erziehungsberechtigters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jf_erziehungsberechtigters.
     */
    skip?: number
    distinct?: Jf_erziehungsberechtigterScalarFieldEnum | Jf_erziehungsberechtigterScalarFieldEnum[]
  }

  /**
   * jf_erziehungsberechtigter create
   */
  export type jf_erziehungsberechtigterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_erziehungsberechtigter
     */
    select?: jf_erziehungsberechtigterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_erziehungsberechtigter
     */
    omit?: jf_erziehungsberechtigterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_erziehungsberechtigterInclude<ExtArgs> | null
    /**
     * The data needed to create a jf_erziehungsberechtigter.
     */
    data: XOR<jf_erziehungsberechtigterCreateInput, jf_erziehungsberechtigterUncheckedCreateInput>
  }

  /**
   * jf_erziehungsberechtigter createMany
   */
  export type jf_erziehungsberechtigterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jf_erziehungsberechtigters.
     */
    data: jf_erziehungsberechtigterCreateManyInput | jf_erziehungsberechtigterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jf_erziehungsberechtigter update
   */
  export type jf_erziehungsberechtigterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_erziehungsberechtigter
     */
    select?: jf_erziehungsberechtigterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_erziehungsberechtigter
     */
    omit?: jf_erziehungsberechtigterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_erziehungsberechtigterInclude<ExtArgs> | null
    /**
     * The data needed to update a jf_erziehungsberechtigter.
     */
    data: XOR<jf_erziehungsberechtigterUpdateInput, jf_erziehungsberechtigterUncheckedUpdateInput>
    /**
     * Choose, which jf_erziehungsberechtigter to update.
     */
    where: jf_erziehungsberechtigterWhereUniqueInput
  }

  /**
   * jf_erziehungsberechtigter updateMany
   */
  export type jf_erziehungsberechtigterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jf_erziehungsberechtigters.
     */
    data: XOR<jf_erziehungsberechtigterUpdateManyMutationInput, jf_erziehungsberechtigterUncheckedUpdateManyInput>
    /**
     * Filter which jf_erziehungsberechtigters to update
     */
    where?: jf_erziehungsberechtigterWhereInput
    /**
     * Limit how many jf_erziehungsberechtigters to update.
     */
    limit?: number
  }

  /**
   * jf_erziehungsberechtigter upsert
   */
  export type jf_erziehungsberechtigterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_erziehungsberechtigter
     */
    select?: jf_erziehungsberechtigterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_erziehungsberechtigter
     */
    omit?: jf_erziehungsberechtigterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_erziehungsberechtigterInclude<ExtArgs> | null
    /**
     * The filter to search for the jf_erziehungsberechtigter to update in case it exists.
     */
    where: jf_erziehungsberechtigterWhereUniqueInput
    /**
     * In case the jf_erziehungsberechtigter found by the `where` argument doesn't exist, create a new jf_erziehungsberechtigter with this data.
     */
    create: XOR<jf_erziehungsberechtigterCreateInput, jf_erziehungsberechtigterUncheckedCreateInput>
    /**
     * In case the jf_erziehungsberechtigter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jf_erziehungsberechtigterUpdateInput, jf_erziehungsberechtigterUncheckedUpdateInput>
  }

  /**
   * jf_erziehungsberechtigter delete
   */
  export type jf_erziehungsberechtigterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_erziehungsberechtigter
     */
    select?: jf_erziehungsberechtigterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_erziehungsberechtigter
     */
    omit?: jf_erziehungsberechtigterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_erziehungsberechtigterInclude<ExtArgs> | null
    /**
     * Filter which jf_erziehungsberechtigter to delete.
     */
    where: jf_erziehungsberechtigterWhereUniqueInput
  }

  /**
   * jf_erziehungsberechtigter deleteMany
   */
  export type jf_erziehungsberechtigterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jf_erziehungsberechtigters to delete
     */
    where?: jf_erziehungsberechtigterWhereInput
    /**
     * Limit how many jf_erziehungsberechtigters to delete.
     */
    limit?: number
  }

  /**
   * jf_erziehungsberechtigter without action
   */
  export type jf_erziehungsberechtigterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_erziehungsberechtigter
     */
    select?: jf_erziehungsberechtigterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_erziehungsberechtigter
     */
    omit?: jf_erziehungsberechtigterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_erziehungsberechtigterInclude<ExtArgs> | null
  }


  /**
   * Model jf_mitglied
   */

  export type AggregateJf_mitglied = {
    _count: Jf_mitgliedCountAggregateOutputType | null
    _avg: Jf_mitgliedAvgAggregateOutputType | null
    _sum: Jf_mitgliedSumAggregateOutputType | null
    _min: Jf_mitgliedMinAggregateOutputType | null
    _max: Jf_mitgliedMaxAggregateOutputType | null
  }

  export type Jf_mitgliedAvgAggregateOutputType = {
    id: number | null
    person_id: number | null
  }

  export type Jf_mitgliedSumAggregateOutputType = {
    id: number | null
    person_id: number | null
  }

  export type Jf_mitgliedMinAggregateOutputType = {
    id: number | null
    person_id: number | null
    eintrittsdatum: Date | null
    austrittsdatum: Date | null
    status: $Enums.jf_mitglied_status | null
  }

  export type Jf_mitgliedMaxAggregateOutputType = {
    id: number | null
    person_id: number | null
    eintrittsdatum: Date | null
    austrittsdatum: Date | null
    status: $Enums.jf_mitglied_status | null
  }

  export type Jf_mitgliedCountAggregateOutputType = {
    id: number
    person_id: number
    eintrittsdatum: number
    austrittsdatum: number
    status: number
    _all: number
  }


  export type Jf_mitgliedAvgAggregateInputType = {
    id?: true
    person_id?: true
  }

  export type Jf_mitgliedSumAggregateInputType = {
    id?: true
    person_id?: true
  }

  export type Jf_mitgliedMinAggregateInputType = {
    id?: true
    person_id?: true
    eintrittsdatum?: true
    austrittsdatum?: true
    status?: true
  }

  export type Jf_mitgliedMaxAggregateInputType = {
    id?: true
    person_id?: true
    eintrittsdatum?: true
    austrittsdatum?: true
    status?: true
  }

  export type Jf_mitgliedCountAggregateInputType = {
    id?: true
    person_id?: true
    eintrittsdatum?: true
    austrittsdatum?: true
    status?: true
    _all?: true
  }

  export type Jf_mitgliedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jf_mitglied to aggregate.
     */
    where?: jf_mitgliedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jf_mitglieds to fetch.
     */
    orderBy?: jf_mitgliedOrderByWithRelationInput | jf_mitgliedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jf_mitgliedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jf_mitglieds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jf_mitglieds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jf_mitglieds
    **/
    _count?: true | Jf_mitgliedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Jf_mitgliedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Jf_mitgliedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Jf_mitgliedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Jf_mitgliedMaxAggregateInputType
  }

  export type GetJf_mitgliedAggregateType<T extends Jf_mitgliedAggregateArgs> = {
        [P in keyof T & keyof AggregateJf_mitglied]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJf_mitglied[P]>
      : GetScalarType<T[P], AggregateJf_mitglied[P]>
  }




  export type jf_mitgliedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jf_mitgliedWhereInput
    orderBy?: jf_mitgliedOrderByWithAggregationInput | jf_mitgliedOrderByWithAggregationInput[]
    by: Jf_mitgliedScalarFieldEnum[] | Jf_mitgliedScalarFieldEnum
    having?: jf_mitgliedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Jf_mitgliedCountAggregateInputType | true
    _avg?: Jf_mitgliedAvgAggregateInputType
    _sum?: Jf_mitgliedSumAggregateInputType
    _min?: Jf_mitgliedMinAggregateInputType
    _max?: Jf_mitgliedMaxAggregateInputType
  }

  export type Jf_mitgliedGroupByOutputType = {
    id: number
    person_id: number
    eintrittsdatum: Date
    austrittsdatum: Date | null
    status: $Enums.jf_mitglied_status
    _count: Jf_mitgliedCountAggregateOutputType | null
    _avg: Jf_mitgliedAvgAggregateOutputType | null
    _sum: Jf_mitgliedSumAggregateOutputType | null
    _min: Jf_mitgliedMinAggregateOutputType | null
    _max: Jf_mitgliedMaxAggregateOutputType | null
  }

  type GetJf_mitgliedGroupByPayload<T extends jf_mitgliedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Jf_mitgliedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Jf_mitgliedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Jf_mitgliedGroupByOutputType[P]>
            : GetScalarType<T[P], Jf_mitgliedGroupByOutputType[P]>
        }
      >
    >


  export type jf_mitgliedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    person_id?: boolean
    eintrittsdatum?: boolean
    austrittsdatum?: boolean
    status?: boolean
    jf_erziehungsberechtigter?: boolean | jf_mitglied$jf_erziehungsberechtigterArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
    _count?: boolean | Jf_mitgliedCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jf_mitglied"]>



  export type jf_mitgliedSelectScalar = {
    id?: boolean
    person_id?: boolean
    eintrittsdatum?: boolean
    austrittsdatum?: boolean
    status?: boolean
  }

  export type jf_mitgliedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "person_id" | "eintrittsdatum" | "austrittsdatum" | "status", ExtArgs["result"]["jf_mitglied"]>
  export type jf_mitgliedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jf_erziehungsberechtigter?: boolean | jf_mitglied$jf_erziehungsberechtigterArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
    _count?: boolean | Jf_mitgliedCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $jf_mitgliedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jf_mitglied"
    objects: {
      jf_erziehungsberechtigter: Prisma.$jf_erziehungsberechtigterPayload<ExtArgs>[]
      person: Prisma.$personPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      person_id: number
      eintrittsdatum: Date
      austrittsdatum: Date | null
      status: $Enums.jf_mitglied_status
    }, ExtArgs["result"]["jf_mitglied"]>
    composites: {}
  }

  type jf_mitgliedGetPayload<S extends boolean | null | undefined | jf_mitgliedDefaultArgs> = $Result.GetResult<Prisma.$jf_mitgliedPayload, S>

  type jf_mitgliedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jf_mitgliedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Jf_mitgliedCountAggregateInputType | true
    }

  export interface jf_mitgliedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jf_mitglied'], meta: { name: 'jf_mitglied' } }
    /**
     * Find zero or one Jf_mitglied that matches the filter.
     * @param {jf_mitgliedFindUniqueArgs} args - Arguments to find a Jf_mitglied
     * @example
     * // Get one Jf_mitglied
     * const jf_mitglied = await prisma.jf_mitglied.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jf_mitgliedFindUniqueArgs>(args: SelectSubset<T, jf_mitgliedFindUniqueArgs<ExtArgs>>): Prisma__jf_mitgliedClient<$Result.GetResult<Prisma.$jf_mitgliedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jf_mitglied that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jf_mitgliedFindUniqueOrThrowArgs} args - Arguments to find a Jf_mitglied
     * @example
     * // Get one Jf_mitglied
     * const jf_mitglied = await prisma.jf_mitglied.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jf_mitgliedFindUniqueOrThrowArgs>(args: SelectSubset<T, jf_mitgliedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jf_mitgliedClient<$Result.GetResult<Prisma.$jf_mitgliedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jf_mitglied that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jf_mitgliedFindFirstArgs} args - Arguments to find a Jf_mitglied
     * @example
     * // Get one Jf_mitglied
     * const jf_mitglied = await prisma.jf_mitglied.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jf_mitgliedFindFirstArgs>(args?: SelectSubset<T, jf_mitgliedFindFirstArgs<ExtArgs>>): Prisma__jf_mitgliedClient<$Result.GetResult<Prisma.$jf_mitgliedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jf_mitglied that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jf_mitgliedFindFirstOrThrowArgs} args - Arguments to find a Jf_mitglied
     * @example
     * // Get one Jf_mitglied
     * const jf_mitglied = await prisma.jf_mitglied.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jf_mitgliedFindFirstOrThrowArgs>(args?: SelectSubset<T, jf_mitgliedFindFirstOrThrowArgs<ExtArgs>>): Prisma__jf_mitgliedClient<$Result.GetResult<Prisma.$jf_mitgliedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jf_mitglieds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jf_mitgliedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jf_mitglieds
     * const jf_mitglieds = await prisma.jf_mitglied.findMany()
     * 
     * // Get first 10 Jf_mitglieds
     * const jf_mitglieds = await prisma.jf_mitglied.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jf_mitgliedWithIdOnly = await prisma.jf_mitglied.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jf_mitgliedFindManyArgs>(args?: SelectSubset<T, jf_mitgliedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jf_mitgliedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jf_mitglied.
     * @param {jf_mitgliedCreateArgs} args - Arguments to create a Jf_mitglied.
     * @example
     * // Create one Jf_mitglied
     * const Jf_mitglied = await prisma.jf_mitglied.create({
     *   data: {
     *     // ... data to create a Jf_mitglied
     *   }
     * })
     * 
     */
    create<T extends jf_mitgliedCreateArgs>(args: SelectSubset<T, jf_mitgliedCreateArgs<ExtArgs>>): Prisma__jf_mitgliedClient<$Result.GetResult<Prisma.$jf_mitgliedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jf_mitglieds.
     * @param {jf_mitgliedCreateManyArgs} args - Arguments to create many Jf_mitglieds.
     * @example
     * // Create many Jf_mitglieds
     * const jf_mitglied = await prisma.jf_mitglied.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jf_mitgliedCreateManyArgs>(args?: SelectSubset<T, jf_mitgliedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jf_mitglied.
     * @param {jf_mitgliedDeleteArgs} args - Arguments to delete one Jf_mitglied.
     * @example
     * // Delete one Jf_mitglied
     * const Jf_mitglied = await prisma.jf_mitglied.delete({
     *   where: {
     *     // ... filter to delete one Jf_mitglied
     *   }
     * })
     * 
     */
    delete<T extends jf_mitgliedDeleteArgs>(args: SelectSubset<T, jf_mitgliedDeleteArgs<ExtArgs>>): Prisma__jf_mitgliedClient<$Result.GetResult<Prisma.$jf_mitgliedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jf_mitglied.
     * @param {jf_mitgliedUpdateArgs} args - Arguments to update one Jf_mitglied.
     * @example
     * // Update one Jf_mitglied
     * const jf_mitglied = await prisma.jf_mitglied.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jf_mitgliedUpdateArgs>(args: SelectSubset<T, jf_mitgliedUpdateArgs<ExtArgs>>): Prisma__jf_mitgliedClient<$Result.GetResult<Prisma.$jf_mitgliedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jf_mitglieds.
     * @param {jf_mitgliedDeleteManyArgs} args - Arguments to filter Jf_mitglieds to delete.
     * @example
     * // Delete a few Jf_mitglieds
     * const { count } = await prisma.jf_mitglied.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jf_mitgliedDeleteManyArgs>(args?: SelectSubset<T, jf_mitgliedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jf_mitglieds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jf_mitgliedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jf_mitglieds
     * const jf_mitglied = await prisma.jf_mitglied.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jf_mitgliedUpdateManyArgs>(args: SelectSubset<T, jf_mitgliedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jf_mitglied.
     * @param {jf_mitgliedUpsertArgs} args - Arguments to update or create a Jf_mitglied.
     * @example
     * // Update or create a Jf_mitglied
     * const jf_mitglied = await prisma.jf_mitglied.upsert({
     *   create: {
     *     // ... data to create a Jf_mitglied
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jf_mitglied we want to update
     *   }
     * })
     */
    upsert<T extends jf_mitgliedUpsertArgs>(args: SelectSubset<T, jf_mitgliedUpsertArgs<ExtArgs>>): Prisma__jf_mitgliedClient<$Result.GetResult<Prisma.$jf_mitgliedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jf_mitglieds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jf_mitgliedCountArgs} args - Arguments to filter Jf_mitglieds to count.
     * @example
     * // Count the number of Jf_mitglieds
     * const count = await prisma.jf_mitglied.count({
     *   where: {
     *     // ... the filter for the Jf_mitglieds we want to count
     *   }
     * })
    **/
    count<T extends jf_mitgliedCountArgs>(
      args?: Subset<T, jf_mitgliedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Jf_mitgliedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jf_mitglied.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jf_mitgliedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Jf_mitgliedAggregateArgs>(args: Subset<T, Jf_mitgliedAggregateArgs>): Prisma.PrismaPromise<GetJf_mitgliedAggregateType<T>>

    /**
     * Group by Jf_mitglied.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jf_mitgliedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jf_mitgliedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jf_mitgliedGroupByArgs['orderBy'] }
        : { orderBy?: jf_mitgliedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jf_mitgliedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJf_mitgliedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jf_mitglied model
   */
  readonly fields: jf_mitgliedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jf_mitglied.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jf_mitgliedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jf_erziehungsberechtigter<T extends jf_mitglied$jf_erziehungsberechtigterArgs<ExtArgs> = {}>(args?: Subset<T, jf_mitglied$jf_erziehungsberechtigterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jf_erziehungsberechtigterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    person<T extends personDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personDefaultArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jf_mitglied model
   */
  interface jf_mitgliedFieldRefs {
    readonly id: FieldRef<"jf_mitglied", 'Int'>
    readonly person_id: FieldRef<"jf_mitglied", 'Int'>
    readonly eintrittsdatum: FieldRef<"jf_mitglied", 'DateTime'>
    readonly austrittsdatum: FieldRef<"jf_mitglied", 'DateTime'>
    readonly status: FieldRef<"jf_mitglied", 'jf_mitglied_status'>
  }
    

  // Custom InputTypes
  /**
   * jf_mitglied findUnique
   */
  export type jf_mitgliedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_mitglied
     */
    select?: jf_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_mitglied
     */
    omit?: jf_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_mitgliedInclude<ExtArgs> | null
    /**
     * Filter, which jf_mitglied to fetch.
     */
    where: jf_mitgliedWhereUniqueInput
  }

  /**
   * jf_mitglied findUniqueOrThrow
   */
  export type jf_mitgliedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_mitglied
     */
    select?: jf_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_mitglied
     */
    omit?: jf_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_mitgliedInclude<ExtArgs> | null
    /**
     * Filter, which jf_mitglied to fetch.
     */
    where: jf_mitgliedWhereUniqueInput
  }

  /**
   * jf_mitglied findFirst
   */
  export type jf_mitgliedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_mitglied
     */
    select?: jf_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_mitglied
     */
    omit?: jf_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_mitgliedInclude<ExtArgs> | null
    /**
     * Filter, which jf_mitglied to fetch.
     */
    where?: jf_mitgliedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jf_mitglieds to fetch.
     */
    orderBy?: jf_mitgliedOrderByWithRelationInput | jf_mitgliedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jf_mitglieds.
     */
    cursor?: jf_mitgliedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jf_mitglieds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jf_mitglieds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jf_mitglieds.
     */
    distinct?: Jf_mitgliedScalarFieldEnum | Jf_mitgliedScalarFieldEnum[]
  }

  /**
   * jf_mitglied findFirstOrThrow
   */
  export type jf_mitgliedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_mitglied
     */
    select?: jf_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_mitglied
     */
    omit?: jf_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_mitgliedInclude<ExtArgs> | null
    /**
     * Filter, which jf_mitglied to fetch.
     */
    where?: jf_mitgliedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jf_mitglieds to fetch.
     */
    orderBy?: jf_mitgliedOrderByWithRelationInput | jf_mitgliedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jf_mitglieds.
     */
    cursor?: jf_mitgliedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jf_mitglieds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jf_mitglieds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jf_mitglieds.
     */
    distinct?: Jf_mitgliedScalarFieldEnum | Jf_mitgliedScalarFieldEnum[]
  }

  /**
   * jf_mitglied findMany
   */
  export type jf_mitgliedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_mitglied
     */
    select?: jf_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_mitglied
     */
    omit?: jf_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_mitgliedInclude<ExtArgs> | null
    /**
     * Filter, which jf_mitglieds to fetch.
     */
    where?: jf_mitgliedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jf_mitglieds to fetch.
     */
    orderBy?: jf_mitgliedOrderByWithRelationInput | jf_mitgliedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jf_mitglieds.
     */
    cursor?: jf_mitgliedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jf_mitglieds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jf_mitglieds.
     */
    skip?: number
    distinct?: Jf_mitgliedScalarFieldEnum | Jf_mitgliedScalarFieldEnum[]
  }

  /**
   * jf_mitglied create
   */
  export type jf_mitgliedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_mitglied
     */
    select?: jf_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_mitglied
     */
    omit?: jf_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_mitgliedInclude<ExtArgs> | null
    /**
     * The data needed to create a jf_mitglied.
     */
    data: XOR<jf_mitgliedCreateInput, jf_mitgliedUncheckedCreateInput>
  }

  /**
   * jf_mitglied createMany
   */
  export type jf_mitgliedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jf_mitglieds.
     */
    data: jf_mitgliedCreateManyInput | jf_mitgliedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jf_mitglied update
   */
  export type jf_mitgliedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_mitglied
     */
    select?: jf_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_mitglied
     */
    omit?: jf_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_mitgliedInclude<ExtArgs> | null
    /**
     * The data needed to update a jf_mitglied.
     */
    data: XOR<jf_mitgliedUpdateInput, jf_mitgliedUncheckedUpdateInput>
    /**
     * Choose, which jf_mitglied to update.
     */
    where: jf_mitgliedWhereUniqueInput
  }

  /**
   * jf_mitglied updateMany
   */
  export type jf_mitgliedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jf_mitglieds.
     */
    data: XOR<jf_mitgliedUpdateManyMutationInput, jf_mitgliedUncheckedUpdateManyInput>
    /**
     * Filter which jf_mitglieds to update
     */
    where?: jf_mitgliedWhereInput
    /**
     * Limit how many jf_mitglieds to update.
     */
    limit?: number
  }

  /**
   * jf_mitglied upsert
   */
  export type jf_mitgliedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_mitglied
     */
    select?: jf_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_mitglied
     */
    omit?: jf_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_mitgliedInclude<ExtArgs> | null
    /**
     * The filter to search for the jf_mitglied to update in case it exists.
     */
    where: jf_mitgliedWhereUniqueInput
    /**
     * In case the jf_mitglied found by the `where` argument doesn't exist, create a new jf_mitglied with this data.
     */
    create: XOR<jf_mitgliedCreateInput, jf_mitgliedUncheckedCreateInput>
    /**
     * In case the jf_mitglied was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jf_mitgliedUpdateInput, jf_mitgliedUncheckedUpdateInput>
  }

  /**
   * jf_mitglied delete
   */
  export type jf_mitgliedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_mitglied
     */
    select?: jf_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_mitglied
     */
    omit?: jf_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_mitgliedInclude<ExtArgs> | null
    /**
     * Filter which jf_mitglied to delete.
     */
    where: jf_mitgliedWhereUniqueInput
  }

  /**
   * jf_mitglied deleteMany
   */
  export type jf_mitgliedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jf_mitglieds to delete
     */
    where?: jf_mitgliedWhereInput
    /**
     * Limit how many jf_mitglieds to delete.
     */
    limit?: number
  }

  /**
   * jf_mitglied.jf_erziehungsberechtigter
   */
  export type jf_mitglied$jf_erziehungsberechtigterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_erziehungsberechtigter
     */
    select?: jf_erziehungsberechtigterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_erziehungsberechtigter
     */
    omit?: jf_erziehungsberechtigterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_erziehungsberechtigterInclude<ExtArgs> | null
    where?: jf_erziehungsberechtigterWhereInput
    orderBy?: jf_erziehungsberechtigterOrderByWithRelationInput | jf_erziehungsberechtigterOrderByWithRelationInput[]
    cursor?: jf_erziehungsberechtigterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Jf_erziehungsberechtigterScalarFieldEnum | Jf_erziehungsberechtigterScalarFieldEnum[]
  }

  /**
   * jf_mitglied without action
   */
  export type jf_mitgliedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_mitglied
     */
    select?: jf_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_mitglied
     */
    omit?: jf_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_mitgliedInclude<ExtArgs> | null
  }


  /**
   * Model mitglied_funktionen
   */

  export type AggregateMitglied_funktionen = {
    _count: Mitglied_funktionenCountAggregateOutputType | null
    _avg: Mitglied_funktionenAvgAggregateOutputType | null
    _sum: Mitglied_funktionenSumAggregateOutputType | null
    _min: Mitglied_funktionenMinAggregateOutputType | null
    _max: Mitglied_funktionenMaxAggregateOutputType | null
  }

  export type Mitglied_funktionenAvgAggregateOutputType = {
    id: number | null
    mitglied_id: number | null
    funktion_id: number | null
  }

  export type Mitglied_funktionenSumAggregateOutputType = {
    id: number | null
    mitglied_id: number | null
    funktion_id: number | null
  }

  export type Mitglied_funktionenMinAggregateOutputType = {
    id: number | null
    mitglied_id: number | null
    funktion_id: number | null
    typ: $Enums.mitglied_funktionen_typ | null
  }

  export type Mitglied_funktionenMaxAggregateOutputType = {
    id: number | null
    mitglied_id: number | null
    funktion_id: number | null
    typ: $Enums.mitglied_funktionen_typ | null
  }

  export type Mitglied_funktionenCountAggregateOutputType = {
    id: number
    mitglied_id: number
    funktion_id: number
    typ: number
    _all: number
  }


  export type Mitglied_funktionenAvgAggregateInputType = {
    id?: true
    mitglied_id?: true
    funktion_id?: true
  }

  export type Mitglied_funktionenSumAggregateInputType = {
    id?: true
    mitglied_id?: true
    funktion_id?: true
  }

  export type Mitglied_funktionenMinAggregateInputType = {
    id?: true
    mitglied_id?: true
    funktion_id?: true
    typ?: true
  }

  export type Mitglied_funktionenMaxAggregateInputType = {
    id?: true
    mitglied_id?: true
    funktion_id?: true
    typ?: true
  }

  export type Mitglied_funktionenCountAggregateInputType = {
    id?: true
    mitglied_id?: true
    funktion_id?: true
    typ?: true
    _all?: true
  }

  export type Mitglied_funktionenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mitglied_funktionen to aggregate.
     */
    where?: mitglied_funktionenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mitglied_funktionens to fetch.
     */
    orderBy?: mitglied_funktionenOrderByWithRelationInput | mitglied_funktionenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mitglied_funktionenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mitglied_funktionens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mitglied_funktionens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mitglied_funktionens
    **/
    _count?: true | Mitglied_funktionenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mitglied_funktionenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mitglied_funktionenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mitglied_funktionenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mitglied_funktionenMaxAggregateInputType
  }

  export type GetMitglied_funktionenAggregateType<T extends Mitglied_funktionenAggregateArgs> = {
        [P in keyof T & keyof AggregateMitglied_funktionen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMitglied_funktionen[P]>
      : GetScalarType<T[P], AggregateMitglied_funktionen[P]>
  }




  export type mitglied_funktionenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mitglied_funktionenWhereInput
    orderBy?: mitglied_funktionenOrderByWithAggregationInput | mitglied_funktionenOrderByWithAggregationInput[]
    by: Mitglied_funktionenScalarFieldEnum[] | Mitglied_funktionenScalarFieldEnum
    having?: mitglied_funktionenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mitglied_funktionenCountAggregateInputType | true
    _avg?: Mitglied_funktionenAvgAggregateInputType
    _sum?: Mitglied_funktionenSumAggregateInputType
    _min?: Mitglied_funktionenMinAggregateInputType
    _max?: Mitglied_funktionenMaxAggregateInputType
  }

  export type Mitglied_funktionenGroupByOutputType = {
    id: number
    mitglied_id: number
    funktion_id: number
    typ: $Enums.mitglied_funktionen_typ
    _count: Mitglied_funktionenCountAggregateOutputType | null
    _avg: Mitglied_funktionenAvgAggregateOutputType | null
    _sum: Mitglied_funktionenSumAggregateOutputType | null
    _min: Mitglied_funktionenMinAggregateOutputType | null
    _max: Mitglied_funktionenMaxAggregateOutputType | null
  }

  type GetMitglied_funktionenGroupByPayload<T extends mitglied_funktionenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mitglied_funktionenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mitglied_funktionenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mitglied_funktionenGroupByOutputType[P]>
            : GetScalarType<T[P], Mitglied_funktionenGroupByOutputType[P]>
        }
      >
    >


  export type mitglied_funktionenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mitglied_id?: boolean
    funktion_id?: boolean
    typ?: boolean
    ff_mitglied?: boolean | ff_mitgliedDefaultArgs<ExtArgs>
    funktion_ff?: boolean | funktion_ffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mitglied_funktionen"]>



  export type mitglied_funktionenSelectScalar = {
    id?: boolean
    mitglied_id?: boolean
    funktion_id?: boolean
    typ?: boolean
  }

  export type mitglied_funktionenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mitglied_id" | "funktion_id" | "typ", ExtArgs["result"]["mitglied_funktionen"]>
  export type mitglied_funktionenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ff_mitglied?: boolean | ff_mitgliedDefaultArgs<ExtArgs>
    funktion_ff?: boolean | funktion_ffDefaultArgs<ExtArgs>
  }

  export type $mitglied_funktionenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mitglied_funktionen"
    objects: {
      ff_mitglied: Prisma.$ff_mitgliedPayload<ExtArgs>
      funktion_ff: Prisma.$funktion_ffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mitglied_id: number
      funktion_id: number
      typ: $Enums.mitglied_funktionen_typ
    }, ExtArgs["result"]["mitglied_funktionen"]>
    composites: {}
  }

  type mitglied_funktionenGetPayload<S extends boolean | null | undefined | mitglied_funktionenDefaultArgs> = $Result.GetResult<Prisma.$mitglied_funktionenPayload, S>

  type mitglied_funktionenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mitglied_funktionenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Mitglied_funktionenCountAggregateInputType | true
    }

  export interface mitglied_funktionenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mitglied_funktionen'], meta: { name: 'mitglied_funktionen' } }
    /**
     * Find zero or one Mitglied_funktionen that matches the filter.
     * @param {mitglied_funktionenFindUniqueArgs} args - Arguments to find a Mitglied_funktionen
     * @example
     * // Get one Mitglied_funktionen
     * const mitglied_funktionen = await prisma.mitglied_funktionen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mitglied_funktionenFindUniqueArgs>(args: SelectSubset<T, mitglied_funktionenFindUniqueArgs<ExtArgs>>): Prisma__mitglied_funktionenClient<$Result.GetResult<Prisma.$mitglied_funktionenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mitglied_funktionen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mitglied_funktionenFindUniqueOrThrowArgs} args - Arguments to find a Mitglied_funktionen
     * @example
     * // Get one Mitglied_funktionen
     * const mitglied_funktionen = await prisma.mitglied_funktionen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mitglied_funktionenFindUniqueOrThrowArgs>(args: SelectSubset<T, mitglied_funktionenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mitglied_funktionenClient<$Result.GetResult<Prisma.$mitglied_funktionenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mitglied_funktionen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitglied_funktionenFindFirstArgs} args - Arguments to find a Mitglied_funktionen
     * @example
     * // Get one Mitglied_funktionen
     * const mitglied_funktionen = await prisma.mitglied_funktionen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mitglied_funktionenFindFirstArgs>(args?: SelectSubset<T, mitglied_funktionenFindFirstArgs<ExtArgs>>): Prisma__mitglied_funktionenClient<$Result.GetResult<Prisma.$mitglied_funktionenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mitglied_funktionen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitglied_funktionenFindFirstOrThrowArgs} args - Arguments to find a Mitglied_funktionen
     * @example
     * // Get one Mitglied_funktionen
     * const mitglied_funktionen = await prisma.mitglied_funktionen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mitglied_funktionenFindFirstOrThrowArgs>(args?: SelectSubset<T, mitglied_funktionenFindFirstOrThrowArgs<ExtArgs>>): Prisma__mitglied_funktionenClient<$Result.GetResult<Prisma.$mitglied_funktionenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mitglied_funktionens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitglied_funktionenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mitglied_funktionens
     * const mitglied_funktionens = await prisma.mitglied_funktionen.findMany()
     * 
     * // Get first 10 Mitglied_funktionens
     * const mitglied_funktionens = await prisma.mitglied_funktionen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mitglied_funktionenWithIdOnly = await prisma.mitglied_funktionen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mitglied_funktionenFindManyArgs>(args?: SelectSubset<T, mitglied_funktionenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mitglied_funktionenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mitglied_funktionen.
     * @param {mitglied_funktionenCreateArgs} args - Arguments to create a Mitglied_funktionen.
     * @example
     * // Create one Mitglied_funktionen
     * const Mitglied_funktionen = await prisma.mitglied_funktionen.create({
     *   data: {
     *     // ... data to create a Mitglied_funktionen
     *   }
     * })
     * 
     */
    create<T extends mitglied_funktionenCreateArgs>(args: SelectSubset<T, mitglied_funktionenCreateArgs<ExtArgs>>): Prisma__mitglied_funktionenClient<$Result.GetResult<Prisma.$mitglied_funktionenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mitglied_funktionens.
     * @param {mitglied_funktionenCreateManyArgs} args - Arguments to create many Mitglied_funktionens.
     * @example
     * // Create many Mitglied_funktionens
     * const mitglied_funktionen = await prisma.mitglied_funktionen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mitglied_funktionenCreateManyArgs>(args?: SelectSubset<T, mitglied_funktionenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mitglied_funktionen.
     * @param {mitglied_funktionenDeleteArgs} args - Arguments to delete one Mitglied_funktionen.
     * @example
     * // Delete one Mitglied_funktionen
     * const Mitglied_funktionen = await prisma.mitglied_funktionen.delete({
     *   where: {
     *     // ... filter to delete one Mitglied_funktionen
     *   }
     * })
     * 
     */
    delete<T extends mitglied_funktionenDeleteArgs>(args: SelectSubset<T, mitglied_funktionenDeleteArgs<ExtArgs>>): Prisma__mitglied_funktionenClient<$Result.GetResult<Prisma.$mitglied_funktionenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mitglied_funktionen.
     * @param {mitglied_funktionenUpdateArgs} args - Arguments to update one Mitglied_funktionen.
     * @example
     * // Update one Mitglied_funktionen
     * const mitglied_funktionen = await prisma.mitglied_funktionen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mitglied_funktionenUpdateArgs>(args: SelectSubset<T, mitglied_funktionenUpdateArgs<ExtArgs>>): Prisma__mitglied_funktionenClient<$Result.GetResult<Prisma.$mitglied_funktionenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mitglied_funktionens.
     * @param {mitglied_funktionenDeleteManyArgs} args - Arguments to filter Mitglied_funktionens to delete.
     * @example
     * // Delete a few Mitglied_funktionens
     * const { count } = await prisma.mitglied_funktionen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mitglied_funktionenDeleteManyArgs>(args?: SelectSubset<T, mitglied_funktionenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mitglied_funktionens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitglied_funktionenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mitglied_funktionens
     * const mitglied_funktionen = await prisma.mitglied_funktionen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mitglied_funktionenUpdateManyArgs>(args: SelectSubset<T, mitglied_funktionenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mitglied_funktionen.
     * @param {mitglied_funktionenUpsertArgs} args - Arguments to update or create a Mitglied_funktionen.
     * @example
     * // Update or create a Mitglied_funktionen
     * const mitglied_funktionen = await prisma.mitglied_funktionen.upsert({
     *   create: {
     *     // ... data to create a Mitglied_funktionen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mitglied_funktionen we want to update
     *   }
     * })
     */
    upsert<T extends mitglied_funktionenUpsertArgs>(args: SelectSubset<T, mitglied_funktionenUpsertArgs<ExtArgs>>): Prisma__mitglied_funktionenClient<$Result.GetResult<Prisma.$mitglied_funktionenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mitglied_funktionens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitglied_funktionenCountArgs} args - Arguments to filter Mitglied_funktionens to count.
     * @example
     * // Count the number of Mitglied_funktionens
     * const count = await prisma.mitglied_funktionen.count({
     *   where: {
     *     // ... the filter for the Mitglied_funktionens we want to count
     *   }
     * })
    **/
    count<T extends mitglied_funktionenCountArgs>(
      args?: Subset<T, mitglied_funktionenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mitglied_funktionenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mitglied_funktionen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mitglied_funktionenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mitglied_funktionenAggregateArgs>(args: Subset<T, Mitglied_funktionenAggregateArgs>): Prisma.PrismaPromise<GetMitglied_funktionenAggregateType<T>>

    /**
     * Group by Mitglied_funktionen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitglied_funktionenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mitglied_funktionenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mitglied_funktionenGroupByArgs['orderBy'] }
        : { orderBy?: mitglied_funktionenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mitglied_funktionenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMitglied_funktionenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mitglied_funktionen model
   */
  readonly fields: mitglied_funktionenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mitglied_funktionen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mitglied_funktionenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ff_mitglied<T extends ff_mitgliedDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ff_mitgliedDefaultArgs<ExtArgs>>): Prisma__ff_mitgliedClient<$Result.GetResult<Prisma.$ff_mitgliedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    funktion_ff<T extends funktion_ffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, funktion_ffDefaultArgs<ExtArgs>>): Prisma__funktion_ffClient<$Result.GetResult<Prisma.$funktion_ffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mitglied_funktionen model
   */
  interface mitglied_funktionenFieldRefs {
    readonly id: FieldRef<"mitglied_funktionen", 'Int'>
    readonly mitglied_id: FieldRef<"mitglied_funktionen", 'Int'>
    readonly funktion_id: FieldRef<"mitglied_funktionen", 'Int'>
    readonly typ: FieldRef<"mitglied_funktionen", 'mitglied_funktionen_typ'>
  }
    

  // Custom InputTypes
  /**
   * mitglied_funktionen findUnique
   */
  export type mitglied_funktionenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_funktionen
     */
    select?: mitglied_funktionenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_funktionen
     */
    omit?: mitglied_funktionenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mitglied_funktionenInclude<ExtArgs> | null
    /**
     * Filter, which mitglied_funktionen to fetch.
     */
    where: mitglied_funktionenWhereUniqueInput
  }

  /**
   * mitglied_funktionen findUniqueOrThrow
   */
  export type mitglied_funktionenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_funktionen
     */
    select?: mitglied_funktionenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_funktionen
     */
    omit?: mitglied_funktionenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mitglied_funktionenInclude<ExtArgs> | null
    /**
     * Filter, which mitglied_funktionen to fetch.
     */
    where: mitglied_funktionenWhereUniqueInput
  }

  /**
   * mitglied_funktionen findFirst
   */
  export type mitglied_funktionenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_funktionen
     */
    select?: mitglied_funktionenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_funktionen
     */
    omit?: mitglied_funktionenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mitglied_funktionenInclude<ExtArgs> | null
    /**
     * Filter, which mitglied_funktionen to fetch.
     */
    where?: mitglied_funktionenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mitglied_funktionens to fetch.
     */
    orderBy?: mitglied_funktionenOrderByWithRelationInput | mitglied_funktionenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mitglied_funktionens.
     */
    cursor?: mitglied_funktionenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mitglied_funktionens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mitglied_funktionens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mitglied_funktionens.
     */
    distinct?: Mitglied_funktionenScalarFieldEnum | Mitglied_funktionenScalarFieldEnum[]
  }

  /**
   * mitglied_funktionen findFirstOrThrow
   */
  export type mitglied_funktionenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_funktionen
     */
    select?: mitglied_funktionenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_funktionen
     */
    omit?: mitglied_funktionenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mitglied_funktionenInclude<ExtArgs> | null
    /**
     * Filter, which mitglied_funktionen to fetch.
     */
    where?: mitglied_funktionenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mitglied_funktionens to fetch.
     */
    orderBy?: mitglied_funktionenOrderByWithRelationInput | mitglied_funktionenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mitglied_funktionens.
     */
    cursor?: mitglied_funktionenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mitglied_funktionens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mitglied_funktionens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mitglied_funktionens.
     */
    distinct?: Mitglied_funktionenScalarFieldEnum | Mitglied_funktionenScalarFieldEnum[]
  }

  /**
   * mitglied_funktionen findMany
   */
  export type mitglied_funktionenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_funktionen
     */
    select?: mitglied_funktionenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_funktionen
     */
    omit?: mitglied_funktionenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mitglied_funktionenInclude<ExtArgs> | null
    /**
     * Filter, which mitglied_funktionens to fetch.
     */
    where?: mitglied_funktionenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mitglied_funktionens to fetch.
     */
    orderBy?: mitglied_funktionenOrderByWithRelationInput | mitglied_funktionenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mitglied_funktionens.
     */
    cursor?: mitglied_funktionenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mitglied_funktionens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mitglied_funktionens.
     */
    skip?: number
    distinct?: Mitglied_funktionenScalarFieldEnum | Mitglied_funktionenScalarFieldEnum[]
  }

  /**
   * mitglied_funktionen create
   */
  export type mitglied_funktionenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_funktionen
     */
    select?: mitglied_funktionenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_funktionen
     */
    omit?: mitglied_funktionenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mitglied_funktionenInclude<ExtArgs> | null
    /**
     * The data needed to create a mitglied_funktionen.
     */
    data: XOR<mitglied_funktionenCreateInput, mitglied_funktionenUncheckedCreateInput>
  }

  /**
   * mitglied_funktionen createMany
   */
  export type mitglied_funktionenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mitglied_funktionens.
     */
    data: mitglied_funktionenCreateManyInput | mitglied_funktionenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mitglied_funktionen update
   */
  export type mitglied_funktionenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_funktionen
     */
    select?: mitglied_funktionenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_funktionen
     */
    omit?: mitglied_funktionenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mitglied_funktionenInclude<ExtArgs> | null
    /**
     * The data needed to update a mitglied_funktionen.
     */
    data: XOR<mitglied_funktionenUpdateInput, mitglied_funktionenUncheckedUpdateInput>
    /**
     * Choose, which mitglied_funktionen to update.
     */
    where: mitglied_funktionenWhereUniqueInput
  }

  /**
   * mitglied_funktionen updateMany
   */
  export type mitglied_funktionenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mitglied_funktionens.
     */
    data: XOR<mitglied_funktionenUpdateManyMutationInput, mitglied_funktionenUncheckedUpdateManyInput>
    /**
     * Filter which mitglied_funktionens to update
     */
    where?: mitglied_funktionenWhereInput
    /**
     * Limit how many mitglied_funktionens to update.
     */
    limit?: number
  }

  /**
   * mitglied_funktionen upsert
   */
  export type mitglied_funktionenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_funktionen
     */
    select?: mitglied_funktionenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_funktionen
     */
    omit?: mitglied_funktionenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mitglied_funktionenInclude<ExtArgs> | null
    /**
     * The filter to search for the mitglied_funktionen to update in case it exists.
     */
    where: mitglied_funktionenWhereUniqueInput
    /**
     * In case the mitglied_funktionen found by the `where` argument doesn't exist, create a new mitglied_funktionen with this data.
     */
    create: XOR<mitglied_funktionenCreateInput, mitglied_funktionenUncheckedCreateInput>
    /**
     * In case the mitglied_funktionen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mitglied_funktionenUpdateInput, mitglied_funktionenUncheckedUpdateInput>
  }

  /**
   * mitglied_funktionen delete
   */
  export type mitglied_funktionenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_funktionen
     */
    select?: mitglied_funktionenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_funktionen
     */
    omit?: mitglied_funktionenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mitglied_funktionenInclude<ExtArgs> | null
    /**
     * Filter which mitglied_funktionen to delete.
     */
    where: mitglied_funktionenWhereUniqueInput
  }

  /**
   * mitglied_funktionen deleteMany
   */
  export type mitglied_funktionenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mitglied_funktionens to delete
     */
    where?: mitglied_funktionenWhereInput
    /**
     * Limit how many mitglied_funktionens to delete.
     */
    limit?: number
  }

  /**
   * mitglied_funktionen without action
   */
  export type mitglied_funktionenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_funktionen
     */
    select?: mitglied_funktionenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_funktionen
     */
    omit?: mitglied_funktionenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mitglied_funktionenInclude<ExtArgs> | null
  }


  /**
   * Model mitglied_login
   */

  export type AggregateMitglied_login = {
    _count: Mitglied_loginCountAggregateOutputType | null
    _avg: Mitglied_loginAvgAggregateOutputType | null
    _sum: Mitglied_loginSumAggregateOutputType | null
    _min: Mitglied_loginMinAggregateOutputType | null
    _max: Mitglied_loginMaxAggregateOutputType | null
  }

  export type Mitglied_loginAvgAggregateOutputType = {
    id: number | null
    benutzer_id: number | null
    mitglied_id: number | null
  }

  export type Mitglied_loginSumAggregateOutputType = {
    id: number | null
    benutzer_id: number | null
    mitglied_id: number | null
  }

  export type Mitglied_loginMinAggregateOutputType = {
    id: number | null
    benutzer_id: number | null
    mitglied_id: number | null
    ty: $Enums.mitglied_login_ty | null
  }

  export type Mitglied_loginMaxAggregateOutputType = {
    id: number | null
    benutzer_id: number | null
    mitglied_id: number | null
    ty: $Enums.mitglied_login_ty | null
  }

  export type Mitglied_loginCountAggregateOutputType = {
    id: number
    benutzer_id: number
    mitglied_id: number
    ty: number
    _all: number
  }


  export type Mitglied_loginAvgAggregateInputType = {
    id?: true
    benutzer_id?: true
    mitglied_id?: true
  }

  export type Mitglied_loginSumAggregateInputType = {
    id?: true
    benutzer_id?: true
    mitglied_id?: true
  }

  export type Mitglied_loginMinAggregateInputType = {
    id?: true
    benutzer_id?: true
    mitglied_id?: true
    ty?: true
  }

  export type Mitglied_loginMaxAggregateInputType = {
    id?: true
    benutzer_id?: true
    mitglied_id?: true
    ty?: true
  }

  export type Mitglied_loginCountAggregateInputType = {
    id?: true
    benutzer_id?: true
    mitglied_id?: true
    ty?: true
    _all?: true
  }

  export type Mitglied_loginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mitglied_login to aggregate.
     */
    where?: mitglied_loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mitglied_logins to fetch.
     */
    orderBy?: mitglied_loginOrderByWithRelationInput | mitglied_loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mitglied_loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mitglied_logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mitglied_logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mitglied_logins
    **/
    _count?: true | Mitglied_loginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mitglied_loginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mitglied_loginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mitglied_loginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mitglied_loginMaxAggregateInputType
  }

  export type GetMitglied_loginAggregateType<T extends Mitglied_loginAggregateArgs> = {
        [P in keyof T & keyof AggregateMitglied_login]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMitglied_login[P]>
      : GetScalarType<T[P], AggregateMitglied_login[P]>
  }




  export type mitglied_loginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mitglied_loginWhereInput
    orderBy?: mitglied_loginOrderByWithAggregationInput | mitglied_loginOrderByWithAggregationInput[]
    by: Mitglied_loginScalarFieldEnum[] | Mitglied_loginScalarFieldEnum
    having?: mitglied_loginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mitglied_loginCountAggregateInputType | true
    _avg?: Mitglied_loginAvgAggregateInputType
    _sum?: Mitglied_loginSumAggregateInputType
    _min?: Mitglied_loginMinAggregateInputType
    _max?: Mitglied_loginMaxAggregateInputType
  }

  export type Mitglied_loginGroupByOutputType = {
    id: number
    benutzer_id: number
    mitglied_id: number
    ty: $Enums.mitglied_login_ty
    _count: Mitglied_loginCountAggregateOutputType | null
    _avg: Mitglied_loginAvgAggregateOutputType | null
    _sum: Mitglied_loginSumAggregateOutputType | null
    _min: Mitglied_loginMinAggregateOutputType | null
    _max: Mitglied_loginMaxAggregateOutputType | null
  }

  type GetMitglied_loginGroupByPayload<T extends mitglied_loginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mitglied_loginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mitglied_loginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mitglied_loginGroupByOutputType[P]>
            : GetScalarType<T[P], Mitglied_loginGroupByOutputType[P]>
        }
      >
    >


  export type mitglied_loginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    benutzer_id?: boolean
    mitglied_id?: boolean
    ty?: boolean
  }, ExtArgs["result"]["mitglied_login"]>



  export type mitglied_loginSelectScalar = {
    id?: boolean
    benutzer_id?: boolean
    mitglied_id?: boolean
    ty?: boolean
  }

  export type mitglied_loginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "benutzer_id" | "mitglied_id" | "ty", ExtArgs["result"]["mitglied_login"]>

  export type $mitglied_loginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mitglied_login"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      benutzer_id: number
      mitglied_id: number
      ty: $Enums.mitglied_login_ty
    }, ExtArgs["result"]["mitglied_login"]>
    composites: {}
  }

  type mitglied_loginGetPayload<S extends boolean | null | undefined | mitglied_loginDefaultArgs> = $Result.GetResult<Prisma.$mitglied_loginPayload, S>

  type mitglied_loginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mitglied_loginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Mitglied_loginCountAggregateInputType | true
    }

  export interface mitglied_loginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mitglied_login'], meta: { name: 'mitglied_login' } }
    /**
     * Find zero or one Mitglied_login that matches the filter.
     * @param {mitglied_loginFindUniqueArgs} args - Arguments to find a Mitglied_login
     * @example
     * // Get one Mitglied_login
     * const mitglied_login = await prisma.mitglied_login.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mitglied_loginFindUniqueArgs>(args: SelectSubset<T, mitglied_loginFindUniqueArgs<ExtArgs>>): Prisma__mitglied_loginClient<$Result.GetResult<Prisma.$mitglied_loginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mitglied_login that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mitglied_loginFindUniqueOrThrowArgs} args - Arguments to find a Mitglied_login
     * @example
     * // Get one Mitglied_login
     * const mitglied_login = await prisma.mitglied_login.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mitglied_loginFindUniqueOrThrowArgs>(args: SelectSubset<T, mitglied_loginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mitglied_loginClient<$Result.GetResult<Prisma.$mitglied_loginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mitglied_login that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitglied_loginFindFirstArgs} args - Arguments to find a Mitglied_login
     * @example
     * // Get one Mitglied_login
     * const mitglied_login = await prisma.mitglied_login.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mitglied_loginFindFirstArgs>(args?: SelectSubset<T, mitglied_loginFindFirstArgs<ExtArgs>>): Prisma__mitglied_loginClient<$Result.GetResult<Prisma.$mitglied_loginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mitglied_login that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitglied_loginFindFirstOrThrowArgs} args - Arguments to find a Mitglied_login
     * @example
     * // Get one Mitglied_login
     * const mitglied_login = await prisma.mitglied_login.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mitglied_loginFindFirstOrThrowArgs>(args?: SelectSubset<T, mitglied_loginFindFirstOrThrowArgs<ExtArgs>>): Prisma__mitglied_loginClient<$Result.GetResult<Prisma.$mitglied_loginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mitglied_logins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitglied_loginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mitglied_logins
     * const mitglied_logins = await prisma.mitglied_login.findMany()
     * 
     * // Get first 10 Mitglied_logins
     * const mitglied_logins = await prisma.mitglied_login.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mitglied_loginWithIdOnly = await prisma.mitglied_login.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mitglied_loginFindManyArgs>(args?: SelectSubset<T, mitglied_loginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mitglied_loginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mitglied_login.
     * @param {mitglied_loginCreateArgs} args - Arguments to create a Mitglied_login.
     * @example
     * // Create one Mitglied_login
     * const Mitglied_login = await prisma.mitglied_login.create({
     *   data: {
     *     // ... data to create a Mitglied_login
     *   }
     * })
     * 
     */
    create<T extends mitglied_loginCreateArgs>(args: SelectSubset<T, mitglied_loginCreateArgs<ExtArgs>>): Prisma__mitglied_loginClient<$Result.GetResult<Prisma.$mitglied_loginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mitglied_logins.
     * @param {mitglied_loginCreateManyArgs} args - Arguments to create many Mitglied_logins.
     * @example
     * // Create many Mitglied_logins
     * const mitglied_login = await prisma.mitglied_login.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mitglied_loginCreateManyArgs>(args?: SelectSubset<T, mitglied_loginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mitglied_login.
     * @param {mitglied_loginDeleteArgs} args - Arguments to delete one Mitglied_login.
     * @example
     * // Delete one Mitglied_login
     * const Mitglied_login = await prisma.mitglied_login.delete({
     *   where: {
     *     // ... filter to delete one Mitglied_login
     *   }
     * })
     * 
     */
    delete<T extends mitglied_loginDeleteArgs>(args: SelectSubset<T, mitglied_loginDeleteArgs<ExtArgs>>): Prisma__mitglied_loginClient<$Result.GetResult<Prisma.$mitglied_loginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mitglied_login.
     * @param {mitglied_loginUpdateArgs} args - Arguments to update one Mitglied_login.
     * @example
     * // Update one Mitglied_login
     * const mitglied_login = await prisma.mitglied_login.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mitglied_loginUpdateArgs>(args: SelectSubset<T, mitglied_loginUpdateArgs<ExtArgs>>): Prisma__mitglied_loginClient<$Result.GetResult<Prisma.$mitglied_loginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mitglied_logins.
     * @param {mitglied_loginDeleteManyArgs} args - Arguments to filter Mitglied_logins to delete.
     * @example
     * // Delete a few Mitglied_logins
     * const { count } = await prisma.mitglied_login.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mitglied_loginDeleteManyArgs>(args?: SelectSubset<T, mitglied_loginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mitglied_logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitglied_loginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mitglied_logins
     * const mitglied_login = await prisma.mitglied_login.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mitglied_loginUpdateManyArgs>(args: SelectSubset<T, mitglied_loginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mitglied_login.
     * @param {mitglied_loginUpsertArgs} args - Arguments to update or create a Mitglied_login.
     * @example
     * // Update or create a Mitglied_login
     * const mitglied_login = await prisma.mitglied_login.upsert({
     *   create: {
     *     // ... data to create a Mitglied_login
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mitglied_login we want to update
     *   }
     * })
     */
    upsert<T extends mitglied_loginUpsertArgs>(args: SelectSubset<T, mitglied_loginUpsertArgs<ExtArgs>>): Prisma__mitglied_loginClient<$Result.GetResult<Prisma.$mitglied_loginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mitglied_logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitglied_loginCountArgs} args - Arguments to filter Mitglied_logins to count.
     * @example
     * // Count the number of Mitglied_logins
     * const count = await prisma.mitglied_login.count({
     *   where: {
     *     // ... the filter for the Mitglied_logins we want to count
     *   }
     * })
    **/
    count<T extends mitglied_loginCountArgs>(
      args?: Subset<T, mitglied_loginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mitglied_loginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mitglied_login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mitglied_loginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mitglied_loginAggregateArgs>(args: Subset<T, Mitglied_loginAggregateArgs>): Prisma.PrismaPromise<GetMitglied_loginAggregateType<T>>

    /**
     * Group by Mitglied_login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitglied_loginGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mitglied_loginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mitglied_loginGroupByArgs['orderBy'] }
        : { orderBy?: mitglied_loginGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mitglied_loginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMitglied_loginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mitglied_login model
   */
  readonly fields: mitglied_loginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mitglied_login.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mitglied_loginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mitglied_login model
   */
  interface mitglied_loginFieldRefs {
    readonly id: FieldRef<"mitglied_login", 'Int'>
    readonly benutzer_id: FieldRef<"mitglied_login", 'Int'>
    readonly mitglied_id: FieldRef<"mitglied_login", 'Int'>
    readonly ty: FieldRef<"mitglied_login", 'mitglied_login_ty'>
  }
    

  // Custom InputTypes
  /**
   * mitglied_login findUnique
   */
  export type mitglied_loginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_login
     */
    select?: mitglied_loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_login
     */
    omit?: mitglied_loginOmit<ExtArgs> | null
    /**
     * Filter, which mitglied_login to fetch.
     */
    where: mitglied_loginWhereUniqueInput
  }

  /**
   * mitglied_login findUniqueOrThrow
   */
  export type mitglied_loginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_login
     */
    select?: mitglied_loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_login
     */
    omit?: mitglied_loginOmit<ExtArgs> | null
    /**
     * Filter, which mitglied_login to fetch.
     */
    where: mitglied_loginWhereUniqueInput
  }

  /**
   * mitglied_login findFirst
   */
  export type mitglied_loginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_login
     */
    select?: mitglied_loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_login
     */
    omit?: mitglied_loginOmit<ExtArgs> | null
    /**
     * Filter, which mitglied_login to fetch.
     */
    where?: mitglied_loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mitglied_logins to fetch.
     */
    orderBy?: mitglied_loginOrderByWithRelationInput | mitglied_loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mitglied_logins.
     */
    cursor?: mitglied_loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mitglied_logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mitglied_logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mitglied_logins.
     */
    distinct?: Mitglied_loginScalarFieldEnum | Mitglied_loginScalarFieldEnum[]
  }

  /**
   * mitglied_login findFirstOrThrow
   */
  export type mitglied_loginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_login
     */
    select?: mitglied_loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_login
     */
    omit?: mitglied_loginOmit<ExtArgs> | null
    /**
     * Filter, which mitglied_login to fetch.
     */
    where?: mitglied_loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mitglied_logins to fetch.
     */
    orderBy?: mitglied_loginOrderByWithRelationInput | mitglied_loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mitglied_logins.
     */
    cursor?: mitglied_loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mitglied_logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mitglied_logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mitglied_logins.
     */
    distinct?: Mitglied_loginScalarFieldEnum | Mitglied_loginScalarFieldEnum[]
  }

  /**
   * mitglied_login findMany
   */
  export type mitglied_loginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_login
     */
    select?: mitglied_loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_login
     */
    omit?: mitglied_loginOmit<ExtArgs> | null
    /**
     * Filter, which mitglied_logins to fetch.
     */
    where?: mitglied_loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mitglied_logins to fetch.
     */
    orderBy?: mitglied_loginOrderByWithRelationInput | mitglied_loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mitglied_logins.
     */
    cursor?: mitglied_loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mitglied_logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mitglied_logins.
     */
    skip?: number
    distinct?: Mitglied_loginScalarFieldEnum | Mitglied_loginScalarFieldEnum[]
  }

  /**
   * mitglied_login create
   */
  export type mitglied_loginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_login
     */
    select?: mitglied_loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_login
     */
    omit?: mitglied_loginOmit<ExtArgs> | null
    /**
     * The data needed to create a mitglied_login.
     */
    data: XOR<mitglied_loginCreateInput, mitglied_loginUncheckedCreateInput>
  }

  /**
   * mitglied_login createMany
   */
  export type mitglied_loginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mitglied_logins.
     */
    data: mitglied_loginCreateManyInput | mitglied_loginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mitglied_login update
   */
  export type mitglied_loginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_login
     */
    select?: mitglied_loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_login
     */
    omit?: mitglied_loginOmit<ExtArgs> | null
    /**
     * The data needed to update a mitglied_login.
     */
    data: XOR<mitglied_loginUpdateInput, mitglied_loginUncheckedUpdateInput>
    /**
     * Choose, which mitglied_login to update.
     */
    where: mitglied_loginWhereUniqueInput
  }

  /**
   * mitglied_login updateMany
   */
  export type mitglied_loginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mitglied_logins.
     */
    data: XOR<mitglied_loginUpdateManyMutationInput, mitglied_loginUncheckedUpdateManyInput>
    /**
     * Filter which mitglied_logins to update
     */
    where?: mitglied_loginWhereInput
    /**
     * Limit how many mitglied_logins to update.
     */
    limit?: number
  }

  /**
   * mitglied_login upsert
   */
  export type mitglied_loginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_login
     */
    select?: mitglied_loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_login
     */
    omit?: mitglied_loginOmit<ExtArgs> | null
    /**
     * The filter to search for the mitglied_login to update in case it exists.
     */
    where: mitglied_loginWhereUniqueInput
    /**
     * In case the mitglied_login found by the `where` argument doesn't exist, create a new mitglied_login with this data.
     */
    create: XOR<mitglied_loginCreateInput, mitglied_loginUncheckedCreateInput>
    /**
     * In case the mitglied_login was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mitglied_loginUpdateInput, mitglied_loginUncheckedUpdateInput>
  }

  /**
   * mitglied_login delete
   */
  export type mitglied_loginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_login
     */
    select?: mitglied_loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_login
     */
    omit?: mitglied_loginOmit<ExtArgs> | null
    /**
     * Filter which mitglied_login to delete.
     */
    where: mitglied_loginWhereUniqueInput
  }

  /**
   * mitglied_login deleteMany
   */
  export type mitglied_loginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mitglied_logins to delete
     */
    where?: mitglied_loginWhereInput
    /**
     * Limit how many mitglied_logins to delete.
     */
    limit?: number
  }

  /**
   * mitglied_login without action
   */
  export type mitglied_loginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitglied_login
     */
    select?: mitglied_loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitglied_login
     */
    omit?: mitglied_loginOmit<ExtArgs> | null
  }


  /**
   * Model person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    id: number | null
  }

  export type PersonSumAggregateOutputType = {
    id: number | null
  }

  export type PersonMinAggregateOutputType = {
    id: number | null
    vorname: string | null
    name: string | null
    geburtsdatum: Date | null
    email: string | null
  }

  export type PersonMaxAggregateOutputType = {
    id: number | null
    vorname: string | null
    name: string | null
    geburtsdatum: Date | null
    email: string | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    vorname: number
    name: number
    geburtsdatum: number
    email: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    id?: true
  }

  export type PersonSumAggregateInputType = {
    id?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    vorname?: true
    name?: true
    geburtsdatum?: true
    email?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    vorname?: true
    name?: true
    geburtsdatum?: true
    email?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    vorname?: true
    name?: true
    geburtsdatum?: true
    email?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which person to aggregate.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned people
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type personGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personWhereInput
    orderBy?: personOrderByWithAggregationInput | personOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: personScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: number
    vorname: string
    name: string
    geburtsdatum: Date | null
    email: string
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends personGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type personSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vorname?: boolean
    name?: boolean
    geburtsdatum?: boolean
    email?: boolean
    ff_mitglied?: boolean | person$ff_mitgliedArgs<ExtArgs>
    jf_erziehungsberechtigter?: boolean | person$jf_erziehungsberechtigterArgs<ExtArgs>
    jf_mitglied?: boolean | person$jf_mitgliedArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>



  export type personSelectScalar = {
    id?: boolean
    vorname?: boolean
    name?: boolean
    geburtsdatum?: boolean
    email?: boolean
  }

  export type personOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vorname" | "name" | "geburtsdatum" | "email", ExtArgs["result"]["person"]>
  export type personInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ff_mitglied?: boolean | person$ff_mitgliedArgs<ExtArgs>
    jf_erziehungsberechtigter?: boolean | person$jf_erziehungsberechtigterArgs<ExtArgs>
    jf_mitglied?: boolean | person$jf_mitgliedArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $personPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "person"
    objects: {
      ff_mitglied: Prisma.$ff_mitgliedPayload<ExtArgs>[]
      jf_erziehungsberechtigter: Prisma.$jf_erziehungsberechtigterPayload<ExtArgs>[]
      jf_mitglied: Prisma.$jf_mitgliedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vorname: string
      name: string
      geburtsdatum: Date | null
      email: string
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type personGetPayload<S extends boolean | null | undefined | personDefaultArgs> = $Result.GetResult<Prisma.$personPayload, S>

  type personCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<personFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface personDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['person'], meta: { name: 'person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {personFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personFindUniqueArgs>(args: SelectSubset<T, personFindUniqueArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personFindUniqueOrThrowArgs>(args: SelectSubset<T, personFindUniqueOrThrowArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personFindFirstArgs>(args?: SelectSubset<T, personFindFirstArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personFindFirstOrThrowArgs>(args?: SelectSubset<T, personFindFirstOrThrowArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends personFindManyArgs>(args?: SelectSubset<T, personFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {personCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends personCreateArgs>(args: SelectSubset<T, personCreateArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {personCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends personCreateManyArgs>(args?: SelectSubset<T, personCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Person.
     * @param {personDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends personDeleteArgs>(args: SelectSubset<T, personDeleteArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {personUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends personUpdateArgs>(args: SelectSubset<T, personUpdateArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {personDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends personDeleteManyArgs>(args?: SelectSubset<T, personDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends personUpdateManyArgs>(args: SelectSubset<T, personUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {personUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends personUpsertArgs>(args: SelectSubset<T, personUpsertArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends personCountArgs>(
      args?: Subset<T, personCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends personGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personGroupByArgs['orderBy'] }
        : { orderBy?: personGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, personGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the person model
   */
  readonly fields: personFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ff_mitglied<T extends person$ff_mitgliedArgs<ExtArgs> = {}>(args?: Subset<T, person$ff_mitgliedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ff_mitgliedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jf_erziehungsberechtigter<T extends person$jf_erziehungsberechtigterArgs<ExtArgs> = {}>(args?: Subset<T, person$jf_erziehungsberechtigterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jf_erziehungsberechtigterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jf_mitglied<T extends person$jf_mitgliedArgs<ExtArgs> = {}>(args?: Subset<T, person$jf_mitgliedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jf_mitgliedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the person model
   */
  interface personFieldRefs {
    readonly id: FieldRef<"person", 'Int'>
    readonly vorname: FieldRef<"person", 'String'>
    readonly name: FieldRef<"person", 'String'>
    readonly geburtsdatum: FieldRef<"person", 'DateTime'>
    readonly email: FieldRef<"person", 'String'>
  }
    

  // Custom InputTypes
  /**
   * person findUnique
   */
  export type personFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where: personWhereUniqueInput
  }

  /**
   * person findUniqueOrThrow
   */
  export type personFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where: personWhereUniqueInput
  }

  /**
   * person findFirst
   */
  export type personFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person findFirstOrThrow
   */
  export type personFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person findMany
   */
  export type personFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which people to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person create
   */
  export type personCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The data needed to create a person.
     */
    data: XOR<personCreateInput, personUncheckedCreateInput>
  }

  /**
   * person createMany
   */
  export type personCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many people.
     */
    data: personCreateManyInput | personCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * person update
   */
  export type personUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The data needed to update a person.
     */
    data: XOR<personUpdateInput, personUncheckedUpdateInput>
    /**
     * Choose, which person to update.
     */
    where: personWhereUniqueInput
  }

  /**
   * person updateMany
   */
  export type personUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update people.
     */
    data: XOR<personUpdateManyMutationInput, personUncheckedUpdateManyInput>
    /**
     * Filter which people to update
     */
    where?: personWhereInput
    /**
     * Limit how many people to update.
     */
    limit?: number
  }

  /**
   * person upsert
   */
  export type personUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The filter to search for the person to update in case it exists.
     */
    where: personWhereUniqueInput
    /**
     * In case the person found by the `where` argument doesn't exist, create a new person with this data.
     */
    create: XOR<personCreateInput, personUncheckedCreateInput>
    /**
     * In case the person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personUpdateInput, personUncheckedUpdateInput>
  }

  /**
   * person delete
   */
  export type personDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter which person to delete.
     */
    where: personWhereUniqueInput
  }

  /**
   * person deleteMany
   */
  export type personDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which people to delete
     */
    where?: personWhereInput
    /**
     * Limit how many people to delete.
     */
    limit?: number
  }

  /**
   * person.ff_mitglied
   */
  export type person$ff_mitgliedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ff_mitglied
     */
    select?: ff_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ff_mitglied
     */
    omit?: ff_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ff_mitgliedInclude<ExtArgs> | null
    where?: ff_mitgliedWhereInput
    orderBy?: ff_mitgliedOrderByWithRelationInput | ff_mitgliedOrderByWithRelationInput[]
    cursor?: ff_mitgliedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ff_mitgliedScalarFieldEnum | Ff_mitgliedScalarFieldEnum[]
  }

  /**
   * person.jf_erziehungsberechtigter
   */
  export type person$jf_erziehungsberechtigterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_erziehungsberechtigter
     */
    select?: jf_erziehungsberechtigterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_erziehungsberechtigter
     */
    omit?: jf_erziehungsberechtigterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_erziehungsberechtigterInclude<ExtArgs> | null
    where?: jf_erziehungsberechtigterWhereInput
    orderBy?: jf_erziehungsberechtigterOrderByWithRelationInput | jf_erziehungsberechtigterOrderByWithRelationInput[]
    cursor?: jf_erziehungsberechtigterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Jf_erziehungsberechtigterScalarFieldEnum | Jf_erziehungsberechtigterScalarFieldEnum[]
  }

  /**
   * person.jf_mitglied
   */
  export type person$jf_mitgliedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jf_mitglied
     */
    select?: jf_mitgliedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jf_mitglied
     */
    omit?: jf_mitgliedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jf_mitgliedInclude<ExtArgs> | null
    where?: jf_mitgliedWhereInput
    orderBy?: jf_mitgliedOrderByWithRelationInput | jf_mitgliedOrderByWithRelationInput[]
    cursor?: jf_mitgliedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Jf_mitgliedScalarFieldEnum | Jf_mitgliedScalarFieldEnum[]
  }

  /**
   * person without action
   */
  export type personDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
  }


  /**
   * Model teilnahme
   */

  export type AggregateTeilnahme = {
    _count: TeilnahmeCountAggregateOutputType | null
    _avg: TeilnahmeAvgAggregateOutputType | null
    _sum: TeilnahmeSumAggregateOutputType | null
    _min: TeilnahmeMinAggregateOutputType | null
    _max: TeilnahmeMaxAggregateOutputType | null
  }

  export type TeilnahmeAvgAggregateOutputType = {
    id: number | null
    mitglied_id: number | null
    veranstaltung_id: number | null
  }

  export type TeilnahmeSumAggregateOutputType = {
    id: number | null
    mitglied_id: number | null
    veranstaltung_id: number | null
  }

  export type TeilnahmeMinAggregateOutputType = {
    id: number | null
    mitglied_id: number | null
    veranstaltung_id: number | null
    typ: $Enums.teilnahme_typ | null
  }

  export type TeilnahmeMaxAggregateOutputType = {
    id: number | null
    mitglied_id: number | null
    veranstaltung_id: number | null
    typ: $Enums.teilnahme_typ | null
  }

  export type TeilnahmeCountAggregateOutputType = {
    id: number
    mitglied_id: number
    veranstaltung_id: number
    typ: number
    _all: number
  }


  export type TeilnahmeAvgAggregateInputType = {
    id?: true
    mitglied_id?: true
    veranstaltung_id?: true
  }

  export type TeilnahmeSumAggregateInputType = {
    id?: true
    mitglied_id?: true
    veranstaltung_id?: true
  }

  export type TeilnahmeMinAggregateInputType = {
    id?: true
    mitglied_id?: true
    veranstaltung_id?: true
    typ?: true
  }

  export type TeilnahmeMaxAggregateInputType = {
    id?: true
    mitglied_id?: true
    veranstaltung_id?: true
    typ?: true
  }

  export type TeilnahmeCountAggregateInputType = {
    id?: true
    mitglied_id?: true
    veranstaltung_id?: true
    typ?: true
    _all?: true
  }

  export type TeilnahmeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teilnahme to aggregate.
     */
    where?: teilnahmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teilnahmes to fetch.
     */
    orderBy?: teilnahmeOrderByWithRelationInput | teilnahmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teilnahmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teilnahmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teilnahmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teilnahmes
    **/
    _count?: true | TeilnahmeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeilnahmeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeilnahmeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeilnahmeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeilnahmeMaxAggregateInputType
  }

  export type GetTeilnahmeAggregateType<T extends TeilnahmeAggregateArgs> = {
        [P in keyof T & keyof AggregateTeilnahme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeilnahme[P]>
      : GetScalarType<T[P], AggregateTeilnahme[P]>
  }




  export type teilnahmeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teilnahmeWhereInput
    orderBy?: teilnahmeOrderByWithAggregationInput | teilnahmeOrderByWithAggregationInput[]
    by: TeilnahmeScalarFieldEnum[] | TeilnahmeScalarFieldEnum
    having?: teilnahmeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeilnahmeCountAggregateInputType | true
    _avg?: TeilnahmeAvgAggregateInputType
    _sum?: TeilnahmeSumAggregateInputType
    _min?: TeilnahmeMinAggregateInputType
    _max?: TeilnahmeMaxAggregateInputType
  }

  export type TeilnahmeGroupByOutputType = {
    id: number
    mitglied_id: number
    veranstaltung_id: number
    typ: $Enums.teilnahme_typ
    _count: TeilnahmeCountAggregateOutputType | null
    _avg: TeilnahmeAvgAggregateOutputType | null
    _sum: TeilnahmeSumAggregateOutputType | null
    _min: TeilnahmeMinAggregateOutputType | null
    _max: TeilnahmeMaxAggregateOutputType | null
  }

  type GetTeilnahmeGroupByPayload<T extends teilnahmeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeilnahmeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeilnahmeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeilnahmeGroupByOutputType[P]>
            : GetScalarType<T[P], TeilnahmeGroupByOutputType[P]>
        }
      >
    >


  export type teilnahmeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mitglied_id?: boolean
    veranstaltung_id?: boolean
    typ?: boolean
    ff_mitglied?: boolean | ff_mitgliedDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teilnahme"]>



  export type teilnahmeSelectScalar = {
    id?: boolean
    mitglied_id?: boolean
    veranstaltung_id?: boolean
    typ?: boolean
  }

  export type teilnahmeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mitglied_id" | "veranstaltung_id" | "typ", ExtArgs["result"]["teilnahme"]>
  export type teilnahmeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ff_mitglied?: boolean | ff_mitgliedDefaultArgs<ExtArgs>
  }

  export type $teilnahmePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teilnahme"
    objects: {
      ff_mitglied: Prisma.$ff_mitgliedPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mitglied_id: number
      veranstaltung_id: number
      typ: $Enums.teilnahme_typ
    }, ExtArgs["result"]["teilnahme"]>
    composites: {}
  }

  type teilnahmeGetPayload<S extends boolean | null | undefined | teilnahmeDefaultArgs> = $Result.GetResult<Prisma.$teilnahmePayload, S>

  type teilnahmeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teilnahmeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeilnahmeCountAggregateInputType | true
    }

  export interface teilnahmeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teilnahme'], meta: { name: 'teilnahme' } }
    /**
     * Find zero or one Teilnahme that matches the filter.
     * @param {teilnahmeFindUniqueArgs} args - Arguments to find a Teilnahme
     * @example
     * // Get one Teilnahme
     * const teilnahme = await prisma.teilnahme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teilnahmeFindUniqueArgs>(args: SelectSubset<T, teilnahmeFindUniqueArgs<ExtArgs>>): Prisma__teilnahmeClient<$Result.GetResult<Prisma.$teilnahmePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teilnahme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teilnahmeFindUniqueOrThrowArgs} args - Arguments to find a Teilnahme
     * @example
     * // Get one Teilnahme
     * const teilnahme = await prisma.teilnahme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teilnahmeFindUniqueOrThrowArgs>(args: SelectSubset<T, teilnahmeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teilnahmeClient<$Result.GetResult<Prisma.$teilnahmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teilnahme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teilnahmeFindFirstArgs} args - Arguments to find a Teilnahme
     * @example
     * // Get one Teilnahme
     * const teilnahme = await prisma.teilnahme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teilnahmeFindFirstArgs>(args?: SelectSubset<T, teilnahmeFindFirstArgs<ExtArgs>>): Prisma__teilnahmeClient<$Result.GetResult<Prisma.$teilnahmePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teilnahme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teilnahmeFindFirstOrThrowArgs} args - Arguments to find a Teilnahme
     * @example
     * // Get one Teilnahme
     * const teilnahme = await prisma.teilnahme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teilnahmeFindFirstOrThrowArgs>(args?: SelectSubset<T, teilnahmeFindFirstOrThrowArgs<ExtArgs>>): Prisma__teilnahmeClient<$Result.GetResult<Prisma.$teilnahmePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teilnahmes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teilnahmeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teilnahmes
     * const teilnahmes = await prisma.teilnahme.findMany()
     * 
     * // Get first 10 Teilnahmes
     * const teilnahmes = await prisma.teilnahme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teilnahmeWithIdOnly = await prisma.teilnahme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teilnahmeFindManyArgs>(args?: SelectSubset<T, teilnahmeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teilnahmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teilnahme.
     * @param {teilnahmeCreateArgs} args - Arguments to create a Teilnahme.
     * @example
     * // Create one Teilnahme
     * const Teilnahme = await prisma.teilnahme.create({
     *   data: {
     *     // ... data to create a Teilnahme
     *   }
     * })
     * 
     */
    create<T extends teilnahmeCreateArgs>(args: SelectSubset<T, teilnahmeCreateArgs<ExtArgs>>): Prisma__teilnahmeClient<$Result.GetResult<Prisma.$teilnahmePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teilnahmes.
     * @param {teilnahmeCreateManyArgs} args - Arguments to create many Teilnahmes.
     * @example
     * // Create many Teilnahmes
     * const teilnahme = await prisma.teilnahme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teilnahmeCreateManyArgs>(args?: SelectSubset<T, teilnahmeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teilnahme.
     * @param {teilnahmeDeleteArgs} args - Arguments to delete one Teilnahme.
     * @example
     * // Delete one Teilnahme
     * const Teilnahme = await prisma.teilnahme.delete({
     *   where: {
     *     // ... filter to delete one Teilnahme
     *   }
     * })
     * 
     */
    delete<T extends teilnahmeDeleteArgs>(args: SelectSubset<T, teilnahmeDeleteArgs<ExtArgs>>): Prisma__teilnahmeClient<$Result.GetResult<Prisma.$teilnahmePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teilnahme.
     * @param {teilnahmeUpdateArgs} args - Arguments to update one Teilnahme.
     * @example
     * // Update one Teilnahme
     * const teilnahme = await prisma.teilnahme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teilnahmeUpdateArgs>(args: SelectSubset<T, teilnahmeUpdateArgs<ExtArgs>>): Prisma__teilnahmeClient<$Result.GetResult<Prisma.$teilnahmePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teilnahmes.
     * @param {teilnahmeDeleteManyArgs} args - Arguments to filter Teilnahmes to delete.
     * @example
     * // Delete a few Teilnahmes
     * const { count } = await prisma.teilnahme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teilnahmeDeleteManyArgs>(args?: SelectSubset<T, teilnahmeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teilnahmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teilnahmeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teilnahmes
     * const teilnahme = await prisma.teilnahme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teilnahmeUpdateManyArgs>(args: SelectSubset<T, teilnahmeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teilnahme.
     * @param {teilnahmeUpsertArgs} args - Arguments to update or create a Teilnahme.
     * @example
     * // Update or create a Teilnahme
     * const teilnahme = await prisma.teilnahme.upsert({
     *   create: {
     *     // ... data to create a Teilnahme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teilnahme we want to update
     *   }
     * })
     */
    upsert<T extends teilnahmeUpsertArgs>(args: SelectSubset<T, teilnahmeUpsertArgs<ExtArgs>>): Prisma__teilnahmeClient<$Result.GetResult<Prisma.$teilnahmePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teilnahmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teilnahmeCountArgs} args - Arguments to filter Teilnahmes to count.
     * @example
     * // Count the number of Teilnahmes
     * const count = await prisma.teilnahme.count({
     *   where: {
     *     // ... the filter for the Teilnahmes we want to count
     *   }
     * })
    **/
    count<T extends teilnahmeCountArgs>(
      args?: Subset<T, teilnahmeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeilnahmeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teilnahme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeilnahmeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeilnahmeAggregateArgs>(args: Subset<T, TeilnahmeAggregateArgs>): Prisma.PrismaPromise<GetTeilnahmeAggregateType<T>>

    /**
     * Group by Teilnahme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teilnahmeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teilnahmeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teilnahmeGroupByArgs['orderBy'] }
        : { orderBy?: teilnahmeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teilnahmeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeilnahmeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teilnahme model
   */
  readonly fields: teilnahmeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teilnahme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teilnahmeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ff_mitglied<T extends ff_mitgliedDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ff_mitgliedDefaultArgs<ExtArgs>>): Prisma__ff_mitgliedClient<$Result.GetResult<Prisma.$ff_mitgliedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the teilnahme model
   */
  interface teilnahmeFieldRefs {
    readonly id: FieldRef<"teilnahme", 'Int'>
    readonly mitglied_id: FieldRef<"teilnahme", 'Int'>
    readonly veranstaltung_id: FieldRef<"teilnahme", 'Int'>
    readonly typ: FieldRef<"teilnahme", 'teilnahme_typ'>
  }
    

  // Custom InputTypes
  /**
   * teilnahme findUnique
   */
  export type teilnahmeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teilnahme
     */
    select?: teilnahmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teilnahme
     */
    omit?: teilnahmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teilnahmeInclude<ExtArgs> | null
    /**
     * Filter, which teilnahme to fetch.
     */
    where: teilnahmeWhereUniqueInput
  }

  /**
   * teilnahme findUniqueOrThrow
   */
  export type teilnahmeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teilnahme
     */
    select?: teilnahmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teilnahme
     */
    omit?: teilnahmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teilnahmeInclude<ExtArgs> | null
    /**
     * Filter, which teilnahme to fetch.
     */
    where: teilnahmeWhereUniqueInput
  }

  /**
   * teilnahme findFirst
   */
  export type teilnahmeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teilnahme
     */
    select?: teilnahmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teilnahme
     */
    omit?: teilnahmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teilnahmeInclude<ExtArgs> | null
    /**
     * Filter, which teilnahme to fetch.
     */
    where?: teilnahmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teilnahmes to fetch.
     */
    orderBy?: teilnahmeOrderByWithRelationInput | teilnahmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teilnahmes.
     */
    cursor?: teilnahmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teilnahmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teilnahmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teilnahmes.
     */
    distinct?: TeilnahmeScalarFieldEnum | TeilnahmeScalarFieldEnum[]
  }

  /**
   * teilnahme findFirstOrThrow
   */
  export type teilnahmeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teilnahme
     */
    select?: teilnahmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teilnahme
     */
    omit?: teilnahmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teilnahmeInclude<ExtArgs> | null
    /**
     * Filter, which teilnahme to fetch.
     */
    where?: teilnahmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teilnahmes to fetch.
     */
    orderBy?: teilnahmeOrderByWithRelationInput | teilnahmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teilnahmes.
     */
    cursor?: teilnahmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teilnahmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teilnahmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teilnahmes.
     */
    distinct?: TeilnahmeScalarFieldEnum | TeilnahmeScalarFieldEnum[]
  }

  /**
   * teilnahme findMany
   */
  export type teilnahmeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teilnahme
     */
    select?: teilnahmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teilnahme
     */
    omit?: teilnahmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teilnahmeInclude<ExtArgs> | null
    /**
     * Filter, which teilnahmes to fetch.
     */
    where?: teilnahmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teilnahmes to fetch.
     */
    orderBy?: teilnahmeOrderByWithRelationInput | teilnahmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teilnahmes.
     */
    cursor?: teilnahmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teilnahmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teilnahmes.
     */
    skip?: number
    distinct?: TeilnahmeScalarFieldEnum | TeilnahmeScalarFieldEnum[]
  }

  /**
   * teilnahme create
   */
  export type teilnahmeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teilnahme
     */
    select?: teilnahmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teilnahme
     */
    omit?: teilnahmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teilnahmeInclude<ExtArgs> | null
    /**
     * The data needed to create a teilnahme.
     */
    data: XOR<teilnahmeCreateInput, teilnahmeUncheckedCreateInput>
  }

  /**
   * teilnahme createMany
   */
  export type teilnahmeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teilnahmes.
     */
    data: teilnahmeCreateManyInput | teilnahmeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teilnahme update
   */
  export type teilnahmeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teilnahme
     */
    select?: teilnahmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teilnahme
     */
    omit?: teilnahmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teilnahmeInclude<ExtArgs> | null
    /**
     * The data needed to update a teilnahme.
     */
    data: XOR<teilnahmeUpdateInput, teilnahmeUncheckedUpdateInput>
    /**
     * Choose, which teilnahme to update.
     */
    where: teilnahmeWhereUniqueInput
  }

  /**
   * teilnahme updateMany
   */
  export type teilnahmeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teilnahmes.
     */
    data: XOR<teilnahmeUpdateManyMutationInput, teilnahmeUncheckedUpdateManyInput>
    /**
     * Filter which teilnahmes to update
     */
    where?: teilnahmeWhereInput
    /**
     * Limit how many teilnahmes to update.
     */
    limit?: number
  }

  /**
   * teilnahme upsert
   */
  export type teilnahmeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teilnahme
     */
    select?: teilnahmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teilnahme
     */
    omit?: teilnahmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teilnahmeInclude<ExtArgs> | null
    /**
     * The filter to search for the teilnahme to update in case it exists.
     */
    where: teilnahmeWhereUniqueInput
    /**
     * In case the teilnahme found by the `where` argument doesn't exist, create a new teilnahme with this data.
     */
    create: XOR<teilnahmeCreateInput, teilnahmeUncheckedCreateInput>
    /**
     * In case the teilnahme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teilnahmeUpdateInput, teilnahmeUncheckedUpdateInput>
  }

  /**
   * teilnahme delete
   */
  export type teilnahmeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teilnahme
     */
    select?: teilnahmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teilnahme
     */
    omit?: teilnahmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teilnahmeInclude<ExtArgs> | null
    /**
     * Filter which teilnahme to delete.
     */
    where: teilnahmeWhereUniqueInput
  }

  /**
   * teilnahme deleteMany
   */
  export type teilnahmeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teilnahmes to delete
     */
    where?: teilnahmeWhereInput
    /**
     * Limit how many teilnahmes to delete.
     */
    limit?: number
  }

  /**
   * teilnahme without action
   */
  export type teilnahmeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teilnahme
     */
    select?: teilnahmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teilnahme
     */
    omit?: teilnahmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teilnahmeInclude<ExtArgs> | null
  }


  /**
   * Model uebungsabend
   */

  export type AggregateUebungsabend = {
    _count: UebungsabendCountAggregateOutputType | null
    _avg: UebungsabendAvgAggregateOutputType | null
    _sum: UebungsabendSumAggregateOutputType | null
    _min: UebungsabendMinAggregateOutputType | null
    _max: UebungsabendMaxAggregateOutputType | null
  }

  export type UebungsabendAvgAggregateOutputType = {
    id: number | null
  }

  export type UebungsabendSumAggregateOutputType = {
    id: number | null
  }

  export type UebungsabendMinAggregateOutputType = {
    id: number | null
    datum: Date | null
    thema: string | null
  }

  export type UebungsabendMaxAggregateOutputType = {
    id: number | null
    datum: Date | null
    thema: string | null
  }

  export type UebungsabendCountAggregateOutputType = {
    id: number
    datum: number
    thema: number
    _all: number
  }


  export type UebungsabendAvgAggregateInputType = {
    id?: true
  }

  export type UebungsabendSumAggregateInputType = {
    id?: true
  }

  export type UebungsabendMinAggregateInputType = {
    id?: true
    datum?: true
    thema?: true
  }

  export type UebungsabendMaxAggregateInputType = {
    id?: true
    datum?: true
    thema?: true
  }

  export type UebungsabendCountAggregateInputType = {
    id?: true
    datum?: true
    thema?: true
    _all?: true
  }

  export type UebungsabendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which uebungsabend to aggregate.
     */
    where?: uebungsabendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uebungsabends to fetch.
     */
    orderBy?: uebungsabendOrderByWithRelationInput | uebungsabendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: uebungsabendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uebungsabends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uebungsabends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned uebungsabends
    **/
    _count?: true | UebungsabendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UebungsabendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UebungsabendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UebungsabendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UebungsabendMaxAggregateInputType
  }

  export type GetUebungsabendAggregateType<T extends UebungsabendAggregateArgs> = {
        [P in keyof T & keyof AggregateUebungsabend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUebungsabend[P]>
      : GetScalarType<T[P], AggregateUebungsabend[P]>
  }




  export type uebungsabendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: uebungsabendWhereInput
    orderBy?: uebungsabendOrderByWithAggregationInput | uebungsabendOrderByWithAggregationInput[]
    by: UebungsabendScalarFieldEnum[] | UebungsabendScalarFieldEnum
    having?: uebungsabendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UebungsabendCountAggregateInputType | true
    _avg?: UebungsabendAvgAggregateInputType
    _sum?: UebungsabendSumAggregateInputType
    _min?: UebungsabendMinAggregateInputType
    _max?: UebungsabendMaxAggregateInputType
  }

  export type UebungsabendGroupByOutputType = {
    id: number
    datum: Date
    thema: string | null
    _count: UebungsabendCountAggregateOutputType | null
    _avg: UebungsabendAvgAggregateOutputType | null
    _sum: UebungsabendSumAggregateOutputType | null
    _min: UebungsabendMinAggregateOutputType | null
    _max: UebungsabendMaxAggregateOutputType | null
  }

  type GetUebungsabendGroupByPayload<T extends uebungsabendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UebungsabendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UebungsabendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UebungsabendGroupByOutputType[P]>
            : GetScalarType<T[P], UebungsabendGroupByOutputType[P]>
        }
      >
    >


  export type uebungsabendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datum?: boolean
    thema?: boolean
  }, ExtArgs["result"]["uebungsabend"]>



  export type uebungsabendSelectScalar = {
    id?: boolean
    datum?: boolean
    thema?: boolean
  }

  export type uebungsabendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "datum" | "thema", ExtArgs["result"]["uebungsabend"]>

  export type $uebungsabendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "uebungsabend"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      datum: Date
      thema: string | null
    }, ExtArgs["result"]["uebungsabend"]>
    composites: {}
  }

  type uebungsabendGetPayload<S extends boolean | null | undefined | uebungsabendDefaultArgs> = $Result.GetResult<Prisma.$uebungsabendPayload, S>

  type uebungsabendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<uebungsabendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UebungsabendCountAggregateInputType | true
    }

  export interface uebungsabendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['uebungsabend'], meta: { name: 'uebungsabend' } }
    /**
     * Find zero or one Uebungsabend that matches the filter.
     * @param {uebungsabendFindUniqueArgs} args - Arguments to find a Uebungsabend
     * @example
     * // Get one Uebungsabend
     * const uebungsabend = await prisma.uebungsabend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends uebungsabendFindUniqueArgs>(args: SelectSubset<T, uebungsabendFindUniqueArgs<ExtArgs>>): Prisma__uebungsabendClient<$Result.GetResult<Prisma.$uebungsabendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Uebungsabend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {uebungsabendFindUniqueOrThrowArgs} args - Arguments to find a Uebungsabend
     * @example
     * // Get one Uebungsabend
     * const uebungsabend = await prisma.uebungsabend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends uebungsabendFindUniqueOrThrowArgs>(args: SelectSubset<T, uebungsabendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__uebungsabendClient<$Result.GetResult<Prisma.$uebungsabendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Uebungsabend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uebungsabendFindFirstArgs} args - Arguments to find a Uebungsabend
     * @example
     * // Get one Uebungsabend
     * const uebungsabend = await prisma.uebungsabend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends uebungsabendFindFirstArgs>(args?: SelectSubset<T, uebungsabendFindFirstArgs<ExtArgs>>): Prisma__uebungsabendClient<$Result.GetResult<Prisma.$uebungsabendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Uebungsabend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uebungsabendFindFirstOrThrowArgs} args - Arguments to find a Uebungsabend
     * @example
     * // Get one Uebungsabend
     * const uebungsabend = await prisma.uebungsabend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends uebungsabendFindFirstOrThrowArgs>(args?: SelectSubset<T, uebungsabendFindFirstOrThrowArgs<ExtArgs>>): Prisma__uebungsabendClient<$Result.GetResult<Prisma.$uebungsabendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Uebungsabends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uebungsabendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Uebungsabends
     * const uebungsabends = await prisma.uebungsabend.findMany()
     * 
     * // Get first 10 Uebungsabends
     * const uebungsabends = await prisma.uebungsabend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uebungsabendWithIdOnly = await prisma.uebungsabend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends uebungsabendFindManyArgs>(args?: SelectSubset<T, uebungsabendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$uebungsabendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Uebungsabend.
     * @param {uebungsabendCreateArgs} args - Arguments to create a Uebungsabend.
     * @example
     * // Create one Uebungsabend
     * const Uebungsabend = await prisma.uebungsabend.create({
     *   data: {
     *     // ... data to create a Uebungsabend
     *   }
     * })
     * 
     */
    create<T extends uebungsabendCreateArgs>(args: SelectSubset<T, uebungsabendCreateArgs<ExtArgs>>): Prisma__uebungsabendClient<$Result.GetResult<Prisma.$uebungsabendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Uebungsabends.
     * @param {uebungsabendCreateManyArgs} args - Arguments to create many Uebungsabends.
     * @example
     * // Create many Uebungsabends
     * const uebungsabend = await prisma.uebungsabend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends uebungsabendCreateManyArgs>(args?: SelectSubset<T, uebungsabendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Uebungsabend.
     * @param {uebungsabendDeleteArgs} args - Arguments to delete one Uebungsabend.
     * @example
     * // Delete one Uebungsabend
     * const Uebungsabend = await prisma.uebungsabend.delete({
     *   where: {
     *     // ... filter to delete one Uebungsabend
     *   }
     * })
     * 
     */
    delete<T extends uebungsabendDeleteArgs>(args: SelectSubset<T, uebungsabendDeleteArgs<ExtArgs>>): Prisma__uebungsabendClient<$Result.GetResult<Prisma.$uebungsabendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Uebungsabend.
     * @param {uebungsabendUpdateArgs} args - Arguments to update one Uebungsabend.
     * @example
     * // Update one Uebungsabend
     * const uebungsabend = await prisma.uebungsabend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends uebungsabendUpdateArgs>(args: SelectSubset<T, uebungsabendUpdateArgs<ExtArgs>>): Prisma__uebungsabendClient<$Result.GetResult<Prisma.$uebungsabendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Uebungsabends.
     * @param {uebungsabendDeleteManyArgs} args - Arguments to filter Uebungsabends to delete.
     * @example
     * // Delete a few Uebungsabends
     * const { count } = await prisma.uebungsabend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends uebungsabendDeleteManyArgs>(args?: SelectSubset<T, uebungsabendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uebungsabends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uebungsabendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Uebungsabends
     * const uebungsabend = await prisma.uebungsabend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends uebungsabendUpdateManyArgs>(args: SelectSubset<T, uebungsabendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Uebungsabend.
     * @param {uebungsabendUpsertArgs} args - Arguments to update or create a Uebungsabend.
     * @example
     * // Update or create a Uebungsabend
     * const uebungsabend = await prisma.uebungsabend.upsert({
     *   create: {
     *     // ... data to create a Uebungsabend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Uebungsabend we want to update
     *   }
     * })
     */
    upsert<T extends uebungsabendUpsertArgs>(args: SelectSubset<T, uebungsabendUpsertArgs<ExtArgs>>): Prisma__uebungsabendClient<$Result.GetResult<Prisma.$uebungsabendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Uebungsabends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uebungsabendCountArgs} args - Arguments to filter Uebungsabends to count.
     * @example
     * // Count the number of Uebungsabends
     * const count = await prisma.uebungsabend.count({
     *   where: {
     *     // ... the filter for the Uebungsabends we want to count
     *   }
     * })
    **/
    count<T extends uebungsabendCountArgs>(
      args?: Subset<T, uebungsabendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UebungsabendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Uebungsabend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UebungsabendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UebungsabendAggregateArgs>(args: Subset<T, UebungsabendAggregateArgs>): Prisma.PrismaPromise<GetUebungsabendAggregateType<T>>

    /**
     * Group by Uebungsabend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uebungsabendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends uebungsabendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: uebungsabendGroupByArgs['orderBy'] }
        : { orderBy?: uebungsabendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, uebungsabendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUebungsabendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the uebungsabend model
   */
  readonly fields: uebungsabendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for uebungsabend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__uebungsabendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the uebungsabend model
   */
  interface uebungsabendFieldRefs {
    readonly id: FieldRef<"uebungsabend", 'Int'>
    readonly datum: FieldRef<"uebungsabend", 'DateTime'>
    readonly thema: FieldRef<"uebungsabend", 'String'>
  }
    

  // Custom InputTypes
  /**
   * uebungsabend findUnique
   */
  export type uebungsabendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uebungsabend
     */
    select?: uebungsabendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uebungsabend
     */
    omit?: uebungsabendOmit<ExtArgs> | null
    /**
     * Filter, which uebungsabend to fetch.
     */
    where: uebungsabendWhereUniqueInput
  }

  /**
   * uebungsabend findUniqueOrThrow
   */
  export type uebungsabendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uebungsabend
     */
    select?: uebungsabendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uebungsabend
     */
    omit?: uebungsabendOmit<ExtArgs> | null
    /**
     * Filter, which uebungsabend to fetch.
     */
    where: uebungsabendWhereUniqueInput
  }

  /**
   * uebungsabend findFirst
   */
  export type uebungsabendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uebungsabend
     */
    select?: uebungsabendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uebungsabend
     */
    omit?: uebungsabendOmit<ExtArgs> | null
    /**
     * Filter, which uebungsabend to fetch.
     */
    where?: uebungsabendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uebungsabends to fetch.
     */
    orderBy?: uebungsabendOrderByWithRelationInput | uebungsabendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uebungsabends.
     */
    cursor?: uebungsabendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uebungsabends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uebungsabends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uebungsabends.
     */
    distinct?: UebungsabendScalarFieldEnum | UebungsabendScalarFieldEnum[]
  }

  /**
   * uebungsabend findFirstOrThrow
   */
  export type uebungsabendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uebungsabend
     */
    select?: uebungsabendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uebungsabend
     */
    omit?: uebungsabendOmit<ExtArgs> | null
    /**
     * Filter, which uebungsabend to fetch.
     */
    where?: uebungsabendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uebungsabends to fetch.
     */
    orderBy?: uebungsabendOrderByWithRelationInput | uebungsabendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uebungsabends.
     */
    cursor?: uebungsabendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uebungsabends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uebungsabends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uebungsabends.
     */
    distinct?: UebungsabendScalarFieldEnum | UebungsabendScalarFieldEnum[]
  }

  /**
   * uebungsabend findMany
   */
  export type uebungsabendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uebungsabend
     */
    select?: uebungsabendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uebungsabend
     */
    omit?: uebungsabendOmit<ExtArgs> | null
    /**
     * Filter, which uebungsabends to fetch.
     */
    where?: uebungsabendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uebungsabends to fetch.
     */
    orderBy?: uebungsabendOrderByWithRelationInput | uebungsabendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing uebungsabends.
     */
    cursor?: uebungsabendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uebungsabends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uebungsabends.
     */
    skip?: number
    distinct?: UebungsabendScalarFieldEnum | UebungsabendScalarFieldEnum[]
  }

  /**
   * uebungsabend create
   */
  export type uebungsabendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uebungsabend
     */
    select?: uebungsabendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uebungsabend
     */
    omit?: uebungsabendOmit<ExtArgs> | null
    /**
     * The data needed to create a uebungsabend.
     */
    data: XOR<uebungsabendCreateInput, uebungsabendUncheckedCreateInput>
  }

  /**
   * uebungsabend createMany
   */
  export type uebungsabendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many uebungsabends.
     */
    data: uebungsabendCreateManyInput | uebungsabendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * uebungsabend update
   */
  export type uebungsabendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uebungsabend
     */
    select?: uebungsabendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uebungsabend
     */
    omit?: uebungsabendOmit<ExtArgs> | null
    /**
     * The data needed to update a uebungsabend.
     */
    data: XOR<uebungsabendUpdateInput, uebungsabendUncheckedUpdateInput>
    /**
     * Choose, which uebungsabend to update.
     */
    where: uebungsabendWhereUniqueInput
  }

  /**
   * uebungsabend updateMany
   */
  export type uebungsabendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update uebungsabends.
     */
    data: XOR<uebungsabendUpdateManyMutationInput, uebungsabendUncheckedUpdateManyInput>
    /**
     * Filter which uebungsabends to update
     */
    where?: uebungsabendWhereInput
    /**
     * Limit how many uebungsabends to update.
     */
    limit?: number
  }

  /**
   * uebungsabend upsert
   */
  export type uebungsabendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uebungsabend
     */
    select?: uebungsabendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uebungsabend
     */
    omit?: uebungsabendOmit<ExtArgs> | null
    /**
     * The filter to search for the uebungsabend to update in case it exists.
     */
    where: uebungsabendWhereUniqueInput
    /**
     * In case the uebungsabend found by the `where` argument doesn't exist, create a new uebungsabend with this data.
     */
    create: XOR<uebungsabendCreateInput, uebungsabendUncheckedCreateInput>
    /**
     * In case the uebungsabend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<uebungsabendUpdateInput, uebungsabendUncheckedUpdateInput>
  }

  /**
   * uebungsabend delete
   */
  export type uebungsabendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uebungsabend
     */
    select?: uebungsabendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uebungsabend
     */
    omit?: uebungsabendOmit<ExtArgs> | null
    /**
     * Filter which uebungsabend to delete.
     */
    where: uebungsabendWhereUniqueInput
  }

  /**
   * uebungsabend deleteMany
   */
  export type uebungsabendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which uebungsabends to delete
     */
    where?: uebungsabendWhereInput
    /**
     * Limit how many uebungsabends to delete.
     */
    limit?: number
  }

  /**
   * uebungsabend without action
   */
  export type uebungsabendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uebungsabend
     */
    select?: uebungsabendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uebungsabend
     */
    omit?: uebungsabendOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EinsatzScalarFieldEnum: {
    id: 'id',
    datum: 'datum',
    beschreibung: 'beschreibung',
    ort: 'ort',
    art: 'art'
  };

  export type EinsatzScalarFieldEnum = (typeof EinsatzScalarFieldEnum)[keyof typeof EinsatzScalarFieldEnum]


  export const Ff_mitgliedScalarFieldEnum: {
    id: 'id',
    person_id: 'person_id',
    eintrittsdatum: 'eintrittsdatum',
    austrittsdatum: 'austrittsdatum',
    status: 'status'
  };

  export type Ff_mitgliedScalarFieldEnum = (typeof Ff_mitgliedScalarFieldEnum)[keyof typeof Ff_mitgliedScalarFieldEnum]


  export const Funktion_ffScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ist_admin: 'ist_admin'
  };

  export type Funktion_ffScalarFieldEnum = (typeof Funktion_ffScalarFieldEnum)[keyof typeof Funktion_ffScalarFieldEnum]


  export const Funktion_jfScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ist_admin: 'ist_admin'
  };

  export type Funktion_jfScalarFieldEnum = (typeof Funktion_jfScalarFieldEnum)[keyof typeof Funktion_jfScalarFieldEnum]


  export const Jf_erziehungsberechtigterScalarFieldEnum: {
    id: 'id',
    jf_mitglied_id: 'jf_mitglied_id',
    person_id: 'person_id'
  };

  export type Jf_erziehungsberechtigterScalarFieldEnum = (typeof Jf_erziehungsberechtigterScalarFieldEnum)[keyof typeof Jf_erziehungsberechtigterScalarFieldEnum]


  export const Jf_mitgliedScalarFieldEnum: {
    id: 'id',
    person_id: 'person_id',
    eintrittsdatum: 'eintrittsdatum',
    austrittsdatum: 'austrittsdatum',
    status: 'status'
  };

  export type Jf_mitgliedScalarFieldEnum = (typeof Jf_mitgliedScalarFieldEnum)[keyof typeof Jf_mitgliedScalarFieldEnum]


  export const Mitglied_funktionenScalarFieldEnum: {
    id: 'id',
    mitglied_id: 'mitglied_id',
    funktion_id: 'funktion_id',
    typ: 'typ'
  };

  export type Mitglied_funktionenScalarFieldEnum = (typeof Mitglied_funktionenScalarFieldEnum)[keyof typeof Mitglied_funktionenScalarFieldEnum]


  export const Mitglied_loginScalarFieldEnum: {
    id: 'id',
    benutzer_id: 'benutzer_id',
    mitglied_id: 'mitglied_id',
    ty: 'ty'
  };

  export type Mitglied_loginScalarFieldEnum = (typeof Mitglied_loginScalarFieldEnum)[keyof typeof Mitglied_loginScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    vorname: 'vorname',
    name: 'name',
    geburtsdatum: 'geburtsdatum',
    email: 'email'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const TeilnahmeScalarFieldEnum: {
    id: 'id',
    mitglied_id: 'mitglied_id',
    veranstaltung_id: 'veranstaltung_id',
    typ: 'typ'
  };

  export type TeilnahmeScalarFieldEnum = (typeof TeilnahmeScalarFieldEnum)[keyof typeof TeilnahmeScalarFieldEnum]


  export const UebungsabendScalarFieldEnum: {
    id: 'id',
    datum: 'datum',
    thema: 'thema'
  };

  export type UebungsabendScalarFieldEnum = (typeof UebungsabendScalarFieldEnum)[keyof typeof UebungsabendScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const einsatzOrderByRelevanceFieldEnum: {
    beschreibung: 'beschreibung',
    ort: 'ort'
  };

  export type einsatzOrderByRelevanceFieldEnum = (typeof einsatzOrderByRelevanceFieldEnum)[keyof typeof einsatzOrderByRelevanceFieldEnum]


  export const funktion_ffOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type funktion_ffOrderByRelevanceFieldEnum = (typeof funktion_ffOrderByRelevanceFieldEnum)[keyof typeof funktion_ffOrderByRelevanceFieldEnum]


  export const funktion_jfOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type funktion_jfOrderByRelevanceFieldEnum = (typeof funktion_jfOrderByRelevanceFieldEnum)[keyof typeof funktion_jfOrderByRelevanceFieldEnum]


  export const personOrderByRelevanceFieldEnum: {
    vorname: 'vorname',
    name: 'name',
    email: 'email'
  };

  export type personOrderByRelevanceFieldEnum = (typeof personOrderByRelevanceFieldEnum)[keyof typeof personOrderByRelevanceFieldEnum]


  export const uebungsabendOrderByRelevanceFieldEnum: {
    thema: 'thema'
  };

  export type uebungsabendOrderByRelevanceFieldEnum = (typeof uebungsabendOrderByRelevanceFieldEnum)[keyof typeof uebungsabendOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'einsatz_art'
   */
  export type Enumeinsatz_artFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'einsatz_art'>
    


  /**
   * Reference to a field of type 'ff_mitglied_status'
   */
  export type Enumff_mitglied_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ff_mitglied_status'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'jf_mitglied_status'
   */
  export type Enumjf_mitglied_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'jf_mitglied_status'>
    


  /**
   * Reference to a field of type 'mitglied_funktionen_typ'
   */
  export type Enummitglied_funktionen_typFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'mitglied_funktionen_typ'>
    


  /**
   * Reference to a field of type 'mitglied_login_ty'
   */
  export type Enummitglied_login_tyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'mitglied_login_ty'>
    


  /**
   * Reference to a field of type 'teilnahme_typ'
   */
  export type Enumteilnahme_typFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'teilnahme_typ'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type einsatzWhereInput = {
    AND?: einsatzWhereInput | einsatzWhereInput[]
    OR?: einsatzWhereInput[]
    NOT?: einsatzWhereInput | einsatzWhereInput[]
    id?: IntFilter<"einsatz"> | number
    datum?: DateTimeFilter<"einsatz"> | Date | string
    beschreibung?: StringNullableFilter<"einsatz"> | string | null
    ort?: StringNullableFilter<"einsatz"> | string | null
    art?: Enumeinsatz_artFilter<"einsatz"> | $Enums.einsatz_art
  }

  export type einsatzOrderByWithRelationInput = {
    id?: SortOrder
    datum?: SortOrder
    beschreibung?: SortOrderInput | SortOrder
    ort?: SortOrderInput | SortOrder
    art?: SortOrder
    _relevance?: einsatzOrderByRelevanceInput
  }

  export type einsatzWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: einsatzWhereInput | einsatzWhereInput[]
    OR?: einsatzWhereInput[]
    NOT?: einsatzWhereInput | einsatzWhereInput[]
    datum?: DateTimeFilter<"einsatz"> | Date | string
    beschreibung?: StringNullableFilter<"einsatz"> | string | null
    ort?: StringNullableFilter<"einsatz"> | string | null
    art?: Enumeinsatz_artFilter<"einsatz"> | $Enums.einsatz_art
  }, "id">

  export type einsatzOrderByWithAggregationInput = {
    id?: SortOrder
    datum?: SortOrder
    beschreibung?: SortOrderInput | SortOrder
    ort?: SortOrderInput | SortOrder
    art?: SortOrder
    _count?: einsatzCountOrderByAggregateInput
    _avg?: einsatzAvgOrderByAggregateInput
    _max?: einsatzMaxOrderByAggregateInput
    _min?: einsatzMinOrderByAggregateInput
    _sum?: einsatzSumOrderByAggregateInput
  }

  export type einsatzScalarWhereWithAggregatesInput = {
    AND?: einsatzScalarWhereWithAggregatesInput | einsatzScalarWhereWithAggregatesInput[]
    OR?: einsatzScalarWhereWithAggregatesInput[]
    NOT?: einsatzScalarWhereWithAggregatesInput | einsatzScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"einsatz"> | number
    datum?: DateTimeWithAggregatesFilter<"einsatz"> | Date | string
    beschreibung?: StringNullableWithAggregatesFilter<"einsatz"> | string | null
    ort?: StringNullableWithAggregatesFilter<"einsatz"> | string | null
    art?: Enumeinsatz_artWithAggregatesFilter<"einsatz"> | $Enums.einsatz_art
  }

  export type ff_mitgliedWhereInput = {
    AND?: ff_mitgliedWhereInput | ff_mitgliedWhereInput[]
    OR?: ff_mitgliedWhereInput[]
    NOT?: ff_mitgliedWhereInput | ff_mitgliedWhereInput[]
    id?: IntFilter<"ff_mitglied"> | number
    person_id?: IntFilter<"ff_mitglied"> | number
    eintrittsdatum?: DateTimeFilter<"ff_mitglied"> | Date | string
    austrittsdatum?: DateTimeNullableFilter<"ff_mitglied"> | Date | string | null
    status?: Enumff_mitglied_statusFilter<"ff_mitglied"> | $Enums.ff_mitglied_status
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
    mitglied_funktionen?: Mitglied_funktionenListRelationFilter
    teilnahme?: TeilnahmeListRelationFilter
  }

  export type ff_mitgliedOrderByWithRelationInput = {
    id?: SortOrder
    person_id?: SortOrder
    eintrittsdatum?: SortOrder
    austrittsdatum?: SortOrderInput | SortOrder
    status?: SortOrder
    person?: personOrderByWithRelationInput
    mitglied_funktionen?: mitglied_funktionenOrderByRelationAggregateInput
    teilnahme?: teilnahmeOrderByRelationAggregateInput
  }

  export type ff_mitgliedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ff_mitgliedWhereInput | ff_mitgliedWhereInput[]
    OR?: ff_mitgliedWhereInput[]
    NOT?: ff_mitgliedWhereInput | ff_mitgliedWhereInput[]
    person_id?: IntFilter<"ff_mitglied"> | number
    eintrittsdatum?: DateTimeFilter<"ff_mitglied"> | Date | string
    austrittsdatum?: DateTimeNullableFilter<"ff_mitglied"> | Date | string | null
    status?: Enumff_mitglied_statusFilter<"ff_mitglied"> | $Enums.ff_mitglied_status
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
    mitglied_funktionen?: Mitglied_funktionenListRelationFilter
    teilnahme?: TeilnahmeListRelationFilter
  }, "id">

  export type ff_mitgliedOrderByWithAggregationInput = {
    id?: SortOrder
    person_id?: SortOrder
    eintrittsdatum?: SortOrder
    austrittsdatum?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: ff_mitgliedCountOrderByAggregateInput
    _avg?: ff_mitgliedAvgOrderByAggregateInput
    _max?: ff_mitgliedMaxOrderByAggregateInput
    _min?: ff_mitgliedMinOrderByAggregateInput
    _sum?: ff_mitgliedSumOrderByAggregateInput
  }

  export type ff_mitgliedScalarWhereWithAggregatesInput = {
    AND?: ff_mitgliedScalarWhereWithAggregatesInput | ff_mitgliedScalarWhereWithAggregatesInput[]
    OR?: ff_mitgliedScalarWhereWithAggregatesInput[]
    NOT?: ff_mitgliedScalarWhereWithAggregatesInput | ff_mitgliedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ff_mitglied"> | number
    person_id?: IntWithAggregatesFilter<"ff_mitglied"> | number
    eintrittsdatum?: DateTimeWithAggregatesFilter<"ff_mitglied"> | Date | string
    austrittsdatum?: DateTimeNullableWithAggregatesFilter<"ff_mitglied"> | Date | string | null
    status?: Enumff_mitglied_statusWithAggregatesFilter<"ff_mitglied"> | $Enums.ff_mitglied_status
  }

  export type funktion_ffWhereInput = {
    AND?: funktion_ffWhereInput | funktion_ffWhereInput[]
    OR?: funktion_ffWhereInput[]
    NOT?: funktion_ffWhereInput | funktion_ffWhereInput[]
    id?: IntFilter<"funktion_ff"> | number
    name?: StringFilter<"funktion_ff"> | string
    ist_admin?: BoolFilter<"funktion_ff"> | boolean
    mitglied_funktionen?: Mitglied_funktionenListRelationFilter
  }

  export type funktion_ffOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ist_admin?: SortOrder
    mitglied_funktionen?: mitglied_funktionenOrderByRelationAggregateInput
    _relevance?: funktion_ffOrderByRelevanceInput
  }

  export type funktion_ffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: funktion_ffWhereInput | funktion_ffWhereInput[]
    OR?: funktion_ffWhereInput[]
    NOT?: funktion_ffWhereInput | funktion_ffWhereInput[]
    name?: StringFilter<"funktion_ff"> | string
    ist_admin?: BoolFilter<"funktion_ff"> | boolean
    mitglied_funktionen?: Mitglied_funktionenListRelationFilter
  }, "id">

  export type funktion_ffOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ist_admin?: SortOrder
    _count?: funktion_ffCountOrderByAggregateInput
    _avg?: funktion_ffAvgOrderByAggregateInput
    _max?: funktion_ffMaxOrderByAggregateInput
    _min?: funktion_ffMinOrderByAggregateInput
    _sum?: funktion_ffSumOrderByAggregateInput
  }

  export type funktion_ffScalarWhereWithAggregatesInput = {
    AND?: funktion_ffScalarWhereWithAggregatesInput | funktion_ffScalarWhereWithAggregatesInput[]
    OR?: funktion_ffScalarWhereWithAggregatesInput[]
    NOT?: funktion_ffScalarWhereWithAggregatesInput | funktion_ffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"funktion_ff"> | number
    name?: StringWithAggregatesFilter<"funktion_ff"> | string
    ist_admin?: BoolWithAggregatesFilter<"funktion_ff"> | boolean
  }

  export type funktion_jfWhereInput = {
    AND?: funktion_jfWhereInput | funktion_jfWhereInput[]
    OR?: funktion_jfWhereInput[]
    NOT?: funktion_jfWhereInput | funktion_jfWhereInput[]
    id?: IntFilter<"funktion_jf"> | number
    name?: StringFilter<"funktion_jf"> | string
    ist_admin?: BoolFilter<"funktion_jf"> | boolean
  }

  export type funktion_jfOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ist_admin?: SortOrder
    _relevance?: funktion_jfOrderByRelevanceInput
  }

  export type funktion_jfWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: funktion_jfWhereInput | funktion_jfWhereInput[]
    OR?: funktion_jfWhereInput[]
    NOT?: funktion_jfWhereInput | funktion_jfWhereInput[]
    name?: StringFilter<"funktion_jf"> | string
    ist_admin?: BoolFilter<"funktion_jf"> | boolean
  }, "id">

  export type funktion_jfOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ist_admin?: SortOrder
    _count?: funktion_jfCountOrderByAggregateInput
    _avg?: funktion_jfAvgOrderByAggregateInput
    _max?: funktion_jfMaxOrderByAggregateInput
    _min?: funktion_jfMinOrderByAggregateInput
    _sum?: funktion_jfSumOrderByAggregateInput
  }

  export type funktion_jfScalarWhereWithAggregatesInput = {
    AND?: funktion_jfScalarWhereWithAggregatesInput | funktion_jfScalarWhereWithAggregatesInput[]
    OR?: funktion_jfScalarWhereWithAggregatesInput[]
    NOT?: funktion_jfScalarWhereWithAggregatesInput | funktion_jfScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"funktion_jf"> | number
    name?: StringWithAggregatesFilter<"funktion_jf"> | string
    ist_admin?: BoolWithAggregatesFilter<"funktion_jf"> | boolean
  }

  export type jf_erziehungsberechtigterWhereInput = {
    AND?: jf_erziehungsberechtigterWhereInput | jf_erziehungsberechtigterWhereInput[]
    OR?: jf_erziehungsberechtigterWhereInput[]
    NOT?: jf_erziehungsberechtigterWhereInput | jf_erziehungsberechtigterWhereInput[]
    id?: IntFilter<"jf_erziehungsberechtigter"> | number
    jf_mitglied_id?: IntFilter<"jf_erziehungsberechtigter"> | number
    person_id?: IntFilter<"jf_erziehungsberechtigter"> | number
    jf_mitglied?: XOR<Jf_mitgliedScalarRelationFilter, jf_mitgliedWhereInput>
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
  }

  export type jf_erziehungsberechtigterOrderByWithRelationInput = {
    id?: SortOrder
    jf_mitglied_id?: SortOrder
    person_id?: SortOrder
    jf_mitglied?: jf_mitgliedOrderByWithRelationInput
    person?: personOrderByWithRelationInput
  }

  export type jf_erziehungsberechtigterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: jf_erziehungsberechtigterWhereInput | jf_erziehungsberechtigterWhereInput[]
    OR?: jf_erziehungsberechtigterWhereInput[]
    NOT?: jf_erziehungsberechtigterWhereInput | jf_erziehungsberechtigterWhereInput[]
    jf_mitglied_id?: IntFilter<"jf_erziehungsberechtigter"> | number
    person_id?: IntFilter<"jf_erziehungsberechtigter"> | number
    jf_mitglied?: XOR<Jf_mitgliedScalarRelationFilter, jf_mitgliedWhereInput>
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
  }, "id">

  export type jf_erziehungsberechtigterOrderByWithAggregationInput = {
    id?: SortOrder
    jf_mitglied_id?: SortOrder
    person_id?: SortOrder
    _count?: jf_erziehungsberechtigterCountOrderByAggregateInput
    _avg?: jf_erziehungsberechtigterAvgOrderByAggregateInput
    _max?: jf_erziehungsberechtigterMaxOrderByAggregateInput
    _min?: jf_erziehungsberechtigterMinOrderByAggregateInput
    _sum?: jf_erziehungsberechtigterSumOrderByAggregateInput
  }

  export type jf_erziehungsberechtigterScalarWhereWithAggregatesInput = {
    AND?: jf_erziehungsberechtigterScalarWhereWithAggregatesInput | jf_erziehungsberechtigterScalarWhereWithAggregatesInput[]
    OR?: jf_erziehungsberechtigterScalarWhereWithAggregatesInput[]
    NOT?: jf_erziehungsberechtigterScalarWhereWithAggregatesInput | jf_erziehungsberechtigterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"jf_erziehungsberechtigter"> | number
    jf_mitglied_id?: IntWithAggregatesFilter<"jf_erziehungsberechtigter"> | number
    person_id?: IntWithAggregatesFilter<"jf_erziehungsberechtigter"> | number
  }

  export type jf_mitgliedWhereInput = {
    AND?: jf_mitgliedWhereInput | jf_mitgliedWhereInput[]
    OR?: jf_mitgliedWhereInput[]
    NOT?: jf_mitgliedWhereInput | jf_mitgliedWhereInput[]
    id?: IntFilter<"jf_mitglied"> | number
    person_id?: IntFilter<"jf_mitglied"> | number
    eintrittsdatum?: DateTimeFilter<"jf_mitglied"> | Date | string
    austrittsdatum?: DateTimeNullableFilter<"jf_mitglied"> | Date | string | null
    status?: Enumjf_mitglied_statusFilter<"jf_mitglied"> | $Enums.jf_mitglied_status
    jf_erziehungsberechtigter?: Jf_erziehungsberechtigterListRelationFilter
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
  }

  export type jf_mitgliedOrderByWithRelationInput = {
    id?: SortOrder
    person_id?: SortOrder
    eintrittsdatum?: SortOrder
    austrittsdatum?: SortOrderInput | SortOrder
    status?: SortOrder
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterOrderByRelationAggregateInput
    person?: personOrderByWithRelationInput
  }

  export type jf_mitgliedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: jf_mitgliedWhereInput | jf_mitgliedWhereInput[]
    OR?: jf_mitgliedWhereInput[]
    NOT?: jf_mitgliedWhereInput | jf_mitgliedWhereInput[]
    person_id?: IntFilter<"jf_mitglied"> | number
    eintrittsdatum?: DateTimeFilter<"jf_mitglied"> | Date | string
    austrittsdatum?: DateTimeNullableFilter<"jf_mitglied"> | Date | string | null
    status?: Enumjf_mitglied_statusFilter<"jf_mitglied"> | $Enums.jf_mitglied_status
    jf_erziehungsberechtigter?: Jf_erziehungsberechtigterListRelationFilter
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
  }, "id">

  export type jf_mitgliedOrderByWithAggregationInput = {
    id?: SortOrder
    person_id?: SortOrder
    eintrittsdatum?: SortOrder
    austrittsdatum?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: jf_mitgliedCountOrderByAggregateInput
    _avg?: jf_mitgliedAvgOrderByAggregateInput
    _max?: jf_mitgliedMaxOrderByAggregateInput
    _min?: jf_mitgliedMinOrderByAggregateInput
    _sum?: jf_mitgliedSumOrderByAggregateInput
  }

  export type jf_mitgliedScalarWhereWithAggregatesInput = {
    AND?: jf_mitgliedScalarWhereWithAggregatesInput | jf_mitgliedScalarWhereWithAggregatesInput[]
    OR?: jf_mitgliedScalarWhereWithAggregatesInput[]
    NOT?: jf_mitgliedScalarWhereWithAggregatesInput | jf_mitgliedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"jf_mitglied"> | number
    person_id?: IntWithAggregatesFilter<"jf_mitglied"> | number
    eintrittsdatum?: DateTimeWithAggregatesFilter<"jf_mitglied"> | Date | string
    austrittsdatum?: DateTimeNullableWithAggregatesFilter<"jf_mitglied"> | Date | string | null
    status?: Enumjf_mitglied_statusWithAggregatesFilter<"jf_mitglied"> | $Enums.jf_mitglied_status
  }

  export type mitglied_funktionenWhereInput = {
    AND?: mitglied_funktionenWhereInput | mitglied_funktionenWhereInput[]
    OR?: mitglied_funktionenWhereInput[]
    NOT?: mitglied_funktionenWhereInput | mitglied_funktionenWhereInput[]
    id?: IntFilter<"mitglied_funktionen"> | number
    mitglied_id?: IntFilter<"mitglied_funktionen"> | number
    funktion_id?: IntFilter<"mitglied_funktionen"> | number
    typ?: Enummitglied_funktionen_typFilter<"mitglied_funktionen"> | $Enums.mitglied_funktionen_typ
    ff_mitglied?: XOR<Ff_mitgliedScalarRelationFilter, ff_mitgliedWhereInput>
    funktion_ff?: XOR<Funktion_ffScalarRelationFilter, funktion_ffWhereInput>
  }

  export type mitglied_funktionenOrderByWithRelationInput = {
    id?: SortOrder
    mitglied_id?: SortOrder
    funktion_id?: SortOrder
    typ?: SortOrder
    ff_mitglied?: ff_mitgliedOrderByWithRelationInput
    funktion_ff?: funktion_ffOrderByWithRelationInput
  }

  export type mitglied_funktionenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mitglied_funktionenWhereInput | mitglied_funktionenWhereInput[]
    OR?: mitglied_funktionenWhereInput[]
    NOT?: mitglied_funktionenWhereInput | mitglied_funktionenWhereInput[]
    mitglied_id?: IntFilter<"mitglied_funktionen"> | number
    funktion_id?: IntFilter<"mitglied_funktionen"> | number
    typ?: Enummitglied_funktionen_typFilter<"mitglied_funktionen"> | $Enums.mitglied_funktionen_typ
    ff_mitglied?: XOR<Ff_mitgliedScalarRelationFilter, ff_mitgliedWhereInput>
    funktion_ff?: XOR<Funktion_ffScalarRelationFilter, funktion_ffWhereInput>
  }, "id">

  export type mitglied_funktionenOrderByWithAggregationInput = {
    id?: SortOrder
    mitglied_id?: SortOrder
    funktion_id?: SortOrder
    typ?: SortOrder
    _count?: mitglied_funktionenCountOrderByAggregateInput
    _avg?: mitglied_funktionenAvgOrderByAggregateInput
    _max?: mitglied_funktionenMaxOrderByAggregateInput
    _min?: mitglied_funktionenMinOrderByAggregateInput
    _sum?: mitglied_funktionenSumOrderByAggregateInput
  }

  export type mitglied_funktionenScalarWhereWithAggregatesInput = {
    AND?: mitglied_funktionenScalarWhereWithAggregatesInput | mitglied_funktionenScalarWhereWithAggregatesInput[]
    OR?: mitglied_funktionenScalarWhereWithAggregatesInput[]
    NOT?: mitglied_funktionenScalarWhereWithAggregatesInput | mitglied_funktionenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mitglied_funktionen"> | number
    mitglied_id?: IntWithAggregatesFilter<"mitglied_funktionen"> | number
    funktion_id?: IntWithAggregatesFilter<"mitglied_funktionen"> | number
    typ?: Enummitglied_funktionen_typWithAggregatesFilter<"mitglied_funktionen"> | $Enums.mitglied_funktionen_typ
  }

  export type mitglied_loginWhereInput = {
    AND?: mitglied_loginWhereInput | mitglied_loginWhereInput[]
    OR?: mitglied_loginWhereInput[]
    NOT?: mitglied_loginWhereInput | mitglied_loginWhereInput[]
    id?: IntFilter<"mitglied_login"> | number
    benutzer_id?: IntFilter<"mitglied_login"> | number
    mitglied_id?: IntFilter<"mitglied_login"> | number
    ty?: Enummitglied_login_tyFilter<"mitglied_login"> | $Enums.mitglied_login_ty
  }

  export type mitglied_loginOrderByWithRelationInput = {
    id?: SortOrder
    benutzer_id?: SortOrder
    mitglied_id?: SortOrder
    ty?: SortOrder
  }

  export type mitglied_loginWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mitglied_loginWhereInput | mitglied_loginWhereInput[]
    OR?: mitglied_loginWhereInput[]
    NOT?: mitglied_loginWhereInput | mitglied_loginWhereInput[]
    benutzer_id?: IntFilter<"mitglied_login"> | number
    mitglied_id?: IntFilter<"mitglied_login"> | number
    ty?: Enummitglied_login_tyFilter<"mitglied_login"> | $Enums.mitglied_login_ty
  }, "id">

  export type mitglied_loginOrderByWithAggregationInput = {
    id?: SortOrder
    benutzer_id?: SortOrder
    mitglied_id?: SortOrder
    ty?: SortOrder
    _count?: mitglied_loginCountOrderByAggregateInput
    _avg?: mitglied_loginAvgOrderByAggregateInput
    _max?: mitglied_loginMaxOrderByAggregateInput
    _min?: mitglied_loginMinOrderByAggregateInput
    _sum?: mitglied_loginSumOrderByAggregateInput
  }

  export type mitglied_loginScalarWhereWithAggregatesInput = {
    AND?: mitglied_loginScalarWhereWithAggregatesInput | mitglied_loginScalarWhereWithAggregatesInput[]
    OR?: mitglied_loginScalarWhereWithAggregatesInput[]
    NOT?: mitglied_loginScalarWhereWithAggregatesInput | mitglied_loginScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mitglied_login"> | number
    benutzer_id?: IntWithAggregatesFilter<"mitglied_login"> | number
    mitglied_id?: IntWithAggregatesFilter<"mitglied_login"> | number
    ty?: Enummitglied_login_tyWithAggregatesFilter<"mitglied_login"> | $Enums.mitglied_login_ty
  }

  export type personWhereInput = {
    AND?: personWhereInput | personWhereInput[]
    OR?: personWhereInput[]
    NOT?: personWhereInput | personWhereInput[]
    id?: IntFilter<"person"> | number
    vorname?: StringFilter<"person"> | string
    name?: StringFilter<"person"> | string
    geburtsdatum?: DateTimeNullableFilter<"person"> | Date | string | null
    email?: StringFilter<"person"> | string
    ff_mitglied?: Ff_mitgliedListRelationFilter
    jf_erziehungsberechtigter?: Jf_erziehungsberechtigterListRelationFilter
    jf_mitglied?: Jf_mitgliedListRelationFilter
  }

  export type personOrderByWithRelationInput = {
    id?: SortOrder
    vorname?: SortOrder
    name?: SortOrder
    geburtsdatum?: SortOrderInput | SortOrder
    email?: SortOrder
    ff_mitglied?: ff_mitgliedOrderByRelationAggregateInput
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterOrderByRelationAggregateInput
    jf_mitglied?: jf_mitgliedOrderByRelationAggregateInput
    _relevance?: personOrderByRelevanceInput
  }

  export type personWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: personWhereInput | personWhereInput[]
    OR?: personWhereInput[]
    NOT?: personWhereInput | personWhereInput[]
    vorname?: StringFilter<"person"> | string
    name?: StringFilter<"person"> | string
    geburtsdatum?: DateTimeNullableFilter<"person"> | Date | string | null
    email?: StringFilter<"person"> | string
    ff_mitglied?: Ff_mitgliedListRelationFilter
    jf_erziehungsberechtigter?: Jf_erziehungsberechtigterListRelationFilter
    jf_mitglied?: Jf_mitgliedListRelationFilter
  }, "id">

  export type personOrderByWithAggregationInput = {
    id?: SortOrder
    vorname?: SortOrder
    name?: SortOrder
    geburtsdatum?: SortOrderInput | SortOrder
    email?: SortOrder
    _count?: personCountOrderByAggregateInput
    _avg?: personAvgOrderByAggregateInput
    _max?: personMaxOrderByAggregateInput
    _min?: personMinOrderByAggregateInput
    _sum?: personSumOrderByAggregateInput
  }

  export type personScalarWhereWithAggregatesInput = {
    AND?: personScalarWhereWithAggregatesInput | personScalarWhereWithAggregatesInput[]
    OR?: personScalarWhereWithAggregatesInput[]
    NOT?: personScalarWhereWithAggregatesInput | personScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"person"> | number
    vorname?: StringWithAggregatesFilter<"person"> | string
    name?: StringWithAggregatesFilter<"person"> | string
    geburtsdatum?: DateTimeNullableWithAggregatesFilter<"person"> | Date | string | null
    email?: StringWithAggregatesFilter<"person"> | string
  }

  export type teilnahmeWhereInput = {
    AND?: teilnahmeWhereInput | teilnahmeWhereInput[]
    OR?: teilnahmeWhereInput[]
    NOT?: teilnahmeWhereInput | teilnahmeWhereInput[]
    id?: IntFilter<"teilnahme"> | number
    mitglied_id?: IntFilter<"teilnahme"> | number
    veranstaltung_id?: IntFilter<"teilnahme"> | number
    typ?: Enumteilnahme_typFilter<"teilnahme"> | $Enums.teilnahme_typ
    ff_mitglied?: XOR<Ff_mitgliedScalarRelationFilter, ff_mitgliedWhereInput>
  }

  export type teilnahmeOrderByWithRelationInput = {
    id?: SortOrder
    mitglied_id?: SortOrder
    veranstaltung_id?: SortOrder
    typ?: SortOrder
    ff_mitglied?: ff_mitgliedOrderByWithRelationInput
  }

  export type teilnahmeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: teilnahmeWhereInput | teilnahmeWhereInput[]
    OR?: teilnahmeWhereInput[]
    NOT?: teilnahmeWhereInput | teilnahmeWhereInput[]
    mitglied_id?: IntFilter<"teilnahme"> | number
    veranstaltung_id?: IntFilter<"teilnahme"> | number
    typ?: Enumteilnahme_typFilter<"teilnahme"> | $Enums.teilnahme_typ
    ff_mitglied?: XOR<Ff_mitgliedScalarRelationFilter, ff_mitgliedWhereInput>
  }, "id">

  export type teilnahmeOrderByWithAggregationInput = {
    id?: SortOrder
    mitglied_id?: SortOrder
    veranstaltung_id?: SortOrder
    typ?: SortOrder
    _count?: teilnahmeCountOrderByAggregateInput
    _avg?: teilnahmeAvgOrderByAggregateInput
    _max?: teilnahmeMaxOrderByAggregateInput
    _min?: teilnahmeMinOrderByAggregateInput
    _sum?: teilnahmeSumOrderByAggregateInput
  }

  export type teilnahmeScalarWhereWithAggregatesInput = {
    AND?: teilnahmeScalarWhereWithAggregatesInput | teilnahmeScalarWhereWithAggregatesInput[]
    OR?: teilnahmeScalarWhereWithAggregatesInput[]
    NOT?: teilnahmeScalarWhereWithAggregatesInput | teilnahmeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"teilnahme"> | number
    mitglied_id?: IntWithAggregatesFilter<"teilnahme"> | number
    veranstaltung_id?: IntWithAggregatesFilter<"teilnahme"> | number
    typ?: Enumteilnahme_typWithAggregatesFilter<"teilnahme"> | $Enums.teilnahme_typ
  }

  export type uebungsabendWhereInput = {
    AND?: uebungsabendWhereInput | uebungsabendWhereInput[]
    OR?: uebungsabendWhereInput[]
    NOT?: uebungsabendWhereInput | uebungsabendWhereInput[]
    id?: IntFilter<"uebungsabend"> | number
    datum?: DateTimeFilter<"uebungsabend"> | Date | string
    thema?: StringNullableFilter<"uebungsabend"> | string | null
  }

  export type uebungsabendOrderByWithRelationInput = {
    id?: SortOrder
    datum?: SortOrder
    thema?: SortOrderInput | SortOrder
    _relevance?: uebungsabendOrderByRelevanceInput
  }

  export type uebungsabendWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: uebungsabendWhereInput | uebungsabendWhereInput[]
    OR?: uebungsabendWhereInput[]
    NOT?: uebungsabendWhereInput | uebungsabendWhereInput[]
    datum?: DateTimeFilter<"uebungsabend"> | Date | string
    thema?: StringNullableFilter<"uebungsabend"> | string | null
  }, "id">

  export type uebungsabendOrderByWithAggregationInput = {
    id?: SortOrder
    datum?: SortOrder
    thema?: SortOrderInput | SortOrder
    _count?: uebungsabendCountOrderByAggregateInput
    _avg?: uebungsabendAvgOrderByAggregateInput
    _max?: uebungsabendMaxOrderByAggregateInput
    _min?: uebungsabendMinOrderByAggregateInput
    _sum?: uebungsabendSumOrderByAggregateInput
  }

  export type uebungsabendScalarWhereWithAggregatesInput = {
    AND?: uebungsabendScalarWhereWithAggregatesInput | uebungsabendScalarWhereWithAggregatesInput[]
    OR?: uebungsabendScalarWhereWithAggregatesInput[]
    NOT?: uebungsabendScalarWhereWithAggregatesInput | uebungsabendScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"uebungsabend"> | number
    datum?: DateTimeWithAggregatesFilter<"uebungsabend"> | Date | string
    thema?: StringNullableWithAggregatesFilter<"uebungsabend"> | string | null
  }

  export type einsatzCreateInput = {
    datum: Date | string
    beschreibung?: string | null
    ort?: string | null
    art: $Enums.einsatz_art
  }

  export type einsatzUncheckedCreateInput = {
    id?: number
    datum: Date | string
    beschreibung?: string | null
    ort?: string | null
    art: $Enums.einsatz_art
  }

  export type einsatzUpdateInput = {
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    beschreibung?: NullableStringFieldUpdateOperationsInput | string | null
    ort?: NullableStringFieldUpdateOperationsInput | string | null
    art?: Enumeinsatz_artFieldUpdateOperationsInput | $Enums.einsatz_art
  }

  export type einsatzUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    beschreibung?: NullableStringFieldUpdateOperationsInput | string | null
    ort?: NullableStringFieldUpdateOperationsInput | string | null
    art?: Enumeinsatz_artFieldUpdateOperationsInput | $Enums.einsatz_art
  }

  export type einsatzCreateManyInput = {
    id?: number
    datum: Date | string
    beschreibung?: string | null
    ort?: string | null
    art: $Enums.einsatz_art
  }

  export type einsatzUpdateManyMutationInput = {
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    beschreibung?: NullableStringFieldUpdateOperationsInput | string | null
    ort?: NullableStringFieldUpdateOperationsInput | string | null
    art?: Enumeinsatz_artFieldUpdateOperationsInput | $Enums.einsatz_art
  }

  export type einsatzUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    beschreibung?: NullableStringFieldUpdateOperationsInput | string | null
    ort?: NullableStringFieldUpdateOperationsInput | string | null
    art?: Enumeinsatz_artFieldUpdateOperationsInput | $Enums.einsatz_art
  }

  export type ff_mitgliedCreateInput = {
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.ff_mitglied_status
    person: personCreateNestedOneWithoutFf_mitgliedInput
    mitglied_funktionen?: mitglied_funktionenCreateNestedManyWithoutFf_mitgliedInput
    teilnahme?: teilnahmeCreateNestedManyWithoutFf_mitgliedInput
  }

  export type ff_mitgliedUncheckedCreateInput = {
    id?: number
    person_id: number
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.ff_mitglied_status
    mitglied_funktionen?: mitglied_funktionenUncheckedCreateNestedManyWithoutFf_mitgliedInput
    teilnahme?: teilnahmeUncheckedCreateNestedManyWithoutFf_mitgliedInput
  }

  export type ff_mitgliedUpdateInput = {
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumff_mitglied_statusFieldUpdateOperationsInput | $Enums.ff_mitglied_status
    person?: personUpdateOneRequiredWithoutFf_mitgliedNestedInput
    mitglied_funktionen?: mitglied_funktionenUpdateManyWithoutFf_mitgliedNestedInput
    teilnahme?: teilnahmeUpdateManyWithoutFf_mitgliedNestedInput
  }

  export type ff_mitgliedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumff_mitglied_statusFieldUpdateOperationsInput | $Enums.ff_mitglied_status
    mitglied_funktionen?: mitglied_funktionenUncheckedUpdateManyWithoutFf_mitgliedNestedInput
    teilnahme?: teilnahmeUncheckedUpdateManyWithoutFf_mitgliedNestedInput
  }

  export type ff_mitgliedCreateManyInput = {
    id?: number
    person_id: number
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.ff_mitglied_status
  }

  export type ff_mitgliedUpdateManyMutationInput = {
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumff_mitglied_statusFieldUpdateOperationsInput | $Enums.ff_mitglied_status
  }

  export type ff_mitgliedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumff_mitglied_statusFieldUpdateOperationsInput | $Enums.ff_mitglied_status
  }

  export type funktion_ffCreateInput = {
    name: string
    ist_admin?: boolean
    mitglied_funktionen?: mitglied_funktionenCreateNestedManyWithoutFunktion_ffInput
  }

  export type funktion_ffUncheckedCreateInput = {
    id?: number
    name: string
    ist_admin?: boolean
    mitglied_funktionen?: mitglied_funktionenUncheckedCreateNestedManyWithoutFunktion_ffInput
  }

  export type funktion_ffUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    ist_admin?: BoolFieldUpdateOperationsInput | boolean
    mitglied_funktionen?: mitglied_funktionenUpdateManyWithoutFunktion_ffNestedInput
  }

  export type funktion_ffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ist_admin?: BoolFieldUpdateOperationsInput | boolean
    mitglied_funktionen?: mitglied_funktionenUncheckedUpdateManyWithoutFunktion_ffNestedInput
  }

  export type funktion_ffCreateManyInput = {
    id?: number
    name: string
    ist_admin?: boolean
  }

  export type funktion_ffUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    ist_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type funktion_ffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ist_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type funktion_jfCreateInput = {
    name: string
    ist_admin?: boolean
  }

  export type funktion_jfUncheckedCreateInput = {
    id?: number
    name: string
    ist_admin?: boolean
  }

  export type funktion_jfUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    ist_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type funktion_jfUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ist_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type funktion_jfCreateManyInput = {
    id?: number
    name: string
    ist_admin?: boolean
  }

  export type funktion_jfUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    ist_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type funktion_jfUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ist_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type jf_erziehungsberechtigterCreateInput = {
    jf_mitglied: jf_mitgliedCreateNestedOneWithoutJf_erziehungsberechtigterInput
    person: personCreateNestedOneWithoutJf_erziehungsberechtigterInput
  }

  export type jf_erziehungsberechtigterUncheckedCreateInput = {
    id?: number
    jf_mitglied_id: number
    person_id: number
  }

  export type jf_erziehungsberechtigterUpdateInput = {
    jf_mitglied?: jf_mitgliedUpdateOneRequiredWithoutJf_erziehungsberechtigterNestedInput
    person?: personUpdateOneRequiredWithoutJf_erziehungsberechtigterNestedInput
  }

  export type jf_erziehungsberechtigterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jf_mitglied_id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
  }

  export type jf_erziehungsberechtigterCreateManyInput = {
    id?: number
    jf_mitglied_id: number
    person_id: number
  }

  export type jf_erziehungsberechtigterUpdateManyMutationInput = {

  }

  export type jf_erziehungsberechtigterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jf_mitglied_id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
  }

  export type jf_mitgliedCreateInput = {
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.jf_mitglied_status
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterCreateNestedManyWithoutJf_mitgliedInput
    person: personCreateNestedOneWithoutJf_mitgliedInput
  }

  export type jf_mitgliedUncheckedCreateInput = {
    id?: number
    person_id: number
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.jf_mitglied_status
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUncheckedCreateNestedManyWithoutJf_mitgliedInput
  }

  export type jf_mitgliedUpdateInput = {
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumjf_mitglied_statusFieldUpdateOperationsInput | $Enums.jf_mitglied_status
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUpdateManyWithoutJf_mitgliedNestedInput
    person?: personUpdateOneRequiredWithoutJf_mitgliedNestedInput
  }

  export type jf_mitgliedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumjf_mitglied_statusFieldUpdateOperationsInput | $Enums.jf_mitglied_status
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUncheckedUpdateManyWithoutJf_mitgliedNestedInput
  }

  export type jf_mitgliedCreateManyInput = {
    id?: number
    person_id: number
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.jf_mitglied_status
  }

  export type jf_mitgliedUpdateManyMutationInput = {
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumjf_mitglied_statusFieldUpdateOperationsInput | $Enums.jf_mitglied_status
  }

  export type jf_mitgliedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumjf_mitglied_statusFieldUpdateOperationsInput | $Enums.jf_mitglied_status
  }

  export type mitglied_funktionenCreateInput = {
    typ: $Enums.mitglied_funktionen_typ
    ff_mitglied: ff_mitgliedCreateNestedOneWithoutMitglied_funktionenInput
    funktion_ff: funktion_ffCreateNestedOneWithoutMitglied_funktionenInput
  }

  export type mitglied_funktionenUncheckedCreateInput = {
    id?: number
    mitglied_id: number
    funktion_id: number
    typ: $Enums.mitglied_funktionen_typ
  }

  export type mitglied_funktionenUpdateInput = {
    typ?: Enummitglied_funktionen_typFieldUpdateOperationsInput | $Enums.mitglied_funktionen_typ
    ff_mitglied?: ff_mitgliedUpdateOneRequiredWithoutMitglied_funktionenNestedInput
    funktion_ff?: funktion_ffUpdateOneRequiredWithoutMitglied_funktionenNestedInput
  }

  export type mitglied_funktionenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mitglied_id?: IntFieldUpdateOperationsInput | number
    funktion_id?: IntFieldUpdateOperationsInput | number
    typ?: Enummitglied_funktionen_typFieldUpdateOperationsInput | $Enums.mitglied_funktionen_typ
  }

  export type mitglied_funktionenCreateManyInput = {
    id?: number
    mitglied_id: number
    funktion_id: number
    typ: $Enums.mitglied_funktionen_typ
  }

  export type mitglied_funktionenUpdateManyMutationInput = {
    typ?: Enummitglied_funktionen_typFieldUpdateOperationsInput | $Enums.mitglied_funktionen_typ
  }

  export type mitglied_funktionenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mitglied_id?: IntFieldUpdateOperationsInput | number
    funktion_id?: IntFieldUpdateOperationsInput | number
    typ?: Enummitglied_funktionen_typFieldUpdateOperationsInput | $Enums.mitglied_funktionen_typ
  }

  export type mitglied_loginCreateInput = {
    benutzer_id: number
    mitglied_id: number
    ty: $Enums.mitglied_login_ty
  }

  export type mitglied_loginUncheckedCreateInput = {
    id?: number
    benutzer_id: number
    mitglied_id: number
    ty: $Enums.mitglied_login_ty
  }

  export type mitglied_loginUpdateInput = {
    benutzer_id?: IntFieldUpdateOperationsInput | number
    mitglied_id?: IntFieldUpdateOperationsInput | number
    ty?: Enummitglied_login_tyFieldUpdateOperationsInput | $Enums.mitglied_login_ty
  }

  export type mitglied_loginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    benutzer_id?: IntFieldUpdateOperationsInput | number
    mitglied_id?: IntFieldUpdateOperationsInput | number
    ty?: Enummitglied_login_tyFieldUpdateOperationsInput | $Enums.mitglied_login_ty
  }

  export type mitglied_loginCreateManyInput = {
    id?: number
    benutzer_id: number
    mitglied_id: number
    ty: $Enums.mitglied_login_ty
  }

  export type mitglied_loginUpdateManyMutationInput = {
    benutzer_id?: IntFieldUpdateOperationsInput | number
    mitglied_id?: IntFieldUpdateOperationsInput | number
    ty?: Enummitglied_login_tyFieldUpdateOperationsInput | $Enums.mitglied_login_ty
  }

  export type mitglied_loginUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    benutzer_id?: IntFieldUpdateOperationsInput | number
    mitglied_id?: IntFieldUpdateOperationsInput | number
    ty?: Enummitglied_login_tyFieldUpdateOperationsInput | $Enums.mitglied_login_ty
  }

  export type personCreateInput = {
    vorname: string
    name: string
    geburtsdatum?: Date | string | null
    email: string
    ff_mitglied?: ff_mitgliedCreateNestedManyWithoutPersonInput
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterCreateNestedManyWithoutPersonInput
    jf_mitglied?: jf_mitgliedCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateInput = {
    id?: number
    vorname: string
    name: string
    geburtsdatum?: Date | string | null
    email: string
    ff_mitglied?: ff_mitgliedUncheckedCreateNestedManyWithoutPersonInput
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUncheckedCreateNestedManyWithoutPersonInput
    jf_mitglied?: jf_mitgliedUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personUpdateInput = {
    vorname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    geburtsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    ff_mitglied?: ff_mitgliedUpdateManyWithoutPersonNestedInput
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUpdateManyWithoutPersonNestedInput
    jf_mitglied?: jf_mitgliedUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vorname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    geburtsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    ff_mitglied?: ff_mitgliedUncheckedUpdateManyWithoutPersonNestedInput
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUncheckedUpdateManyWithoutPersonNestedInput
    jf_mitglied?: jf_mitgliedUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type personCreateManyInput = {
    id?: number
    vorname: string
    name: string
    geburtsdatum?: Date | string | null
    email: string
  }

  export type personUpdateManyMutationInput = {
    vorname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    geburtsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type personUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vorname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    geburtsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type teilnahmeCreateInput = {
    veranstaltung_id: number
    typ: $Enums.teilnahme_typ
    ff_mitglied: ff_mitgliedCreateNestedOneWithoutTeilnahmeInput
  }

  export type teilnahmeUncheckedCreateInput = {
    id?: number
    mitglied_id: number
    veranstaltung_id: number
    typ: $Enums.teilnahme_typ
  }

  export type teilnahmeUpdateInput = {
    veranstaltung_id?: IntFieldUpdateOperationsInput | number
    typ?: Enumteilnahme_typFieldUpdateOperationsInput | $Enums.teilnahme_typ
    ff_mitglied?: ff_mitgliedUpdateOneRequiredWithoutTeilnahmeNestedInput
  }

  export type teilnahmeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mitglied_id?: IntFieldUpdateOperationsInput | number
    veranstaltung_id?: IntFieldUpdateOperationsInput | number
    typ?: Enumteilnahme_typFieldUpdateOperationsInput | $Enums.teilnahme_typ
  }

  export type teilnahmeCreateManyInput = {
    id?: number
    mitglied_id: number
    veranstaltung_id: number
    typ: $Enums.teilnahme_typ
  }

  export type teilnahmeUpdateManyMutationInput = {
    veranstaltung_id?: IntFieldUpdateOperationsInput | number
    typ?: Enumteilnahme_typFieldUpdateOperationsInput | $Enums.teilnahme_typ
  }

  export type teilnahmeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mitglied_id?: IntFieldUpdateOperationsInput | number
    veranstaltung_id?: IntFieldUpdateOperationsInput | number
    typ?: Enumteilnahme_typFieldUpdateOperationsInput | $Enums.teilnahme_typ
  }

  export type uebungsabendCreateInput = {
    datum: Date | string
    thema?: string | null
  }

  export type uebungsabendUncheckedCreateInput = {
    id?: number
    datum: Date | string
    thema?: string | null
  }

  export type uebungsabendUpdateInput = {
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    thema?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type uebungsabendUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    thema?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type uebungsabendCreateManyInput = {
    id?: number
    datum: Date | string
    thema?: string | null
  }

  export type uebungsabendUpdateManyMutationInput = {
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    thema?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type uebungsabendUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    datum?: DateTimeFieldUpdateOperationsInput | Date | string
    thema?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumeinsatz_artFilter<$PrismaModel = never> = {
    equals?: $Enums.einsatz_art | Enumeinsatz_artFieldRefInput<$PrismaModel>
    in?: $Enums.einsatz_art[]
    notIn?: $Enums.einsatz_art[]
    not?: NestedEnumeinsatz_artFilter<$PrismaModel> | $Enums.einsatz_art
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type einsatzOrderByRelevanceInput = {
    fields: einsatzOrderByRelevanceFieldEnum | einsatzOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type einsatzCountOrderByAggregateInput = {
    id?: SortOrder
    datum?: SortOrder
    beschreibung?: SortOrder
    ort?: SortOrder
    art?: SortOrder
  }

  export type einsatzAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type einsatzMaxOrderByAggregateInput = {
    id?: SortOrder
    datum?: SortOrder
    beschreibung?: SortOrder
    ort?: SortOrder
    art?: SortOrder
  }

  export type einsatzMinOrderByAggregateInput = {
    id?: SortOrder
    datum?: SortOrder
    beschreibung?: SortOrder
    ort?: SortOrder
    art?: SortOrder
  }

  export type einsatzSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumeinsatz_artWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.einsatz_art | Enumeinsatz_artFieldRefInput<$PrismaModel>
    in?: $Enums.einsatz_art[]
    notIn?: $Enums.einsatz_art[]
    not?: NestedEnumeinsatz_artWithAggregatesFilter<$PrismaModel> | $Enums.einsatz_art
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumeinsatz_artFilter<$PrismaModel>
    _max?: NestedEnumeinsatz_artFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Enumff_mitglied_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.ff_mitglied_status | Enumff_mitglied_statusFieldRefInput<$PrismaModel>
    in?: $Enums.ff_mitglied_status[]
    notIn?: $Enums.ff_mitglied_status[]
    not?: NestedEnumff_mitglied_statusFilter<$PrismaModel> | $Enums.ff_mitglied_status
  }

  export type PersonScalarRelationFilter = {
    is?: personWhereInput
    isNot?: personWhereInput
  }

  export type Mitglied_funktionenListRelationFilter = {
    every?: mitglied_funktionenWhereInput
    some?: mitglied_funktionenWhereInput
    none?: mitglied_funktionenWhereInput
  }

  export type TeilnahmeListRelationFilter = {
    every?: teilnahmeWhereInput
    some?: teilnahmeWhereInput
    none?: teilnahmeWhereInput
  }

  export type mitglied_funktionenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teilnahmeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ff_mitgliedCountOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
    eintrittsdatum?: SortOrder
    austrittsdatum?: SortOrder
    status?: SortOrder
  }

  export type ff_mitgliedAvgOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
  }

  export type ff_mitgliedMaxOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
    eintrittsdatum?: SortOrder
    austrittsdatum?: SortOrder
    status?: SortOrder
  }

  export type ff_mitgliedMinOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
    eintrittsdatum?: SortOrder
    austrittsdatum?: SortOrder
    status?: SortOrder
  }

  export type ff_mitgliedSumOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumff_mitglied_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ff_mitglied_status | Enumff_mitglied_statusFieldRefInput<$PrismaModel>
    in?: $Enums.ff_mitglied_status[]
    notIn?: $Enums.ff_mitglied_status[]
    not?: NestedEnumff_mitglied_statusWithAggregatesFilter<$PrismaModel> | $Enums.ff_mitglied_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumff_mitglied_statusFilter<$PrismaModel>
    _max?: NestedEnumff_mitglied_statusFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type funktion_ffOrderByRelevanceInput = {
    fields: funktion_ffOrderByRelevanceFieldEnum | funktion_ffOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type funktion_ffCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ist_admin?: SortOrder
  }

  export type funktion_ffAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type funktion_ffMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ist_admin?: SortOrder
  }

  export type funktion_ffMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ist_admin?: SortOrder
  }

  export type funktion_ffSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type funktion_jfOrderByRelevanceInput = {
    fields: funktion_jfOrderByRelevanceFieldEnum | funktion_jfOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type funktion_jfCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ist_admin?: SortOrder
  }

  export type funktion_jfAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type funktion_jfMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ist_admin?: SortOrder
  }

  export type funktion_jfMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ist_admin?: SortOrder
  }

  export type funktion_jfSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Jf_mitgliedScalarRelationFilter = {
    is?: jf_mitgliedWhereInput
    isNot?: jf_mitgliedWhereInput
  }

  export type jf_erziehungsberechtigterCountOrderByAggregateInput = {
    id?: SortOrder
    jf_mitglied_id?: SortOrder
    person_id?: SortOrder
  }

  export type jf_erziehungsberechtigterAvgOrderByAggregateInput = {
    id?: SortOrder
    jf_mitglied_id?: SortOrder
    person_id?: SortOrder
  }

  export type jf_erziehungsberechtigterMaxOrderByAggregateInput = {
    id?: SortOrder
    jf_mitglied_id?: SortOrder
    person_id?: SortOrder
  }

  export type jf_erziehungsberechtigterMinOrderByAggregateInput = {
    id?: SortOrder
    jf_mitglied_id?: SortOrder
    person_id?: SortOrder
  }

  export type jf_erziehungsberechtigterSumOrderByAggregateInput = {
    id?: SortOrder
    jf_mitglied_id?: SortOrder
    person_id?: SortOrder
  }

  export type Enumjf_mitglied_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.jf_mitglied_status | Enumjf_mitglied_statusFieldRefInput<$PrismaModel>
    in?: $Enums.jf_mitglied_status[]
    notIn?: $Enums.jf_mitglied_status[]
    not?: NestedEnumjf_mitglied_statusFilter<$PrismaModel> | $Enums.jf_mitglied_status
  }

  export type Jf_erziehungsberechtigterListRelationFilter = {
    every?: jf_erziehungsberechtigterWhereInput
    some?: jf_erziehungsberechtigterWhereInput
    none?: jf_erziehungsberechtigterWhereInput
  }

  export type jf_erziehungsberechtigterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type jf_mitgliedCountOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
    eintrittsdatum?: SortOrder
    austrittsdatum?: SortOrder
    status?: SortOrder
  }

  export type jf_mitgliedAvgOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
  }

  export type jf_mitgliedMaxOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
    eintrittsdatum?: SortOrder
    austrittsdatum?: SortOrder
    status?: SortOrder
  }

  export type jf_mitgliedMinOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
    eintrittsdatum?: SortOrder
    austrittsdatum?: SortOrder
    status?: SortOrder
  }

  export type jf_mitgliedSumOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
  }

  export type Enumjf_mitglied_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.jf_mitglied_status | Enumjf_mitglied_statusFieldRefInput<$PrismaModel>
    in?: $Enums.jf_mitglied_status[]
    notIn?: $Enums.jf_mitglied_status[]
    not?: NestedEnumjf_mitglied_statusWithAggregatesFilter<$PrismaModel> | $Enums.jf_mitglied_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumjf_mitglied_statusFilter<$PrismaModel>
    _max?: NestedEnumjf_mitglied_statusFilter<$PrismaModel>
  }

  export type Enummitglied_funktionen_typFilter<$PrismaModel = never> = {
    equals?: $Enums.mitglied_funktionen_typ | Enummitglied_funktionen_typFieldRefInput<$PrismaModel>
    in?: $Enums.mitglied_funktionen_typ[]
    notIn?: $Enums.mitglied_funktionen_typ[]
    not?: NestedEnummitglied_funktionen_typFilter<$PrismaModel> | $Enums.mitglied_funktionen_typ
  }

  export type Ff_mitgliedScalarRelationFilter = {
    is?: ff_mitgliedWhereInput
    isNot?: ff_mitgliedWhereInput
  }

  export type Funktion_ffScalarRelationFilter = {
    is?: funktion_ffWhereInput
    isNot?: funktion_ffWhereInput
  }

  export type mitglied_funktionenCountOrderByAggregateInput = {
    id?: SortOrder
    mitglied_id?: SortOrder
    funktion_id?: SortOrder
    typ?: SortOrder
  }

  export type mitglied_funktionenAvgOrderByAggregateInput = {
    id?: SortOrder
    mitglied_id?: SortOrder
    funktion_id?: SortOrder
  }

  export type mitglied_funktionenMaxOrderByAggregateInput = {
    id?: SortOrder
    mitglied_id?: SortOrder
    funktion_id?: SortOrder
    typ?: SortOrder
  }

  export type mitglied_funktionenMinOrderByAggregateInput = {
    id?: SortOrder
    mitglied_id?: SortOrder
    funktion_id?: SortOrder
    typ?: SortOrder
  }

  export type mitglied_funktionenSumOrderByAggregateInput = {
    id?: SortOrder
    mitglied_id?: SortOrder
    funktion_id?: SortOrder
  }

  export type Enummitglied_funktionen_typWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.mitglied_funktionen_typ | Enummitglied_funktionen_typFieldRefInput<$PrismaModel>
    in?: $Enums.mitglied_funktionen_typ[]
    notIn?: $Enums.mitglied_funktionen_typ[]
    not?: NestedEnummitglied_funktionen_typWithAggregatesFilter<$PrismaModel> | $Enums.mitglied_funktionen_typ
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummitglied_funktionen_typFilter<$PrismaModel>
    _max?: NestedEnummitglied_funktionen_typFilter<$PrismaModel>
  }

  export type Enummitglied_login_tyFilter<$PrismaModel = never> = {
    equals?: $Enums.mitglied_login_ty | Enummitglied_login_tyFieldRefInput<$PrismaModel>
    in?: $Enums.mitglied_login_ty[]
    notIn?: $Enums.mitglied_login_ty[]
    not?: NestedEnummitglied_login_tyFilter<$PrismaModel> | $Enums.mitglied_login_ty
  }

  export type mitglied_loginCountOrderByAggregateInput = {
    id?: SortOrder
    benutzer_id?: SortOrder
    mitglied_id?: SortOrder
    ty?: SortOrder
  }

  export type mitglied_loginAvgOrderByAggregateInput = {
    id?: SortOrder
    benutzer_id?: SortOrder
    mitglied_id?: SortOrder
  }

  export type mitglied_loginMaxOrderByAggregateInput = {
    id?: SortOrder
    benutzer_id?: SortOrder
    mitglied_id?: SortOrder
    ty?: SortOrder
  }

  export type mitglied_loginMinOrderByAggregateInput = {
    id?: SortOrder
    benutzer_id?: SortOrder
    mitglied_id?: SortOrder
    ty?: SortOrder
  }

  export type mitglied_loginSumOrderByAggregateInput = {
    id?: SortOrder
    benutzer_id?: SortOrder
    mitglied_id?: SortOrder
  }

  export type Enummitglied_login_tyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.mitglied_login_ty | Enummitglied_login_tyFieldRefInput<$PrismaModel>
    in?: $Enums.mitglied_login_ty[]
    notIn?: $Enums.mitglied_login_ty[]
    not?: NestedEnummitglied_login_tyWithAggregatesFilter<$PrismaModel> | $Enums.mitglied_login_ty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummitglied_login_tyFilter<$PrismaModel>
    _max?: NestedEnummitglied_login_tyFilter<$PrismaModel>
  }

  export type Ff_mitgliedListRelationFilter = {
    every?: ff_mitgliedWhereInput
    some?: ff_mitgliedWhereInput
    none?: ff_mitgliedWhereInput
  }

  export type Jf_mitgliedListRelationFilter = {
    every?: jf_mitgliedWhereInput
    some?: jf_mitgliedWhereInput
    none?: jf_mitgliedWhereInput
  }

  export type ff_mitgliedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type jf_mitgliedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type personOrderByRelevanceInput = {
    fields: personOrderByRelevanceFieldEnum | personOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type personCountOrderByAggregateInput = {
    id?: SortOrder
    vorname?: SortOrder
    name?: SortOrder
    geburtsdatum?: SortOrder
    email?: SortOrder
  }

  export type personAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type personMaxOrderByAggregateInput = {
    id?: SortOrder
    vorname?: SortOrder
    name?: SortOrder
    geburtsdatum?: SortOrder
    email?: SortOrder
  }

  export type personMinOrderByAggregateInput = {
    id?: SortOrder
    vorname?: SortOrder
    name?: SortOrder
    geburtsdatum?: SortOrder
    email?: SortOrder
  }

  export type personSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumteilnahme_typFilter<$PrismaModel = never> = {
    equals?: $Enums.teilnahme_typ | Enumteilnahme_typFieldRefInput<$PrismaModel>
    in?: $Enums.teilnahme_typ[]
    notIn?: $Enums.teilnahme_typ[]
    not?: NestedEnumteilnahme_typFilter<$PrismaModel> | $Enums.teilnahme_typ
  }

  export type teilnahmeCountOrderByAggregateInput = {
    id?: SortOrder
    mitglied_id?: SortOrder
    veranstaltung_id?: SortOrder
    typ?: SortOrder
  }

  export type teilnahmeAvgOrderByAggregateInput = {
    id?: SortOrder
    mitglied_id?: SortOrder
    veranstaltung_id?: SortOrder
  }

  export type teilnahmeMaxOrderByAggregateInput = {
    id?: SortOrder
    mitglied_id?: SortOrder
    veranstaltung_id?: SortOrder
    typ?: SortOrder
  }

  export type teilnahmeMinOrderByAggregateInput = {
    id?: SortOrder
    mitglied_id?: SortOrder
    veranstaltung_id?: SortOrder
    typ?: SortOrder
  }

  export type teilnahmeSumOrderByAggregateInput = {
    id?: SortOrder
    mitglied_id?: SortOrder
    veranstaltung_id?: SortOrder
  }

  export type Enumteilnahme_typWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.teilnahme_typ | Enumteilnahme_typFieldRefInput<$PrismaModel>
    in?: $Enums.teilnahme_typ[]
    notIn?: $Enums.teilnahme_typ[]
    not?: NestedEnumteilnahme_typWithAggregatesFilter<$PrismaModel> | $Enums.teilnahme_typ
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumteilnahme_typFilter<$PrismaModel>
    _max?: NestedEnumteilnahme_typFilter<$PrismaModel>
  }

  export type uebungsabendOrderByRelevanceInput = {
    fields: uebungsabendOrderByRelevanceFieldEnum | uebungsabendOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type uebungsabendCountOrderByAggregateInput = {
    id?: SortOrder
    datum?: SortOrder
    thema?: SortOrder
  }

  export type uebungsabendAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type uebungsabendMaxOrderByAggregateInput = {
    id?: SortOrder
    datum?: SortOrder
    thema?: SortOrder
  }

  export type uebungsabendMinOrderByAggregateInput = {
    id?: SortOrder
    datum?: SortOrder
    thema?: SortOrder
  }

  export type uebungsabendSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumeinsatz_artFieldUpdateOperationsInput = {
    set?: $Enums.einsatz_art
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type personCreateNestedOneWithoutFf_mitgliedInput = {
    create?: XOR<personCreateWithoutFf_mitgliedInput, personUncheckedCreateWithoutFf_mitgliedInput>
    connectOrCreate?: personCreateOrConnectWithoutFf_mitgliedInput
    connect?: personWhereUniqueInput
  }

  export type mitglied_funktionenCreateNestedManyWithoutFf_mitgliedInput = {
    create?: XOR<mitglied_funktionenCreateWithoutFf_mitgliedInput, mitglied_funktionenUncheckedCreateWithoutFf_mitgliedInput> | mitglied_funktionenCreateWithoutFf_mitgliedInput[] | mitglied_funktionenUncheckedCreateWithoutFf_mitgliedInput[]
    connectOrCreate?: mitglied_funktionenCreateOrConnectWithoutFf_mitgliedInput | mitglied_funktionenCreateOrConnectWithoutFf_mitgliedInput[]
    createMany?: mitglied_funktionenCreateManyFf_mitgliedInputEnvelope
    connect?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
  }

  export type teilnahmeCreateNestedManyWithoutFf_mitgliedInput = {
    create?: XOR<teilnahmeCreateWithoutFf_mitgliedInput, teilnahmeUncheckedCreateWithoutFf_mitgliedInput> | teilnahmeCreateWithoutFf_mitgliedInput[] | teilnahmeUncheckedCreateWithoutFf_mitgliedInput[]
    connectOrCreate?: teilnahmeCreateOrConnectWithoutFf_mitgliedInput | teilnahmeCreateOrConnectWithoutFf_mitgliedInput[]
    createMany?: teilnahmeCreateManyFf_mitgliedInputEnvelope
    connect?: teilnahmeWhereUniqueInput | teilnahmeWhereUniqueInput[]
  }

  export type mitglied_funktionenUncheckedCreateNestedManyWithoutFf_mitgliedInput = {
    create?: XOR<mitglied_funktionenCreateWithoutFf_mitgliedInput, mitglied_funktionenUncheckedCreateWithoutFf_mitgliedInput> | mitglied_funktionenCreateWithoutFf_mitgliedInput[] | mitglied_funktionenUncheckedCreateWithoutFf_mitgliedInput[]
    connectOrCreate?: mitglied_funktionenCreateOrConnectWithoutFf_mitgliedInput | mitglied_funktionenCreateOrConnectWithoutFf_mitgliedInput[]
    createMany?: mitglied_funktionenCreateManyFf_mitgliedInputEnvelope
    connect?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
  }

  export type teilnahmeUncheckedCreateNestedManyWithoutFf_mitgliedInput = {
    create?: XOR<teilnahmeCreateWithoutFf_mitgliedInput, teilnahmeUncheckedCreateWithoutFf_mitgliedInput> | teilnahmeCreateWithoutFf_mitgliedInput[] | teilnahmeUncheckedCreateWithoutFf_mitgliedInput[]
    connectOrCreate?: teilnahmeCreateOrConnectWithoutFf_mitgliedInput | teilnahmeCreateOrConnectWithoutFf_mitgliedInput[]
    createMany?: teilnahmeCreateManyFf_mitgliedInputEnvelope
    connect?: teilnahmeWhereUniqueInput | teilnahmeWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Enumff_mitglied_statusFieldUpdateOperationsInput = {
    set?: $Enums.ff_mitglied_status
  }

  export type personUpdateOneRequiredWithoutFf_mitgliedNestedInput = {
    create?: XOR<personCreateWithoutFf_mitgliedInput, personUncheckedCreateWithoutFf_mitgliedInput>
    connectOrCreate?: personCreateOrConnectWithoutFf_mitgliedInput
    upsert?: personUpsertWithoutFf_mitgliedInput
    connect?: personWhereUniqueInput
    update?: XOR<XOR<personUpdateToOneWithWhereWithoutFf_mitgliedInput, personUpdateWithoutFf_mitgliedInput>, personUncheckedUpdateWithoutFf_mitgliedInput>
  }

  export type mitglied_funktionenUpdateManyWithoutFf_mitgliedNestedInput = {
    create?: XOR<mitglied_funktionenCreateWithoutFf_mitgliedInput, mitglied_funktionenUncheckedCreateWithoutFf_mitgliedInput> | mitglied_funktionenCreateWithoutFf_mitgliedInput[] | mitglied_funktionenUncheckedCreateWithoutFf_mitgliedInput[]
    connectOrCreate?: mitglied_funktionenCreateOrConnectWithoutFf_mitgliedInput | mitglied_funktionenCreateOrConnectWithoutFf_mitgliedInput[]
    upsert?: mitglied_funktionenUpsertWithWhereUniqueWithoutFf_mitgliedInput | mitglied_funktionenUpsertWithWhereUniqueWithoutFf_mitgliedInput[]
    createMany?: mitglied_funktionenCreateManyFf_mitgliedInputEnvelope
    set?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    disconnect?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    delete?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    connect?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    update?: mitglied_funktionenUpdateWithWhereUniqueWithoutFf_mitgliedInput | mitglied_funktionenUpdateWithWhereUniqueWithoutFf_mitgliedInput[]
    updateMany?: mitglied_funktionenUpdateManyWithWhereWithoutFf_mitgliedInput | mitglied_funktionenUpdateManyWithWhereWithoutFf_mitgliedInput[]
    deleteMany?: mitglied_funktionenScalarWhereInput | mitglied_funktionenScalarWhereInput[]
  }

  export type teilnahmeUpdateManyWithoutFf_mitgliedNestedInput = {
    create?: XOR<teilnahmeCreateWithoutFf_mitgliedInput, teilnahmeUncheckedCreateWithoutFf_mitgliedInput> | teilnahmeCreateWithoutFf_mitgliedInput[] | teilnahmeUncheckedCreateWithoutFf_mitgliedInput[]
    connectOrCreate?: teilnahmeCreateOrConnectWithoutFf_mitgliedInput | teilnahmeCreateOrConnectWithoutFf_mitgliedInput[]
    upsert?: teilnahmeUpsertWithWhereUniqueWithoutFf_mitgliedInput | teilnahmeUpsertWithWhereUniqueWithoutFf_mitgliedInput[]
    createMany?: teilnahmeCreateManyFf_mitgliedInputEnvelope
    set?: teilnahmeWhereUniqueInput | teilnahmeWhereUniqueInput[]
    disconnect?: teilnahmeWhereUniqueInput | teilnahmeWhereUniqueInput[]
    delete?: teilnahmeWhereUniqueInput | teilnahmeWhereUniqueInput[]
    connect?: teilnahmeWhereUniqueInput | teilnahmeWhereUniqueInput[]
    update?: teilnahmeUpdateWithWhereUniqueWithoutFf_mitgliedInput | teilnahmeUpdateWithWhereUniqueWithoutFf_mitgliedInput[]
    updateMany?: teilnahmeUpdateManyWithWhereWithoutFf_mitgliedInput | teilnahmeUpdateManyWithWhereWithoutFf_mitgliedInput[]
    deleteMany?: teilnahmeScalarWhereInput | teilnahmeScalarWhereInput[]
  }

  export type mitglied_funktionenUncheckedUpdateManyWithoutFf_mitgliedNestedInput = {
    create?: XOR<mitglied_funktionenCreateWithoutFf_mitgliedInput, mitglied_funktionenUncheckedCreateWithoutFf_mitgliedInput> | mitglied_funktionenCreateWithoutFf_mitgliedInput[] | mitglied_funktionenUncheckedCreateWithoutFf_mitgliedInput[]
    connectOrCreate?: mitglied_funktionenCreateOrConnectWithoutFf_mitgliedInput | mitglied_funktionenCreateOrConnectWithoutFf_mitgliedInput[]
    upsert?: mitglied_funktionenUpsertWithWhereUniqueWithoutFf_mitgliedInput | mitglied_funktionenUpsertWithWhereUniqueWithoutFf_mitgliedInput[]
    createMany?: mitglied_funktionenCreateManyFf_mitgliedInputEnvelope
    set?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    disconnect?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    delete?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    connect?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    update?: mitglied_funktionenUpdateWithWhereUniqueWithoutFf_mitgliedInput | mitglied_funktionenUpdateWithWhereUniqueWithoutFf_mitgliedInput[]
    updateMany?: mitglied_funktionenUpdateManyWithWhereWithoutFf_mitgliedInput | mitglied_funktionenUpdateManyWithWhereWithoutFf_mitgliedInput[]
    deleteMany?: mitglied_funktionenScalarWhereInput | mitglied_funktionenScalarWhereInput[]
  }

  export type teilnahmeUncheckedUpdateManyWithoutFf_mitgliedNestedInput = {
    create?: XOR<teilnahmeCreateWithoutFf_mitgliedInput, teilnahmeUncheckedCreateWithoutFf_mitgliedInput> | teilnahmeCreateWithoutFf_mitgliedInput[] | teilnahmeUncheckedCreateWithoutFf_mitgliedInput[]
    connectOrCreate?: teilnahmeCreateOrConnectWithoutFf_mitgliedInput | teilnahmeCreateOrConnectWithoutFf_mitgliedInput[]
    upsert?: teilnahmeUpsertWithWhereUniqueWithoutFf_mitgliedInput | teilnahmeUpsertWithWhereUniqueWithoutFf_mitgliedInput[]
    createMany?: teilnahmeCreateManyFf_mitgliedInputEnvelope
    set?: teilnahmeWhereUniqueInput | teilnahmeWhereUniqueInput[]
    disconnect?: teilnahmeWhereUniqueInput | teilnahmeWhereUniqueInput[]
    delete?: teilnahmeWhereUniqueInput | teilnahmeWhereUniqueInput[]
    connect?: teilnahmeWhereUniqueInput | teilnahmeWhereUniqueInput[]
    update?: teilnahmeUpdateWithWhereUniqueWithoutFf_mitgliedInput | teilnahmeUpdateWithWhereUniqueWithoutFf_mitgliedInput[]
    updateMany?: teilnahmeUpdateManyWithWhereWithoutFf_mitgliedInput | teilnahmeUpdateManyWithWhereWithoutFf_mitgliedInput[]
    deleteMany?: teilnahmeScalarWhereInput | teilnahmeScalarWhereInput[]
  }

  export type mitglied_funktionenCreateNestedManyWithoutFunktion_ffInput = {
    create?: XOR<mitglied_funktionenCreateWithoutFunktion_ffInput, mitglied_funktionenUncheckedCreateWithoutFunktion_ffInput> | mitglied_funktionenCreateWithoutFunktion_ffInput[] | mitglied_funktionenUncheckedCreateWithoutFunktion_ffInput[]
    connectOrCreate?: mitglied_funktionenCreateOrConnectWithoutFunktion_ffInput | mitglied_funktionenCreateOrConnectWithoutFunktion_ffInput[]
    createMany?: mitglied_funktionenCreateManyFunktion_ffInputEnvelope
    connect?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
  }

  export type mitglied_funktionenUncheckedCreateNestedManyWithoutFunktion_ffInput = {
    create?: XOR<mitglied_funktionenCreateWithoutFunktion_ffInput, mitglied_funktionenUncheckedCreateWithoutFunktion_ffInput> | mitglied_funktionenCreateWithoutFunktion_ffInput[] | mitglied_funktionenUncheckedCreateWithoutFunktion_ffInput[]
    connectOrCreate?: mitglied_funktionenCreateOrConnectWithoutFunktion_ffInput | mitglied_funktionenCreateOrConnectWithoutFunktion_ffInput[]
    createMany?: mitglied_funktionenCreateManyFunktion_ffInputEnvelope
    connect?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type mitglied_funktionenUpdateManyWithoutFunktion_ffNestedInput = {
    create?: XOR<mitglied_funktionenCreateWithoutFunktion_ffInput, mitglied_funktionenUncheckedCreateWithoutFunktion_ffInput> | mitglied_funktionenCreateWithoutFunktion_ffInput[] | mitglied_funktionenUncheckedCreateWithoutFunktion_ffInput[]
    connectOrCreate?: mitglied_funktionenCreateOrConnectWithoutFunktion_ffInput | mitglied_funktionenCreateOrConnectWithoutFunktion_ffInput[]
    upsert?: mitglied_funktionenUpsertWithWhereUniqueWithoutFunktion_ffInput | mitglied_funktionenUpsertWithWhereUniqueWithoutFunktion_ffInput[]
    createMany?: mitglied_funktionenCreateManyFunktion_ffInputEnvelope
    set?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    disconnect?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    delete?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    connect?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    update?: mitglied_funktionenUpdateWithWhereUniqueWithoutFunktion_ffInput | mitglied_funktionenUpdateWithWhereUniqueWithoutFunktion_ffInput[]
    updateMany?: mitglied_funktionenUpdateManyWithWhereWithoutFunktion_ffInput | mitglied_funktionenUpdateManyWithWhereWithoutFunktion_ffInput[]
    deleteMany?: mitglied_funktionenScalarWhereInput | mitglied_funktionenScalarWhereInput[]
  }

  export type mitglied_funktionenUncheckedUpdateManyWithoutFunktion_ffNestedInput = {
    create?: XOR<mitglied_funktionenCreateWithoutFunktion_ffInput, mitglied_funktionenUncheckedCreateWithoutFunktion_ffInput> | mitglied_funktionenCreateWithoutFunktion_ffInput[] | mitglied_funktionenUncheckedCreateWithoutFunktion_ffInput[]
    connectOrCreate?: mitglied_funktionenCreateOrConnectWithoutFunktion_ffInput | mitglied_funktionenCreateOrConnectWithoutFunktion_ffInput[]
    upsert?: mitglied_funktionenUpsertWithWhereUniqueWithoutFunktion_ffInput | mitglied_funktionenUpsertWithWhereUniqueWithoutFunktion_ffInput[]
    createMany?: mitglied_funktionenCreateManyFunktion_ffInputEnvelope
    set?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    disconnect?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    delete?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    connect?: mitglied_funktionenWhereUniqueInput | mitglied_funktionenWhereUniqueInput[]
    update?: mitglied_funktionenUpdateWithWhereUniqueWithoutFunktion_ffInput | mitglied_funktionenUpdateWithWhereUniqueWithoutFunktion_ffInput[]
    updateMany?: mitglied_funktionenUpdateManyWithWhereWithoutFunktion_ffInput | mitglied_funktionenUpdateManyWithWhereWithoutFunktion_ffInput[]
    deleteMany?: mitglied_funktionenScalarWhereInput | mitglied_funktionenScalarWhereInput[]
  }

  export type jf_mitgliedCreateNestedOneWithoutJf_erziehungsberechtigterInput = {
    create?: XOR<jf_mitgliedCreateWithoutJf_erziehungsberechtigterInput, jf_mitgliedUncheckedCreateWithoutJf_erziehungsberechtigterInput>
    connectOrCreate?: jf_mitgliedCreateOrConnectWithoutJf_erziehungsberechtigterInput
    connect?: jf_mitgliedWhereUniqueInput
  }

  export type personCreateNestedOneWithoutJf_erziehungsberechtigterInput = {
    create?: XOR<personCreateWithoutJf_erziehungsberechtigterInput, personUncheckedCreateWithoutJf_erziehungsberechtigterInput>
    connectOrCreate?: personCreateOrConnectWithoutJf_erziehungsberechtigterInput
    connect?: personWhereUniqueInput
  }

  export type jf_mitgliedUpdateOneRequiredWithoutJf_erziehungsberechtigterNestedInput = {
    create?: XOR<jf_mitgliedCreateWithoutJf_erziehungsberechtigterInput, jf_mitgliedUncheckedCreateWithoutJf_erziehungsberechtigterInput>
    connectOrCreate?: jf_mitgliedCreateOrConnectWithoutJf_erziehungsberechtigterInput
    upsert?: jf_mitgliedUpsertWithoutJf_erziehungsberechtigterInput
    connect?: jf_mitgliedWhereUniqueInput
    update?: XOR<XOR<jf_mitgliedUpdateToOneWithWhereWithoutJf_erziehungsberechtigterInput, jf_mitgliedUpdateWithoutJf_erziehungsberechtigterInput>, jf_mitgliedUncheckedUpdateWithoutJf_erziehungsberechtigterInput>
  }

  export type personUpdateOneRequiredWithoutJf_erziehungsberechtigterNestedInput = {
    create?: XOR<personCreateWithoutJf_erziehungsberechtigterInput, personUncheckedCreateWithoutJf_erziehungsberechtigterInput>
    connectOrCreate?: personCreateOrConnectWithoutJf_erziehungsberechtigterInput
    upsert?: personUpsertWithoutJf_erziehungsberechtigterInput
    connect?: personWhereUniqueInput
    update?: XOR<XOR<personUpdateToOneWithWhereWithoutJf_erziehungsberechtigterInput, personUpdateWithoutJf_erziehungsberechtigterInput>, personUncheckedUpdateWithoutJf_erziehungsberechtigterInput>
  }

  export type jf_erziehungsberechtigterCreateNestedManyWithoutJf_mitgliedInput = {
    create?: XOR<jf_erziehungsberechtigterCreateWithoutJf_mitgliedInput, jf_erziehungsberechtigterUncheckedCreateWithoutJf_mitgliedInput> | jf_erziehungsberechtigterCreateWithoutJf_mitgliedInput[] | jf_erziehungsberechtigterUncheckedCreateWithoutJf_mitgliedInput[]
    connectOrCreate?: jf_erziehungsberechtigterCreateOrConnectWithoutJf_mitgliedInput | jf_erziehungsberechtigterCreateOrConnectWithoutJf_mitgliedInput[]
    createMany?: jf_erziehungsberechtigterCreateManyJf_mitgliedInputEnvelope
    connect?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
  }

  export type personCreateNestedOneWithoutJf_mitgliedInput = {
    create?: XOR<personCreateWithoutJf_mitgliedInput, personUncheckedCreateWithoutJf_mitgliedInput>
    connectOrCreate?: personCreateOrConnectWithoutJf_mitgliedInput
    connect?: personWhereUniqueInput
  }

  export type jf_erziehungsberechtigterUncheckedCreateNestedManyWithoutJf_mitgliedInput = {
    create?: XOR<jf_erziehungsberechtigterCreateWithoutJf_mitgliedInput, jf_erziehungsberechtigterUncheckedCreateWithoutJf_mitgliedInput> | jf_erziehungsberechtigterCreateWithoutJf_mitgliedInput[] | jf_erziehungsberechtigterUncheckedCreateWithoutJf_mitgliedInput[]
    connectOrCreate?: jf_erziehungsberechtigterCreateOrConnectWithoutJf_mitgliedInput | jf_erziehungsberechtigterCreateOrConnectWithoutJf_mitgliedInput[]
    createMany?: jf_erziehungsberechtigterCreateManyJf_mitgliedInputEnvelope
    connect?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
  }

  export type Enumjf_mitglied_statusFieldUpdateOperationsInput = {
    set?: $Enums.jf_mitglied_status
  }

  export type jf_erziehungsberechtigterUpdateManyWithoutJf_mitgliedNestedInput = {
    create?: XOR<jf_erziehungsberechtigterCreateWithoutJf_mitgliedInput, jf_erziehungsberechtigterUncheckedCreateWithoutJf_mitgliedInput> | jf_erziehungsberechtigterCreateWithoutJf_mitgliedInput[] | jf_erziehungsberechtigterUncheckedCreateWithoutJf_mitgliedInput[]
    connectOrCreate?: jf_erziehungsberechtigterCreateOrConnectWithoutJf_mitgliedInput | jf_erziehungsberechtigterCreateOrConnectWithoutJf_mitgliedInput[]
    upsert?: jf_erziehungsberechtigterUpsertWithWhereUniqueWithoutJf_mitgliedInput | jf_erziehungsberechtigterUpsertWithWhereUniqueWithoutJf_mitgliedInput[]
    createMany?: jf_erziehungsberechtigterCreateManyJf_mitgliedInputEnvelope
    set?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    disconnect?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    delete?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    connect?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    update?: jf_erziehungsberechtigterUpdateWithWhereUniqueWithoutJf_mitgliedInput | jf_erziehungsberechtigterUpdateWithWhereUniqueWithoutJf_mitgliedInput[]
    updateMany?: jf_erziehungsberechtigterUpdateManyWithWhereWithoutJf_mitgliedInput | jf_erziehungsberechtigterUpdateManyWithWhereWithoutJf_mitgliedInput[]
    deleteMany?: jf_erziehungsberechtigterScalarWhereInput | jf_erziehungsberechtigterScalarWhereInput[]
  }

  export type personUpdateOneRequiredWithoutJf_mitgliedNestedInput = {
    create?: XOR<personCreateWithoutJf_mitgliedInput, personUncheckedCreateWithoutJf_mitgliedInput>
    connectOrCreate?: personCreateOrConnectWithoutJf_mitgliedInput
    upsert?: personUpsertWithoutJf_mitgliedInput
    connect?: personWhereUniqueInput
    update?: XOR<XOR<personUpdateToOneWithWhereWithoutJf_mitgliedInput, personUpdateWithoutJf_mitgliedInput>, personUncheckedUpdateWithoutJf_mitgliedInput>
  }

  export type jf_erziehungsberechtigterUncheckedUpdateManyWithoutJf_mitgliedNestedInput = {
    create?: XOR<jf_erziehungsberechtigterCreateWithoutJf_mitgliedInput, jf_erziehungsberechtigterUncheckedCreateWithoutJf_mitgliedInput> | jf_erziehungsberechtigterCreateWithoutJf_mitgliedInput[] | jf_erziehungsberechtigterUncheckedCreateWithoutJf_mitgliedInput[]
    connectOrCreate?: jf_erziehungsberechtigterCreateOrConnectWithoutJf_mitgliedInput | jf_erziehungsberechtigterCreateOrConnectWithoutJf_mitgliedInput[]
    upsert?: jf_erziehungsberechtigterUpsertWithWhereUniqueWithoutJf_mitgliedInput | jf_erziehungsberechtigterUpsertWithWhereUniqueWithoutJf_mitgliedInput[]
    createMany?: jf_erziehungsberechtigterCreateManyJf_mitgliedInputEnvelope
    set?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    disconnect?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    delete?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    connect?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    update?: jf_erziehungsberechtigterUpdateWithWhereUniqueWithoutJf_mitgliedInput | jf_erziehungsberechtigterUpdateWithWhereUniqueWithoutJf_mitgliedInput[]
    updateMany?: jf_erziehungsberechtigterUpdateManyWithWhereWithoutJf_mitgliedInput | jf_erziehungsberechtigterUpdateManyWithWhereWithoutJf_mitgliedInput[]
    deleteMany?: jf_erziehungsberechtigterScalarWhereInput | jf_erziehungsberechtigterScalarWhereInput[]
  }

  export type ff_mitgliedCreateNestedOneWithoutMitglied_funktionenInput = {
    create?: XOR<ff_mitgliedCreateWithoutMitglied_funktionenInput, ff_mitgliedUncheckedCreateWithoutMitglied_funktionenInput>
    connectOrCreate?: ff_mitgliedCreateOrConnectWithoutMitglied_funktionenInput
    connect?: ff_mitgliedWhereUniqueInput
  }

  export type funktion_ffCreateNestedOneWithoutMitglied_funktionenInput = {
    create?: XOR<funktion_ffCreateWithoutMitglied_funktionenInput, funktion_ffUncheckedCreateWithoutMitglied_funktionenInput>
    connectOrCreate?: funktion_ffCreateOrConnectWithoutMitglied_funktionenInput
    connect?: funktion_ffWhereUniqueInput
  }

  export type Enummitglied_funktionen_typFieldUpdateOperationsInput = {
    set?: $Enums.mitglied_funktionen_typ
  }

  export type ff_mitgliedUpdateOneRequiredWithoutMitglied_funktionenNestedInput = {
    create?: XOR<ff_mitgliedCreateWithoutMitglied_funktionenInput, ff_mitgliedUncheckedCreateWithoutMitglied_funktionenInput>
    connectOrCreate?: ff_mitgliedCreateOrConnectWithoutMitglied_funktionenInput
    upsert?: ff_mitgliedUpsertWithoutMitglied_funktionenInput
    connect?: ff_mitgliedWhereUniqueInput
    update?: XOR<XOR<ff_mitgliedUpdateToOneWithWhereWithoutMitglied_funktionenInput, ff_mitgliedUpdateWithoutMitglied_funktionenInput>, ff_mitgliedUncheckedUpdateWithoutMitglied_funktionenInput>
  }

  export type funktion_ffUpdateOneRequiredWithoutMitglied_funktionenNestedInput = {
    create?: XOR<funktion_ffCreateWithoutMitglied_funktionenInput, funktion_ffUncheckedCreateWithoutMitglied_funktionenInput>
    connectOrCreate?: funktion_ffCreateOrConnectWithoutMitglied_funktionenInput
    upsert?: funktion_ffUpsertWithoutMitglied_funktionenInput
    connect?: funktion_ffWhereUniqueInput
    update?: XOR<XOR<funktion_ffUpdateToOneWithWhereWithoutMitglied_funktionenInput, funktion_ffUpdateWithoutMitglied_funktionenInput>, funktion_ffUncheckedUpdateWithoutMitglied_funktionenInput>
  }

  export type Enummitglied_login_tyFieldUpdateOperationsInput = {
    set?: $Enums.mitglied_login_ty
  }

  export type ff_mitgliedCreateNestedManyWithoutPersonInput = {
    create?: XOR<ff_mitgliedCreateWithoutPersonInput, ff_mitgliedUncheckedCreateWithoutPersonInput> | ff_mitgliedCreateWithoutPersonInput[] | ff_mitgliedUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ff_mitgliedCreateOrConnectWithoutPersonInput | ff_mitgliedCreateOrConnectWithoutPersonInput[]
    createMany?: ff_mitgliedCreateManyPersonInputEnvelope
    connect?: ff_mitgliedWhereUniqueInput | ff_mitgliedWhereUniqueInput[]
  }

  export type jf_erziehungsberechtigterCreateNestedManyWithoutPersonInput = {
    create?: XOR<jf_erziehungsberechtigterCreateWithoutPersonInput, jf_erziehungsberechtigterUncheckedCreateWithoutPersonInput> | jf_erziehungsberechtigterCreateWithoutPersonInput[] | jf_erziehungsberechtigterUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: jf_erziehungsberechtigterCreateOrConnectWithoutPersonInput | jf_erziehungsberechtigterCreateOrConnectWithoutPersonInput[]
    createMany?: jf_erziehungsberechtigterCreateManyPersonInputEnvelope
    connect?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
  }

  export type jf_mitgliedCreateNestedManyWithoutPersonInput = {
    create?: XOR<jf_mitgliedCreateWithoutPersonInput, jf_mitgliedUncheckedCreateWithoutPersonInput> | jf_mitgliedCreateWithoutPersonInput[] | jf_mitgliedUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: jf_mitgliedCreateOrConnectWithoutPersonInput | jf_mitgliedCreateOrConnectWithoutPersonInput[]
    createMany?: jf_mitgliedCreateManyPersonInputEnvelope
    connect?: jf_mitgliedWhereUniqueInput | jf_mitgliedWhereUniqueInput[]
  }

  export type ff_mitgliedUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<ff_mitgliedCreateWithoutPersonInput, ff_mitgliedUncheckedCreateWithoutPersonInput> | ff_mitgliedCreateWithoutPersonInput[] | ff_mitgliedUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ff_mitgliedCreateOrConnectWithoutPersonInput | ff_mitgliedCreateOrConnectWithoutPersonInput[]
    createMany?: ff_mitgliedCreateManyPersonInputEnvelope
    connect?: ff_mitgliedWhereUniqueInput | ff_mitgliedWhereUniqueInput[]
  }

  export type jf_erziehungsberechtigterUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<jf_erziehungsberechtigterCreateWithoutPersonInput, jf_erziehungsberechtigterUncheckedCreateWithoutPersonInput> | jf_erziehungsberechtigterCreateWithoutPersonInput[] | jf_erziehungsberechtigterUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: jf_erziehungsberechtigterCreateOrConnectWithoutPersonInput | jf_erziehungsberechtigterCreateOrConnectWithoutPersonInput[]
    createMany?: jf_erziehungsberechtigterCreateManyPersonInputEnvelope
    connect?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
  }

  export type jf_mitgliedUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<jf_mitgliedCreateWithoutPersonInput, jf_mitgliedUncheckedCreateWithoutPersonInput> | jf_mitgliedCreateWithoutPersonInput[] | jf_mitgliedUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: jf_mitgliedCreateOrConnectWithoutPersonInput | jf_mitgliedCreateOrConnectWithoutPersonInput[]
    createMany?: jf_mitgliedCreateManyPersonInputEnvelope
    connect?: jf_mitgliedWhereUniqueInput | jf_mitgliedWhereUniqueInput[]
  }

  export type ff_mitgliedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<ff_mitgliedCreateWithoutPersonInput, ff_mitgliedUncheckedCreateWithoutPersonInput> | ff_mitgliedCreateWithoutPersonInput[] | ff_mitgliedUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ff_mitgliedCreateOrConnectWithoutPersonInput | ff_mitgliedCreateOrConnectWithoutPersonInput[]
    upsert?: ff_mitgliedUpsertWithWhereUniqueWithoutPersonInput | ff_mitgliedUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: ff_mitgliedCreateManyPersonInputEnvelope
    set?: ff_mitgliedWhereUniqueInput | ff_mitgliedWhereUniqueInput[]
    disconnect?: ff_mitgliedWhereUniqueInput | ff_mitgliedWhereUniqueInput[]
    delete?: ff_mitgliedWhereUniqueInput | ff_mitgliedWhereUniqueInput[]
    connect?: ff_mitgliedWhereUniqueInput | ff_mitgliedWhereUniqueInput[]
    update?: ff_mitgliedUpdateWithWhereUniqueWithoutPersonInput | ff_mitgliedUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: ff_mitgliedUpdateManyWithWhereWithoutPersonInput | ff_mitgliedUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: ff_mitgliedScalarWhereInput | ff_mitgliedScalarWhereInput[]
  }

  export type jf_erziehungsberechtigterUpdateManyWithoutPersonNestedInput = {
    create?: XOR<jf_erziehungsberechtigterCreateWithoutPersonInput, jf_erziehungsberechtigterUncheckedCreateWithoutPersonInput> | jf_erziehungsberechtigterCreateWithoutPersonInput[] | jf_erziehungsberechtigterUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: jf_erziehungsberechtigterCreateOrConnectWithoutPersonInput | jf_erziehungsberechtigterCreateOrConnectWithoutPersonInput[]
    upsert?: jf_erziehungsberechtigterUpsertWithWhereUniqueWithoutPersonInput | jf_erziehungsberechtigterUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: jf_erziehungsberechtigterCreateManyPersonInputEnvelope
    set?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    disconnect?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    delete?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    connect?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    update?: jf_erziehungsberechtigterUpdateWithWhereUniqueWithoutPersonInput | jf_erziehungsberechtigterUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: jf_erziehungsberechtigterUpdateManyWithWhereWithoutPersonInput | jf_erziehungsberechtigterUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: jf_erziehungsberechtigterScalarWhereInput | jf_erziehungsberechtigterScalarWhereInput[]
  }

  export type jf_mitgliedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<jf_mitgliedCreateWithoutPersonInput, jf_mitgliedUncheckedCreateWithoutPersonInput> | jf_mitgliedCreateWithoutPersonInput[] | jf_mitgliedUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: jf_mitgliedCreateOrConnectWithoutPersonInput | jf_mitgliedCreateOrConnectWithoutPersonInput[]
    upsert?: jf_mitgliedUpsertWithWhereUniqueWithoutPersonInput | jf_mitgliedUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: jf_mitgliedCreateManyPersonInputEnvelope
    set?: jf_mitgliedWhereUniqueInput | jf_mitgliedWhereUniqueInput[]
    disconnect?: jf_mitgliedWhereUniqueInput | jf_mitgliedWhereUniqueInput[]
    delete?: jf_mitgliedWhereUniqueInput | jf_mitgliedWhereUniqueInput[]
    connect?: jf_mitgliedWhereUniqueInput | jf_mitgliedWhereUniqueInput[]
    update?: jf_mitgliedUpdateWithWhereUniqueWithoutPersonInput | jf_mitgliedUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: jf_mitgliedUpdateManyWithWhereWithoutPersonInput | jf_mitgliedUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: jf_mitgliedScalarWhereInput | jf_mitgliedScalarWhereInput[]
  }

  export type ff_mitgliedUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<ff_mitgliedCreateWithoutPersonInput, ff_mitgliedUncheckedCreateWithoutPersonInput> | ff_mitgliedCreateWithoutPersonInput[] | ff_mitgliedUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ff_mitgliedCreateOrConnectWithoutPersonInput | ff_mitgliedCreateOrConnectWithoutPersonInput[]
    upsert?: ff_mitgliedUpsertWithWhereUniqueWithoutPersonInput | ff_mitgliedUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: ff_mitgliedCreateManyPersonInputEnvelope
    set?: ff_mitgliedWhereUniqueInput | ff_mitgliedWhereUniqueInput[]
    disconnect?: ff_mitgliedWhereUniqueInput | ff_mitgliedWhereUniqueInput[]
    delete?: ff_mitgliedWhereUniqueInput | ff_mitgliedWhereUniqueInput[]
    connect?: ff_mitgliedWhereUniqueInput | ff_mitgliedWhereUniqueInput[]
    update?: ff_mitgliedUpdateWithWhereUniqueWithoutPersonInput | ff_mitgliedUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: ff_mitgliedUpdateManyWithWhereWithoutPersonInput | ff_mitgliedUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: ff_mitgliedScalarWhereInput | ff_mitgliedScalarWhereInput[]
  }

  export type jf_erziehungsberechtigterUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<jf_erziehungsberechtigterCreateWithoutPersonInput, jf_erziehungsberechtigterUncheckedCreateWithoutPersonInput> | jf_erziehungsberechtigterCreateWithoutPersonInput[] | jf_erziehungsberechtigterUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: jf_erziehungsberechtigterCreateOrConnectWithoutPersonInput | jf_erziehungsberechtigterCreateOrConnectWithoutPersonInput[]
    upsert?: jf_erziehungsberechtigterUpsertWithWhereUniqueWithoutPersonInput | jf_erziehungsberechtigterUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: jf_erziehungsberechtigterCreateManyPersonInputEnvelope
    set?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    disconnect?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    delete?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    connect?: jf_erziehungsberechtigterWhereUniqueInput | jf_erziehungsberechtigterWhereUniqueInput[]
    update?: jf_erziehungsberechtigterUpdateWithWhereUniqueWithoutPersonInput | jf_erziehungsberechtigterUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: jf_erziehungsberechtigterUpdateManyWithWhereWithoutPersonInput | jf_erziehungsberechtigterUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: jf_erziehungsberechtigterScalarWhereInput | jf_erziehungsberechtigterScalarWhereInput[]
  }

  export type jf_mitgliedUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<jf_mitgliedCreateWithoutPersonInput, jf_mitgliedUncheckedCreateWithoutPersonInput> | jf_mitgliedCreateWithoutPersonInput[] | jf_mitgliedUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: jf_mitgliedCreateOrConnectWithoutPersonInput | jf_mitgliedCreateOrConnectWithoutPersonInput[]
    upsert?: jf_mitgliedUpsertWithWhereUniqueWithoutPersonInput | jf_mitgliedUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: jf_mitgliedCreateManyPersonInputEnvelope
    set?: jf_mitgliedWhereUniqueInput | jf_mitgliedWhereUniqueInput[]
    disconnect?: jf_mitgliedWhereUniqueInput | jf_mitgliedWhereUniqueInput[]
    delete?: jf_mitgliedWhereUniqueInput | jf_mitgliedWhereUniqueInput[]
    connect?: jf_mitgliedWhereUniqueInput | jf_mitgliedWhereUniqueInput[]
    update?: jf_mitgliedUpdateWithWhereUniqueWithoutPersonInput | jf_mitgliedUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: jf_mitgliedUpdateManyWithWhereWithoutPersonInput | jf_mitgliedUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: jf_mitgliedScalarWhereInput | jf_mitgliedScalarWhereInput[]
  }

  export type ff_mitgliedCreateNestedOneWithoutTeilnahmeInput = {
    create?: XOR<ff_mitgliedCreateWithoutTeilnahmeInput, ff_mitgliedUncheckedCreateWithoutTeilnahmeInput>
    connectOrCreate?: ff_mitgliedCreateOrConnectWithoutTeilnahmeInput
    connect?: ff_mitgliedWhereUniqueInput
  }

  export type Enumteilnahme_typFieldUpdateOperationsInput = {
    set?: $Enums.teilnahme_typ
  }

  export type ff_mitgliedUpdateOneRequiredWithoutTeilnahmeNestedInput = {
    create?: XOR<ff_mitgliedCreateWithoutTeilnahmeInput, ff_mitgliedUncheckedCreateWithoutTeilnahmeInput>
    connectOrCreate?: ff_mitgliedCreateOrConnectWithoutTeilnahmeInput
    upsert?: ff_mitgliedUpsertWithoutTeilnahmeInput
    connect?: ff_mitgliedWhereUniqueInput
    update?: XOR<XOR<ff_mitgliedUpdateToOneWithWhereWithoutTeilnahmeInput, ff_mitgliedUpdateWithoutTeilnahmeInput>, ff_mitgliedUncheckedUpdateWithoutTeilnahmeInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumeinsatz_artFilter<$PrismaModel = never> = {
    equals?: $Enums.einsatz_art | Enumeinsatz_artFieldRefInput<$PrismaModel>
    in?: $Enums.einsatz_art[]
    notIn?: $Enums.einsatz_art[]
    not?: NestedEnumeinsatz_artFilter<$PrismaModel> | $Enums.einsatz_art
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumeinsatz_artWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.einsatz_art | Enumeinsatz_artFieldRefInput<$PrismaModel>
    in?: $Enums.einsatz_art[]
    notIn?: $Enums.einsatz_art[]
    not?: NestedEnumeinsatz_artWithAggregatesFilter<$PrismaModel> | $Enums.einsatz_art
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumeinsatz_artFilter<$PrismaModel>
    _max?: NestedEnumeinsatz_artFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumff_mitglied_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.ff_mitglied_status | Enumff_mitglied_statusFieldRefInput<$PrismaModel>
    in?: $Enums.ff_mitglied_status[]
    notIn?: $Enums.ff_mitglied_status[]
    not?: NestedEnumff_mitglied_statusFilter<$PrismaModel> | $Enums.ff_mitglied_status
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumff_mitglied_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ff_mitglied_status | Enumff_mitglied_statusFieldRefInput<$PrismaModel>
    in?: $Enums.ff_mitglied_status[]
    notIn?: $Enums.ff_mitglied_status[]
    not?: NestedEnumff_mitglied_statusWithAggregatesFilter<$PrismaModel> | $Enums.ff_mitglied_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumff_mitglied_statusFilter<$PrismaModel>
    _max?: NestedEnumff_mitglied_statusFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumjf_mitglied_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.jf_mitglied_status | Enumjf_mitglied_statusFieldRefInput<$PrismaModel>
    in?: $Enums.jf_mitglied_status[]
    notIn?: $Enums.jf_mitglied_status[]
    not?: NestedEnumjf_mitglied_statusFilter<$PrismaModel> | $Enums.jf_mitglied_status
  }

  export type NestedEnumjf_mitglied_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.jf_mitglied_status | Enumjf_mitglied_statusFieldRefInput<$PrismaModel>
    in?: $Enums.jf_mitglied_status[]
    notIn?: $Enums.jf_mitglied_status[]
    not?: NestedEnumjf_mitglied_statusWithAggregatesFilter<$PrismaModel> | $Enums.jf_mitglied_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumjf_mitglied_statusFilter<$PrismaModel>
    _max?: NestedEnumjf_mitglied_statusFilter<$PrismaModel>
  }

  export type NestedEnummitglied_funktionen_typFilter<$PrismaModel = never> = {
    equals?: $Enums.mitglied_funktionen_typ | Enummitglied_funktionen_typFieldRefInput<$PrismaModel>
    in?: $Enums.mitglied_funktionen_typ[]
    notIn?: $Enums.mitglied_funktionen_typ[]
    not?: NestedEnummitglied_funktionen_typFilter<$PrismaModel> | $Enums.mitglied_funktionen_typ
  }

  export type NestedEnummitglied_funktionen_typWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.mitglied_funktionen_typ | Enummitglied_funktionen_typFieldRefInput<$PrismaModel>
    in?: $Enums.mitglied_funktionen_typ[]
    notIn?: $Enums.mitglied_funktionen_typ[]
    not?: NestedEnummitglied_funktionen_typWithAggregatesFilter<$PrismaModel> | $Enums.mitglied_funktionen_typ
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummitglied_funktionen_typFilter<$PrismaModel>
    _max?: NestedEnummitglied_funktionen_typFilter<$PrismaModel>
  }

  export type NestedEnummitglied_login_tyFilter<$PrismaModel = never> = {
    equals?: $Enums.mitglied_login_ty | Enummitglied_login_tyFieldRefInput<$PrismaModel>
    in?: $Enums.mitglied_login_ty[]
    notIn?: $Enums.mitglied_login_ty[]
    not?: NestedEnummitglied_login_tyFilter<$PrismaModel> | $Enums.mitglied_login_ty
  }

  export type NestedEnummitglied_login_tyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.mitglied_login_ty | Enummitglied_login_tyFieldRefInput<$PrismaModel>
    in?: $Enums.mitglied_login_ty[]
    notIn?: $Enums.mitglied_login_ty[]
    not?: NestedEnummitglied_login_tyWithAggregatesFilter<$PrismaModel> | $Enums.mitglied_login_ty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummitglied_login_tyFilter<$PrismaModel>
    _max?: NestedEnummitglied_login_tyFilter<$PrismaModel>
  }

  export type NestedEnumteilnahme_typFilter<$PrismaModel = never> = {
    equals?: $Enums.teilnahme_typ | Enumteilnahme_typFieldRefInput<$PrismaModel>
    in?: $Enums.teilnahme_typ[]
    notIn?: $Enums.teilnahme_typ[]
    not?: NestedEnumteilnahme_typFilter<$PrismaModel> | $Enums.teilnahme_typ
  }

  export type NestedEnumteilnahme_typWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.teilnahme_typ | Enumteilnahme_typFieldRefInput<$PrismaModel>
    in?: $Enums.teilnahme_typ[]
    notIn?: $Enums.teilnahme_typ[]
    not?: NestedEnumteilnahme_typWithAggregatesFilter<$PrismaModel> | $Enums.teilnahme_typ
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumteilnahme_typFilter<$PrismaModel>
    _max?: NestedEnumteilnahme_typFilter<$PrismaModel>
  }

  export type personCreateWithoutFf_mitgliedInput = {
    vorname: string
    name: string
    geburtsdatum?: Date | string | null
    email: string
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterCreateNestedManyWithoutPersonInput
    jf_mitglied?: jf_mitgliedCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateWithoutFf_mitgliedInput = {
    id?: number
    vorname: string
    name: string
    geburtsdatum?: Date | string | null
    email: string
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUncheckedCreateNestedManyWithoutPersonInput
    jf_mitglied?: jf_mitgliedUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personCreateOrConnectWithoutFf_mitgliedInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutFf_mitgliedInput, personUncheckedCreateWithoutFf_mitgliedInput>
  }

  export type mitglied_funktionenCreateWithoutFf_mitgliedInput = {
    typ: $Enums.mitglied_funktionen_typ
    funktion_ff: funktion_ffCreateNestedOneWithoutMitglied_funktionenInput
  }

  export type mitglied_funktionenUncheckedCreateWithoutFf_mitgliedInput = {
    id?: number
    funktion_id: number
    typ: $Enums.mitglied_funktionen_typ
  }

  export type mitglied_funktionenCreateOrConnectWithoutFf_mitgliedInput = {
    where: mitglied_funktionenWhereUniqueInput
    create: XOR<mitglied_funktionenCreateWithoutFf_mitgliedInput, mitglied_funktionenUncheckedCreateWithoutFf_mitgliedInput>
  }

  export type mitglied_funktionenCreateManyFf_mitgliedInputEnvelope = {
    data: mitglied_funktionenCreateManyFf_mitgliedInput | mitglied_funktionenCreateManyFf_mitgliedInput[]
    skipDuplicates?: boolean
  }

  export type teilnahmeCreateWithoutFf_mitgliedInput = {
    veranstaltung_id: number
    typ: $Enums.teilnahme_typ
  }

  export type teilnahmeUncheckedCreateWithoutFf_mitgliedInput = {
    id?: number
    veranstaltung_id: number
    typ: $Enums.teilnahme_typ
  }

  export type teilnahmeCreateOrConnectWithoutFf_mitgliedInput = {
    where: teilnahmeWhereUniqueInput
    create: XOR<teilnahmeCreateWithoutFf_mitgliedInput, teilnahmeUncheckedCreateWithoutFf_mitgliedInput>
  }

  export type teilnahmeCreateManyFf_mitgliedInputEnvelope = {
    data: teilnahmeCreateManyFf_mitgliedInput | teilnahmeCreateManyFf_mitgliedInput[]
    skipDuplicates?: boolean
  }

  export type personUpsertWithoutFf_mitgliedInput = {
    update: XOR<personUpdateWithoutFf_mitgliedInput, personUncheckedUpdateWithoutFf_mitgliedInput>
    create: XOR<personCreateWithoutFf_mitgliedInput, personUncheckedCreateWithoutFf_mitgliedInput>
    where?: personWhereInput
  }

  export type personUpdateToOneWithWhereWithoutFf_mitgliedInput = {
    where?: personWhereInput
    data: XOR<personUpdateWithoutFf_mitgliedInput, personUncheckedUpdateWithoutFf_mitgliedInput>
  }

  export type personUpdateWithoutFf_mitgliedInput = {
    vorname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    geburtsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUpdateManyWithoutPersonNestedInput
    jf_mitglied?: jf_mitgliedUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateWithoutFf_mitgliedInput = {
    id?: IntFieldUpdateOperationsInput | number
    vorname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    geburtsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUncheckedUpdateManyWithoutPersonNestedInput
    jf_mitglied?: jf_mitgliedUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type mitglied_funktionenUpsertWithWhereUniqueWithoutFf_mitgliedInput = {
    where: mitglied_funktionenWhereUniqueInput
    update: XOR<mitglied_funktionenUpdateWithoutFf_mitgliedInput, mitglied_funktionenUncheckedUpdateWithoutFf_mitgliedInput>
    create: XOR<mitglied_funktionenCreateWithoutFf_mitgliedInput, mitglied_funktionenUncheckedCreateWithoutFf_mitgliedInput>
  }

  export type mitglied_funktionenUpdateWithWhereUniqueWithoutFf_mitgliedInput = {
    where: mitglied_funktionenWhereUniqueInput
    data: XOR<mitglied_funktionenUpdateWithoutFf_mitgliedInput, mitglied_funktionenUncheckedUpdateWithoutFf_mitgliedInput>
  }

  export type mitglied_funktionenUpdateManyWithWhereWithoutFf_mitgliedInput = {
    where: mitglied_funktionenScalarWhereInput
    data: XOR<mitglied_funktionenUpdateManyMutationInput, mitglied_funktionenUncheckedUpdateManyWithoutFf_mitgliedInput>
  }

  export type mitglied_funktionenScalarWhereInput = {
    AND?: mitglied_funktionenScalarWhereInput | mitglied_funktionenScalarWhereInput[]
    OR?: mitglied_funktionenScalarWhereInput[]
    NOT?: mitglied_funktionenScalarWhereInput | mitglied_funktionenScalarWhereInput[]
    id?: IntFilter<"mitglied_funktionen"> | number
    mitglied_id?: IntFilter<"mitglied_funktionen"> | number
    funktion_id?: IntFilter<"mitglied_funktionen"> | number
    typ?: Enummitglied_funktionen_typFilter<"mitglied_funktionen"> | $Enums.mitglied_funktionen_typ
  }

  export type teilnahmeUpsertWithWhereUniqueWithoutFf_mitgliedInput = {
    where: teilnahmeWhereUniqueInput
    update: XOR<teilnahmeUpdateWithoutFf_mitgliedInput, teilnahmeUncheckedUpdateWithoutFf_mitgliedInput>
    create: XOR<teilnahmeCreateWithoutFf_mitgliedInput, teilnahmeUncheckedCreateWithoutFf_mitgliedInput>
  }

  export type teilnahmeUpdateWithWhereUniqueWithoutFf_mitgliedInput = {
    where: teilnahmeWhereUniqueInput
    data: XOR<teilnahmeUpdateWithoutFf_mitgliedInput, teilnahmeUncheckedUpdateWithoutFf_mitgliedInput>
  }

  export type teilnahmeUpdateManyWithWhereWithoutFf_mitgliedInput = {
    where: teilnahmeScalarWhereInput
    data: XOR<teilnahmeUpdateManyMutationInput, teilnahmeUncheckedUpdateManyWithoutFf_mitgliedInput>
  }

  export type teilnahmeScalarWhereInput = {
    AND?: teilnahmeScalarWhereInput | teilnahmeScalarWhereInput[]
    OR?: teilnahmeScalarWhereInput[]
    NOT?: teilnahmeScalarWhereInput | teilnahmeScalarWhereInput[]
    id?: IntFilter<"teilnahme"> | number
    mitglied_id?: IntFilter<"teilnahme"> | number
    veranstaltung_id?: IntFilter<"teilnahme"> | number
    typ?: Enumteilnahme_typFilter<"teilnahme"> | $Enums.teilnahme_typ
  }

  export type mitglied_funktionenCreateWithoutFunktion_ffInput = {
    typ: $Enums.mitglied_funktionen_typ
    ff_mitglied: ff_mitgliedCreateNestedOneWithoutMitglied_funktionenInput
  }

  export type mitglied_funktionenUncheckedCreateWithoutFunktion_ffInput = {
    id?: number
    mitglied_id: number
    typ: $Enums.mitglied_funktionen_typ
  }

  export type mitglied_funktionenCreateOrConnectWithoutFunktion_ffInput = {
    where: mitglied_funktionenWhereUniqueInput
    create: XOR<mitglied_funktionenCreateWithoutFunktion_ffInput, mitglied_funktionenUncheckedCreateWithoutFunktion_ffInput>
  }

  export type mitglied_funktionenCreateManyFunktion_ffInputEnvelope = {
    data: mitglied_funktionenCreateManyFunktion_ffInput | mitglied_funktionenCreateManyFunktion_ffInput[]
    skipDuplicates?: boolean
  }

  export type mitglied_funktionenUpsertWithWhereUniqueWithoutFunktion_ffInput = {
    where: mitglied_funktionenWhereUniqueInput
    update: XOR<mitglied_funktionenUpdateWithoutFunktion_ffInput, mitglied_funktionenUncheckedUpdateWithoutFunktion_ffInput>
    create: XOR<mitglied_funktionenCreateWithoutFunktion_ffInput, mitglied_funktionenUncheckedCreateWithoutFunktion_ffInput>
  }

  export type mitglied_funktionenUpdateWithWhereUniqueWithoutFunktion_ffInput = {
    where: mitglied_funktionenWhereUniqueInput
    data: XOR<mitglied_funktionenUpdateWithoutFunktion_ffInput, mitglied_funktionenUncheckedUpdateWithoutFunktion_ffInput>
  }

  export type mitglied_funktionenUpdateManyWithWhereWithoutFunktion_ffInput = {
    where: mitglied_funktionenScalarWhereInput
    data: XOR<mitglied_funktionenUpdateManyMutationInput, mitglied_funktionenUncheckedUpdateManyWithoutFunktion_ffInput>
  }

  export type jf_mitgliedCreateWithoutJf_erziehungsberechtigterInput = {
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.jf_mitglied_status
    person: personCreateNestedOneWithoutJf_mitgliedInput
  }

  export type jf_mitgliedUncheckedCreateWithoutJf_erziehungsberechtigterInput = {
    id?: number
    person_id: number
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.jf_mitglied_status
  }

  export type jf_mitgliedCreateOrConnectWithoutJf_erziehungsberechtigterInput = {
    where: jf_mitgliedWhereUniqueInput
    create: XOR<jf_mitgliedCreateWithoutJf_erziehungsberechtigterInput, jf_mitgliedUncheckedCreateWithoutJf_erziehungsberechtigterInput>
  }

  export type personCreateWithoutJf_erziehungsberechtigterInput = {
    vorname: string
    name: string
    geburtsdatum?: Date | string | null
    email: string
    ff_mitglied?: ff_mitgliedCreateNestedManyWithoutPersonInput
    jf_mitglied?: jf_mitgliedCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateWithoutJf_erziehungsberechtigterInput = {
    id?: number
    vorname: string
    name: string
    geburtsdatum?: Date | string | null
    email: string
    ff_mitglied?: ff_mitgliedUncheckedCreateNestedManyWithoutPersonInput
    jf_mitglied?: jf_mitgliedUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personCreateOrConnectWithoutJf_erziehungsberechtigterInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutJf_erziehungsberechtigterInput, personUncheckedCreateWithoutJf_erziehungsberechtigterInput>
  }

  export type jf_mitgliedUpsertWithoutJf_erziehungsberechtigterInput = {
    update: XOR<jf_mitgliedUpdateWithoutJf_erziehungsberechtigterInput, jf_mitgliedUncheckedUpdateWithoutJf_erziehungsberechtigterInput>
    create: XOR<jf_mitgliedCreateWithoutJf_erziehungsberechtigterInput, jf_mitgliedUncheckedCreateWithoutJf_erziehungsberechtigterInput>
    where?: jf_mitgliedWhereInput
  }

  export type jf_mitgliedUpdateToOneWithWhereWithoutJf_erziehungsberechtigterInput = {
    where?: jf_mitgliedWhereInput
    data: XOR<jf_mitgliedUpdateWithoutJf_erziehungsberechtigterInput, jf_mitgliedUncheckedUpdateWithoutJf_erziehungsberechtigterInput>
  }

  export type jf_mitgliedUpdateWithoutJf_erziehungsberechtigterInput = {
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumjf_mitglied_statusFieldUpdateOperationsInput | $Enums.jf_mitglied_status
    person?: personUpdateOneRequiredWithoutJf_mitgliedNestedInput
  }

  export type jf_mitgliedUncheckedUpdateWithoutJf_erziehungsberechtigterInput = {
    id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumjf_mitglied_statusFieldUpdateOperationsInput | $Enums.jf_mitglied_status
  }

  export type personUpsertWithoutJf_erziehungsberechtigterInput = {
    update: XOR<personUpdateWithoutJf_erziehungsberechtigterInput, personUncheckedUpdateWithoutJf_erziehungsberechtigterInput>
    create: XOR<personCreateWithoutJf_erziehungsberechtigterInput, personUncheckedCreateWithoutJf_erziehungsberechtigterInput>
    where?: personWhereInput
  }

  export type personUpdateToOneWithWhereWithoutJf_erziehungsberechtigterInput = {
    where?: personWhereInput
    data: XOR<personUpdateWithoutJf_erziehungsberechtigterInput, personUncheckedUpdateWithoutJf_erziehungsberechtigterInput>
  }

  export type personUpdateWithoutJf_erziehungsberechtigterInput = {
    vorname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    geburtsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    ff_mitglied?: ff_mitgliedUpdateManyWithoutPersonNestedInput
    jf_mitglied?: jf_mitgliedUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateWithoutJf_erziehungsberechtigterInput = {
    id?: IntFieldUpdateOperationsInput | number
    vorname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    geburtsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    ff_mitglied?: ff_mitgliedUncheckedUpdateManyWithoutPersonNestedInput
    jf_mitglied?: jf_mitgliedUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type jf_erziehungsberechtigterCreateWithoutJf_mitgliedInput = {
    person: personCreateNestedOneWithoutJf_erziehungsberechtigterInput
  }

  export type jf_erziehungsberechtigterUncheckedCreateWithoutJf_mitgliedInput = {
    id?: number
    person_id: number
  }

  export type jf_erziehungsberechtigterCreateOrConnectWithoutJf_mitgliedInput = {
    where: jf_erziehungsberechtigterWhereUniqueInput
    create: XOR<jf_erziehungsberechtigterCreateWithoutJf_mitgliedInput, jf_erziehungsberechtigterUncheckedCreateWithoutJf_mitgliedInput>
  }

  export type jf_erziehungsberechtigterCreateManyJf_mitgliedInputEnvelope = {
    data: jf_erziehungsberechtigterCreateManyJf_mitgliedInput | jf_erziehungsberechtigterCreateManyJf_mitgliedInput[]
    skipDuplicates?: boolean
  }

  export type personCreateWithoutJf_mitgliedInput = {
    vorname: string
    name: string
    geburtsdatum?: Date | string | null
    email: string
    ff_mitglied?: ff_mitgliedCreateNestedManyWithoutPersonInput
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateWithoutJf_mitgliedInput = {
    id?: number
    vorname: string
    name: string
    geburtsdatum?: Date | string | null
    email: string
    ff_mitglied?: ff_mitgliedUncheckedCreateNestedManyWithoutPersonInput
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personCreateOrConnectWithoutJf_mitgliedInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutJf_mitgliedInput, personUncheckedCreateWithoutJf_mitgliedInput>
  }

  export type jf_erziehungsberechtigterUpsertWithWhereUniqueWithoutJf_mitgliedInput = {
    where: jf_erziehungsberechtigterWhereUniqueInput
    update: XOR<jf_erziehungsberechtigterUpdateWithoutJf_mitgliedInput, jf_erziehungsberechtigterUncheckedUpdateWithoutJf_mitgliedInput>
    create: XOR<jf_erziehungsberechtigterCreateWithoutJf_mitgliedInput, jf_erziehungsberechtigterUncheckedCreateWithoutJf_mitgliedInput>
  }

  export type jf_erziehungsberechtigterUpdateWithWhereUniqueWithoutJf_mitgliedInput = {
    where: jf_erziehungsberechtigterWhereUniqueInput
    data: XOR<jf_erziehungsberechtigterUpdateWithoutJf_mitgliedInput, jf_erziehungsberechtigterUncheckedUpdateWithoutJf_mitgliedInput>
  }

  export type jf_erziehungsberechtigterUpdateManyWithWhereWithoutJf_mitgliedInput = {
    where: jf_erziehungsberechtigterScalarWhereInput
    data: XOR<jf_erziehungsberechtigterUpdateManyMutationInput, jf_erziehungsberechtigterUncheckedUpdateManyWithoutJf_mitgliedInput>
  }

  export type jf_erziehungsberechtigterScalarWhereInput = {
    AND?: jf_erziehungsberechtigterScalarWhereInput | jf_erziehungsberechtigterScalarWhereInput[]
    OR?: jf_erziehungsberechtigterScalarWhereInput[]
    NOT?: jf_erziehungsberechtigterScalarWhereInput | jf_erziehungsberechtigterScalarWhereInput[]
    id?: IntFilter<"jf_erziehungsberechtigter"> | number
    jf_mitglied_id?: IntFilter<"jf_erziehungsberechtigter"> | number
    person_id?: IntFilter<"jf_erziehungsberechtigter"> | number
  }

  export type personUpsertWithoutJf_mitgliedInput = {
    update: XOR<personUpdateWithoutJf_mitgliedInput, personUncheckedUpdateWithoutJf_mitgliedInput>
    create: XOR<personCreateWithoutJf_mitgliedInput, personUncheckedCreateWithoutJf_mitgliedInput>
    where?: personWhereInput
  }

  export type personUpdateToOneWithWhereWithoutJf_mitgliedInput = {
    where?: personWhereInput
    data: XOR<personUpdateWithoutJf_mitgliedInput, personUncheckedUpdateWithoutJf_mitgliedInput>
  }

  export type personUpdateWithoutJf_mitgliedInput = {
    vorname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    geburtsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    ff_mitglied?: ff_mitgliedUpdateManyWithoutPersonNestedInput
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateWithoutJf_mitgliedInput = {
    id?: IntFieldUpdateOperationsInput | number
    vorname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    geburtsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    ff_mitglied?: ff_mitgliedUncheckedUpdateManyWithoutPersonNestedInput
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type ff_mitgliedCreateWithoutMitglied_funktionenInput = {
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.ff_mitglied_status
    person: personCreateNestedOneWithoutFf_mitgliedInput
    teilnahme?: teilnahmeCreateNestedManyWithoutFf_mitgliedInput
  }

  export type ff_mitgliedUncheckedCreateWithoutMitglied_funktionenInput = {
    id?: number
    person_id: number
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.ff_mitglied_status
    teilnahme?: teilnahmeUncheckedCreateNestedManyWithoutFf_mitgliedInput
  }

  export type ff_mitgliedCreateOrConnectWithoutMitglied_funktionenInput = {
    where: ff_mitgliedWhereUniqueInput
    create: XOR<ff_mitgliedCreateWithoutMitglied_funktionenInput, ff_mitgliedUncheckedCreateWithoutMitglied_funktionenInput>
  }

  export type funktion_ffCreateWithoutMitglied_funktionenInput = {
    name: string
    ist_admin?: boolean
  }

  export type funktion_ffUncheckedCreateWithoutMitglied_funktionenInput = {
    id?: number
    name: string
    ist_admin?: boolean
  }

  export type funktion_ffCreateOrConnectWithoutMitglied_funktionenInput = {
    where: funktion_ffWhereUniqueInput
    create: XOR<funktion_ffCreateWithoutMitglied_funktionenInput, funktion_ffUncheckedCreateWithoutMitglied_funktionenInput>
  }

  export type ff_mitgliedUpsertWithoutMitglied_funktionenInput = {
    update: XOR<ff_mitgliedUpdateWithoutMitglied_funktionenInput, ff_mitgliedUncheckedUpdateWithoutMitglied_funktionenInput>
    create: XOR<ff_mitgliedCreateWithoutMitglied_funktionenInput, ff_mitgliedUncheckedCreateWithoutMitglied_funktionenInput>
    where?: ff_mitgliedWhereInput
  }

  export type ff_mitgliedUpdateToOneWithWhereWithoutMitglied_funktionenInput = {
    where?: ff_mitgliedWhereInput
    data: XOR<ff_mitgliedUpdateWithoutMitglied_funktionenInput, ff_mitgliedUncheckedUpdateWithoutMitglied_funktionenInput>
  }

  export type ff_mitgliedUpdateWithoutMitglied_funktionenInput = {
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumff_mitglied_statusFieldUpdateOperationsInput | $Enums.ff_mitglied_status
    person?: personUpdateOneRequiredWithoutFf_mitgliedNestedInput
    teilnahme?: teilnahmeUpdateManyWithoutFf_mitgliedNestedInput
  }

  export type ff_mitgliedUncheckedUpdateWithoutMitglied_funktionenInput = {
    id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumff_mitglied_statusFieldUpdateOperationsInput | $Enums.ff_mitglied_status
    teilnahme?: teilnahmeUncheckedUpdateManyWithoutFf_mitgliedNestedInput
  }

  export type funktion_ffUpsertWithoutMitglied_funktionenInput = {
    update: XOR<funktion_ffUpdateWithoutMitglied_funktionenInput, funktion_ffUncheckedUpdateWithoutMitglied_funktionenInput>
    create: XOR<funktion_ffCreateWithoutMitglied_funktionenInput, funktion_ffUncheckedCreateWithoutMitglied_funktionenInput>
    where?: funktion_ffWhereInput
  }

  export type funktion_ffUpdateToOneWithWhereWithoutMitglied_funktionenInput = {
    where?: funktion_ffWhereInput
    data: XOR<funktion_ffUpdateWithoutMitglied_funktionenInput, funktion_ffUncheckedUpdateWithoutMitglied_funktionenInput>
  }

  export type funktion_ffUpdateWithoutMitglied_funktionenInput = {
    name?: StringFieldUpdateOperationsInput | string
    ist_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type funktion_ffUncheckedUpdateWithoutMitglied_funktionenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ist_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ff_mitgliedCreateWithoutPersonInput = {
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.ff_mitglied_status
    mitglied_funktionen?: mitglied_funktionenCreateNestedManyWithoutFf_mitgliedInput
    teilnahme?: teilnahmeCreateNestedManyWithoutFf_mitgliedInput
  }

  export type ff_mitgliedUncheckedCreateWithoutPersonInput = {
    id?: number
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.ff_mitglied_status
    mitglied_funktionen?: mitglied_funktionenUncheckedCreateNestedManyWithoutFf_mitgliedInput
    teilnahme?: teilnahmeUncheckedCreateNestedManyWithoutFf_mitgliedInput
  }

  export type ff_mitgliedCreateOrConnectWithoutPersonInput = {
    where: ff_mitgliedWhereUniqueInput
    create: XOR<ff_mitgliedCreateWithoutPersonInput, ff_mitgliedUncheckedCreateWithoutPersonInput>
  }

  export type ff_mitgliedCreateManyPersonInputEnvelope = {
    data: ff_mitgliedCreateManyPersonInput | ff_mitgliedCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type jf_erziehungsberechtigterCreateWithoutPersonInput = {
    jf_mitglied: jf_mitgliedCreateNestedOneWithoutJf_erziehungsberechtigterInput
  }

  export type jf_erziehungsberechtigterUncheckedCreateWithoutPersonInput = {
    id?: number
    jf_mitglied_id: number
  }

  export type jf_erziehungsberechtigterCreateOrConnectWithoutPersonInput = {
    where: jf_erziehungsberechtigterWhereUniqueInput
    create: XOR<jf_erziehungsberechtigterCreateWithoutPersonInput, jf_erziehungsberechtigterUncheckedCreateWithoutPersonInput>
  }

  export type jf_erziehungsberechtigterCreateManyPersonInputEnvelope = {
    data: jf_erziehungsberechtigterCreateManyPersonInput | jf_erziehungsberechtigterCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type jf_mitgliedCreateWithoutPersonInput = {
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.jf_mitglied_status
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterCreateNestedManyWithoutJf_mitgliedInput
  }

  export type jf_mitgliedUncheckedCreateWithoutPersonInput = {
    id?: number
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.jf_mitglied_status
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUncheckedCreateNestedManyWithoutJf_mitgliedInput
  }

  export type jf_mitgliedCreateOrConnectWithoutPersonInput = {
    where: jf_mitgliedWhereUniqueInput
    create: XOR<jf_mitgliedCreateWithoutPersonInput, jf_mitgliedUncheckedCreateWithoutPersonInput>
  }

  export type jf_mitgliedCreateManyPersonInputEnvelope = {
    data: jf_mitgliedCreateManyPersonInput | jf_mitgliedCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type ff_mitgliedUpsertWithWhereUniqueWithoutPersonInput = {
    where: ff_mitgliedWhereUniqueInput
    update: XOR<ff_mitgliedUpdateWithoutPersonInput, ff_mitgliedUncheckedUpdateWithoutPersonInput>
    create: XOR<ff_mitgliedCreateWithoutPersonInput, ff_mitgliedUncheckedCreateWithoutPersonInput>
  }

  export type ff_mitgliedUpdateWithWhereUniqueWithoutPersonInput = {
    where: ff_mitgliedWhereUniqueInput
    data: XOR<ff_mitgliedUpdateWithoutPersonInput, ff_mitgliedUncheckedUpdateWithoutPersonInput>
  }

  export type ff_mitgliedUpdateManyWithWhereWithoutPersonInput = {
    where: ff_mitgliedScalarWhereInput
    data: XOR<ff_mitgliedUpdateManyMutationInput, ff_mitgliedUncheckedUpdateManyWithoutPersonInput>
  }

  export type ff_mitgliedScalarWhereInput = {
    AND?: ff_mitgliedScalarWhereInput | ff_mitgliedScalarWhereInput[]
    OR?: ff_mitgliedScalarWhereInput[]
    NOT?: ff_mitgliedScalarWhereInput | ff_mitgliedScalarWhereInput[]
    id?: IntFilter<"ff_mitglied"> | number
    person_id?: IntFilter<"ff_mitglied"> | number
    eintrittsdatum?: DateTimeFilter<"ff_mitglied"> | Date | string
    austrittsdatum?: DateTimeNullableFilter<"ff_mitglied"> | Date | string | null
    status?: Enumff_mitglied_statusFilter<"ff_mitglied"> | $Enums.ff_mitglied_status
  }

  export type jf_erziehungsberechtigterUpsertWithWhereUniqueWithoutPersonInput = {
    where: jf_erziehungsberechtigterWhereUniqueInput
    update: XOR<jf_erziehungsberechtigterUpdateWithoutPersonInput, jf_erziehungsberechtigterUncheckedUpdateWithoutPersonInput>
    create: XOR<jf_erziehungsberechtigterCreateWithoutPersonInput, jf_erziehungsberechtigterUncheckedCreateWithoutPersonInput>
  }

  export type jf_erziehungsberechtigterUpdateWithWhereUniqueWithoutPersonInput = {
    where: jf_erziehungsberechtigterWhereUniqueInput
    data: XOR<jf_erziehungsberechtigterUpdateWithoutPersonInput, jf_erziehungsberechtigterUncheckedUpdateWithoutPersonInput>
  }

  export type jf_erziehungsberechtigterUpdateManyWithWhereWithoutPersonInput = {
    where: jf_erziehungsberechtigterScalarWhereInput
    data: XOR<jf_erziehungsberechtigterUpdateManyMutationInput, jf_erziehungsberechtigterUncheckedUpdateManyWithoutPersonInput>
  }

  export type jf_mitgliedUpsertWithWhereUniqueWithoutPersonInput = {
    where: jf_mitgliedWhereUniqueInput
    update: XOR<jf_mitgliedUpdateWithoutPersonInput, jf_mitgliedUncheckedUpdateWithoutPersonInput>
    create: XOR<jf_mitgliedCreateWithoutPersonInput, jf_mitgliedUncheckedCreateWithoutPersonInput>
  }

  export type jf_mitgliedUpdateWithWhereUniqueWithoutPersonInput = {
    where: jf_mitgliedWhereUniqueInput
    data: XOR<jf_mitgliedUpdateWithoutPersonInput, jf_mitgliedUncheckedUpdateWithoutPersonInput>
  }

  export type jf_mitgliedUpdateManyWithWhereWithoutPersonInput = {
    where: jf_mitgliedScalarWhereInput
    data: XOR<jf_mitgliedUpdateManyMutationInput, jf_mitgliedUncheckedUpdateManyWithoutPersonInput>
  }

  export type jf_mitgliedScalarWhereInput = {
    AND?: jf_mitgliedScalarWhereInput | jf_mitgliedScalarWhereInput[]
    OR?: jf_mitgliedScalarWhereInput[]
    NOT?: jf_mitgliedScalarWhereInput | jf_mitgliedScalarWhereInput[]
    id?: IntFilter<"jf_mitglied"> | number
    person_id?: IntFilter<"jf_mitglied"> | number
    eintrittsdatum?: DateTimeFilter<"jf_mitglied"> | Date | string
    austrittsdatum?: DateTimeNullableFilter<"jf_mitglied"> | Date | string | null
    status?: Enumjf_mitglied_statusFilter<"jf_mitglied"> | $Enums.jf_mitglied_status
  }

  export type ff_mitgliedCreateWithoutTeilnahmeInput = {
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.ff_mitglied_status
    person: personCreateNestedOneWithoutFf_mitgliedInput
    mitglied_funktionen?: mitglied_funktionenCreateNestedManyWithoutFf_mitgliedInput
  }

  export type ff_mitgliedUncheckedCreateWithoutTeilnahmeInput = {
    id?: number
    person_id: number
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.ff_mitglied_status
    mitglied_funktionen?: mitglied_funktionenUncheckedCreateNestedManyWithoutFf_mitgliedInput
  }

  export type ff_mitgliedCreateOrConnectWithoutTeilnahmeInput = {
    where: ff_mitgliedWhereUniqueInput
    create: XOR<ff_mitgliedCreateWithoutTeilnahmeInput, ff_mitgliedUncheckedCreateWithoutTeilnahmeInput>
  }

  export type ff_mitgliedUpsertWithoutTeilnahmeInput = {
    update: XOR<ff_mitgliedUpdateWithoutTeilnahmeInput, ff_mitgliedUncheckedUpdateWithoutTeilnahmeInput>
    create: XOR<ff_mitgliedCreateWithoutTeilnahmeInput, ff_mitgliedUncheckedCreateWithoutTeilnahmeInput>
    where?: ff_mitgliedWhereInput
  }

  export type ff_mitgliedUpdateToOneWithWhereWithoutTeilnahmeInput = {
    where?: ff_mitgliedWhereInput
    data: XOR<ff_mitgliedUpdateWithoutTeilnahmeInput, ff_mitgliedUncheckedUpdateWithoutTeilnahmeInput>
  }

  export type ff_mitgliedUpdateWithoutTeilnahmeInput = {
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumff_mitglied_statusFieldUpdateOperationsInput | $Enums.ff_mitglied_status
    person?: personUpdateOneRequiredWithoutFf_mitgliedNestedInput
    mitglied_funktionen?: mitglied_funktionenUpdateManyWithoutFf_mitgliedNestedInput
  }

  export type ff_mitgliedUncheckedUpdateWithoutTeilnahmeInput = {
    id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumff_mitglied_statusFieldUpdateOperationsInput | $Enums.ff_mitglied_status
    mitglied_funktionen?: mitglied_funktionenUncheckedUpdateManyWithoutFf_mitgliedNestedInput
  }

  export type mitglied_funktionenCreateManyFf_mitgliedInput = {
    id?: number
    funktion_id: number
    typ: $Enums.mitglied_funktionen_typ
  }

  export type teilnahmeCreateManyFf_mitgliedInput = {
    id?: number
    veranstaltung_id: number
    typ: $Enums.teilnahme_typ
  }

  export type mitglied_funktionenUpdateWithoutFf_mitgliedInput = {
    typ?: Enummitglied_funktionen_typFieldUpdateOperationsInput | $Enums.mitglied_funktionen_typ
    funktion_ff?: funktion_ffUpdateOneRequiredWithoutMitglied_funktionenNestedInput
  }

  export type mitglied_funktionenUncheckedUpdateWithoutFf_mitgliedInput = {
    id?: IntFieldUpdateOperationsInput | number
    funktion_id?: IntFieldUpdateOperationsInput | number
    typ?: Enummitglied_funktionen_typFieldUpdateOperationsInput | $Enums.mitglied_funktionen_typ
  }

  export type mitglied_funktionenUncheckedUpdateManyWithoutFf_mitgliedInput = {
    id?: IntFieldUpdateOperationsInput | number
    funktion_id?: IntFieldUpdateOperationsInput | number
    typ?: Enummitglied_funktionen_typFieldUpdateOperationsInput | $Enums.mitglied_funktionen_typ
  }

  export type teilnahmeUpdateWithoutFf_mitgliedInput = {
    veranstaltung_id?: IntFieldUpdateOperationsInput | number
    typ?: Enumteilnahme_typFieldUpdateOperationsInput | $Enums.teilnahme_typ
  }

  export type teilnahmeUncheckedUpdateWithoutFf_mitgliedInput = {
    id?: IntFieldUpdateOperationsInput | number
    veranstaltung_id?: IntFieldUpdateOperationsInput | number
    typ?: Enumteilnahme_typFieldUpdateOperationsInput | $Enums.teilnahme_typ
  }

  export type teilnahmeUncheckedUpdateManyWithoutFf_mitgliedInput = {
    id?: IntFieldUpdateOperationsInput | number
    veranstaltung_id?: IntFieldUpdateOperationsInput | number
    typ?: Enumteilnahme_typFieldUpdateOperationsInput | $Enums.teilnahme_typ
  }

  export type mitglied_funktionenCreateManyFunktion_ffInput = {
    id?: number
    mitglied_id: number
    typ: $Enums.mitglied_funktionen_typ
  }

  export type mitglied_funktionenUpdateWithoutFunktion_ffInput = {
    typ?: Enummitglied_funktionen_typFieldUpdateOperationsInput | $Enums.mitglied_funktionen_typ
    ff_mitglied?: ff_mitgliedUpdateOneRequiredWithoutMitglied_funktionenNestedInput
  }

  export type mitglied_funktionenUncheckedUpdateWithoutFunktion_ffInput = {
    id?: IntFieldUpdateOperationsInput | number
    mitglied_id?: IntFieldUpdateOperationsInput | number
    typ?: Enummitglied_funktionen_typFieldUpdateOperationsInput | $Enums.mitglied_funktionen_typ
  }

  export type mitglied_funktionenUncheckedUpdateManyWithoutFunktion_ffInput = {
    id?: IntFieldUpdateOperationsInput | number
    mitglied_id?: IntFieldUpdateOperationsInput | number
    typ?: Enummitglied_funktionen_typFieldUpdateOperationsInput | $Enums.mitglied_funktionen_typ
  }

  export type jf_erziehungsberechtigterCreateManyJf_mitgliedInput = {
    id?: number
    person_id: number
  }

  export type jf_erziehungsberechtigterUpdateWithoutJf_mitgliedInput = {
    person?: personUpdateOneRequiredWithoutJf_erziehungsberechtigterNestedInput
  }

  export type jf_erziehungsberechtigterUncheckedUpdateWithoutJf_mitgliedInput = {
    id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
  }

  export type jf_erziehungsberechtigterUncheckedUpdateManyWithoutJf_mitgliedInput = {
    id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
  }

  export type ff_mitgliedCreateManyPersonInput = {
    id?: number
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.ff_mitglied_status
  }

  export type jf_erziehungsberechtigterCreateManyPersonInput = {
    id?: number
    jf_mitglied_id: number
  }

  export type jf_mitgliedCreateManyPersonInput = {
    id?: number
    eintrittsdatum: Date | string
    austrittsdatum?: Date | string | null
    status?: $Enums.jf_mitglied_status
  }

  export type ff_mitgliedUpdateWithoutPersonInput = {
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumff_mitglied_statusFieldUpdateOperationsInput | $Enums.ff_mitglied_status
    mitglied_funktionen?: mitglied_funktionenUpdateManyWithoutFf_mitgliedNestedInput
    teilnahme?: teilnahmeUpdateManyWithoutFf_mitgliedNestedInput
  }

  export type ff_mitgliedUncheckedUpdateWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumff_mitglied_statusFieldUpdateOperationsInput | $Enums.ff_mitglied_status
    mitglied_funktionen?: mitglied_funktionenUncheckedUpdateManyWithoutFf_mitgliedNestedInput
    teilnahme?: teilnahmeUncheckedUpdateManyWithoutFf_mitgliedNestedInput
  }

  export type ff_mitgliedUncheckedUpdateManyWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumff_mitglied_statusFieldUpdateOperationsInput | $Enums.ff_mitglied_status
  }

  export type jf_erziehungsberechtigterUpdateWithoutPersonInput = {
    jf_mitglied?: jf_mitgliedUpdateOneRequiredWithoutJf_erziehungsberechtigterNestedInput
  }

  export type jf_erziehungsberechtigterUncheckedUpdateWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    jf_mitglied_id?: IntFieldUpdateOperationsInput | number
  }

  export type jf_erziehungsberechtigterUncheckedUpdateManyWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    jf_mitglied_id?: IntFieldUpdateOperationsInput | number
  }

  export type jf_mitgliedUpdateWithoutPersonInput = {
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumjf_mitglied_statusFieldUpdateOperationsInput | $Enums.jf_mitglied_status
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUpdateManyWithoutJf_mitgliedNestedInput
  }

  export type jf_mitgliedUncheckedUpdateWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumjf_mitglied_statusFieldUpdateOperationsInput | $Enums.jf_mitglied_status
    jf_erziehungsberechtigter?: jf_erziehungsberechtigterUncheckedUpdateManyWithoutJf_mitgliedNestedInput
  }

  export type jf_mitgliedUncheckedUpdateManyWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    eintrittsdatum?: DateTimeFieldUpdateOperationsInput | Date | string
    austrittsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumjf_mitglied_statusFieldUpdateOperationsInput | $Enums.jf_mitglied_status
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}