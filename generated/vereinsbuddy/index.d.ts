
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
 * Model benutzerkonto
 * 
 */
export type benutzerkonto = $Result.DefaultSelection<Prisma.$benutzerkontoPayload>
/**
 * Model person
 * 
 */
export type person = $Result.DefaultSelection<Prisma.$personPayload>
/**
 * Model verein
 * 
 */
export type verein = $Result.DefaultSelection<Prisma.$vereinPayload>
/**
 * Model vereinszuordnung
 * 
 */
export type vereinszuordnung = $Result.DefaultSelection<Prisma.$vereinszuordnungPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const vereinszuordnung_Rolle: {
  mitglied: 'mitglied',
  admin: 'admin'
};

export type vereinszuordnung_Rolle = (typeof vereinszuordnung_Rolle)[keyof typeof vereinszuordnung_Rolle]

}

export type vereinszuordnung_Rolle = $Enums.vereinszuordnung_Rolle

export const vereinszuordnung_Rolle: typeof $Enums.vereinszuordnung_Rolle

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Benutzerkontos
 * const benutzerkontos = await prisma.benutzerkonto.findMany()
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
   * // Fetch zero or more Benutzerkontos
   * const benutzerkontos = await prisma.benutzerkonto.findMany()
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
   * `prisma.benutzerkonto`: Exposes CRUD operations for the **benutzerkonto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Benutzerkontos
    * const benutzerkontos = await prisma.benutzerkonto.findMany()
    * ```
    */
  get benutzerkonto(): Prisma.benutzerkontoDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.verein`: Exposes CRUD operations for the **verein** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vereins
    * const vereins = await prisma.verein.findMany()
    * ```
    */
  get verein(): Prisma.vereinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vereinszuordnung`: Exposes CRUD operations for the **vereinszuordnung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vereinszuordnungs
    * const vereinszuordnungs = await prisma.vereinszuordnung.findMany()
    * ```
    */
  get vereinszuordnung(): Prisma.vereinszuordnungDelegate<ExtArgs, ClientOptions>;
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
    benutzerkonto: 'benutzerkonto',
    person: 'person',
    verein: 'verein',
    vereinszuordnung: 'vereinszuordnung'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    vereindb?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "benutzerkonto" | "person" | "verein" | "vereinszuordnung"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      benutzerkonto: {
        payload: Prisma.$benutzerkontoPayload<ExtArgs>
        fields: Prisma.benutzerkontoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.benutzerkontoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benutzerkontoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.benutzerkontoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benutzerkontoPayload>
          }
          findFirst: {
            args: Prisma.benutzerkontoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benutzerkontoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.benutzerkontoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benutzerkontoPayload>
          }
          findMany: {
            args: Prisma.benutzerkontoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benutzerkontoPayload>[]
          }
          create: {
            args: Prisma.benutzerkontoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benutzerkontoPayload>
          }
          createMany: {
            args: Prisma.benutzerkontoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.benutzerkontoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benutzerkontoPayload>
          }
          update: {
            args: Prisma.benutzerkontoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benutzerkontoPayload>
          }
          deleteMany: {
            args: Prisma.benutzerkontoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.benutzerkontoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.benutzerkontoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benutzerkontoPayload>
          }
          aggregate: {
            args: Prisma.BenutzerkontoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBenutzerkonto>
          }
          groupBy: {
            args: Prisma.benutzerkontoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BenutzerkontoGroupByOutputType>[]
          }
          count: {
            args: Prisma.benutzerkontoCountArgs<ExtArgs>
            result: $Utils.Optional<BenutzerkontoCountAggregateOutputType> | number
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
      verein: {
        payload: Prisma.$vereinPayload<ExtArgs>
        fields: Prisma.vereinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vereinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vereinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinPayload>
          }
          findFirst: {
            args: Prisma.vereinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vereinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinPayload>
          }
          findMany: {
            args: Prisma.vereinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinPayload>[]
          }
          create: {
            args: Prisma.vereinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinPayload>
          }
          createMany: {
            args: Prisma.vereinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vereinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinPayload>
          }
          update: {
            args: Prisma.vereinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinPayload>
          }
          deleteMany: {
            args: Prisma.vereinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vereinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vereinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinPayload>
          }
          aggregate: {
            args: Prisma.VereinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerein>
          }
          groupBy: {
            args: Prisma.vereinGroupByArgs<ExtArgs>
            result: $Utils.Optional<VereinGroupByOutputType>[]
          }
          count: {
            args: Prisma.vereinCountArgs<ExtArgs>
            result: $Utils.Optional<VereinCountAggregateOutputType> | number
          }
        }
      }
      vereinszuordnung: {
        payload: Prisma.$vereinszuordnungPayload<ExtArgs>
        fields: Prisma.vereinszuordnungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vereinszuordnungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinszuordnungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vereinszuordnungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinszuordnungPayload>
          }
          findFirst: {
            args: Prisma.vereinszuordnungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinszuordnungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vereinszuordnungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinszuordnungPayload>
          }
          findMany: {
            args: Prisma.vereinszuordnungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinszuordnungPayload>[]
          }
          create: {
            args: Prisma.vereinszuordnungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinszuordnungPayload>
          }
          createMany: {
            args: Prisma.vereinszuordnungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vereinszuordnungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinszuordnungPayload>
          }
          update: {
            args: Prisma.vereinszuordnungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinszuordnungPayload>
          }
          deleteMany: {
            args: Prisma.vereinszuordnungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vereinszuordnungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vereinszuordnungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vereinszuordnungPayload>
          }
          aggregate: {
            args: Prisma.VereinszuordnungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVereinszuordnung>
          }
          groupBy: {
            args: Prisma.vereinszuordnungGroupByArgs<ExtArgs>
            result: $Utils.Optional<VereinszuordnungGroupByOutputType>[]
          }
          count: {
            args: Prisma.vereinszuordnungCountArgs<ExtArgs>
            result: $Utils.Optional<VereinszuordnungCountAggregateOutputType> | number
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
    benutzerkonto?: benutzerkontoOmit
    person?: personOmit
    verein?: vereinOmit
    vereinszuordnung?: vereinszuordnungOmit
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
   * Count Type VereinCountOutputType
   */

  export type VereinCountOutputType = {
    vereinszuordnung: number
  }

  export type VereinCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vereinszuordnung?: boolean | VereinCountOutputTypeCountVereinszuordnungArgs
  }

  // Custom InputTypes
  /**
   * VereinCountOutputType without action
   */
  export type VereinCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VereinCountOutputType
     */
    select?: VereinCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VereinCountOutputType without action
   */
  export type VereinCountOutputTypeCountVereinszuordnungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vereinszuordnungWhereInput
  }


  /**
   * Models
   */

  /**
   * Model benutzerkonto
   */

  export type AggregateBenutzerkonto = {
    _count: BenutzerkontoCountAggregateOutputType | null
    _avg: BenutzerkontoAvgAggregateOutputType | null
    _sum: BenutzerkontoSumAggregateOutputType | null
    _min: BenutzerkontoMinAggregateOutputType | null
    _max: BenutzerkontoMaxAggregateOutputType | null
  }

  export type BenutzerkontoAvgAggregateOutputType = {
    ID: number | null
    Person_ID: number | null
  }

  export type BenutzerkontoSumAggregateOutputType = {
    ID: number | null
    Person_ID: number | null
  }

  export type BenutzerkontoMinAggregateOutputType = {
    ID: number | null
    Benutzername: string | null
    Passwort: string | null
    Aktiv: boolean | null
    Person_ID: number | null
    Erstellt_am: Date | null
    Geaendert_am: Date | null
  }

  export type BenutzerkontoMaxAggregateOutputType = {
    ID: number | null
    Benutzername: string | null
    Passwort: string | null
    Aktiv: boolean | null
    Person_ID: number | null
    Erstellt_am: Date | null
    Geaendert_am: Date | null
  }

  export type BenutzerkontoCountAggregateOutputType = {
    ID: number
    Benutzername: number
    Passwort: number
    Aktiv: number
    Person_ID: number
    Erstellt_am: number
    Geaendert_am: number
    _all: number
  }


  export type BenutzerkontoAvgAggregateInputType = {
    ID?: true
    Person_ID?: true
  }

  export type BenutzerkontoSumAggregateInputType = {
    ID?: true
    Person_ID?: true
  }

  export type BenutzerkontoMinAggregateInputType = {
    ID?: true
    Benutzername?: true
    Passwort?: true
    Aktiv?: true
    Person_ID?: true
    Erstellt_am?: true
    Geaendert_am?: true
  }

  export type BenutzerkontoMaxAggregateInputType = {
    ID?: true
    Benutzername?: true
    Passwort?: true
    Aktiv?: true
    Person_ID?: true
    Erstellt_am?: true
    Geaendert_am?: true
  }

  export type BenutzerkontoCountAggregateInputType = {
    ID?: true
    Benutzername?: true
    Passwort?: true
    Aktiv?: true
    Person_ID?: true
    Erstellt_am?: true
    Geaendert_am?: true
    _all?: true
  }

  export type BenutzerkontoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which benutzerkonto to aggregate.
     */
    where?: benutzerkontoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of benutzerkontos to fetch.
     */
    orderBy?: benutzerkontoOrderByWithRelationInput | benutzerkontoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: benutzerkontoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` benutzerkontos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` benutzerkontos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned benutzerkontos
    **/
    _count?: true | BenutzerkontoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BenutzerkontoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BenutzerkontoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BenutzerkontoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BenutzerkontoMaxAggregateInputType
  }

  export type GetBenutzerkontoAggregateType<T extends BenutzerkontoAggregateArgs> = {
        [P in keyof T & keyof AggregateBenutzerkonto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBenutzerkonto[P]>
      : GetScalarType<T[P], AggregateBenutzerkonto[P]>
  }




  export type benutzerkontoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: benutzerkontoWhereInput
    orderBy?: benutzerkontoOrderByWithAggregationInput | benutzerkontoOrderByWithAggregationInput[]
    by: BenutzerkontoScalarFieldEnum[] | BenutzerkontoScalarFieldEnum
    having?: benutzerkontoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BenutzerkontoCountAggregateInputType | true
    _avg?: BenutzerkontoAvgAggregateInputType
    _sum?: BenutzerkontoSumAggregateInputType
    _min?: BenutzerkontoMinAggregateInputType
    _max?: BenutzerkontoMaxAggregateInputType
  }

  export type BenutzerkontoGroupByOutputType = {
    ID: number
    Benutzername: string
    Passwort: string
    Aktiv: boolean
    Person_ID: number
    Erstellt_am: Date | null
    Geaendert_am: Date | null
    _count: BenutzerkontoCountAggregateOutputType | null
    _avg: BenutzerkontoAvgAggregateOutputType | null
    _sum: BenutzerkontoSumAggregateOutputType | null
    _min: BenutzerkontoMinAggregateOutputType | null
    _max: BenutzerkontoMaxAggregateOutputType | null
  }

  type GetBenutzerkontoGroupByPayload<T extends benutzerkontoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BenutzerkontoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BenutzerkontoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BenutzerkontoGroupByOutputType[P]>
            : GetScalarType<T[P], BenutzerkontoGroupByOutputType[P]>
        }
      >
    >


  export type benutzerkontoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Benutzername?: boolean
    Passwort?: boolean
    Aktiv?: boolean
    Person_ID?: boolean
    Erstellt_am?: boolean
    Geaendert_am?: boolean
  }, ExtArgs["result"]["benutzerkonto"]>



  export type benutzerkontoSelectScalar = {
    ID?: boolean
    Benutzername?: boolean
    Passwort?: boolean
    Aktiv?: boolean
    Person_ID?: boolean
    Erstellt_am?: boolean
    Geaendert_am?: boolean
  }

  export type benutzerkontoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "Benutzername" | "Passwort" | "Aktiv" | "Person_ID" | "Erstellt_am" | "Geaendert_am", ExtArgs["result"]["benutzerkonto"]>

  export type $benutzerkontoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "benutzerkonto"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      Benutzername: string
      Passwort: string
      Aktiv: boolean
      Person_ID: number
      Erstellt_am: Date | null
      Geaendert_am: Date | null
    }, ExtArgs["result"]["benutzerkonto"]>
    composites: {}
  }

  type benutzerkontoGetPayload<S extends boolean | null | undefined | benutzerkontoDefaultArgs> = $Result.GetResult<Prisma.$benutzerkontoPayload, S>

  type benutzerkontoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<benutzerkontoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BenutzerkontoCountAggregateInputType | true
    }

  export interface benutzerkontoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['benutzerkonto'], meta: { name: 'benutzerkonto' } }
    /**
     * Find zero or one Benutzerkonto that matches the filter.
     * @param {benutzerkontoFindUniqueArgs} args - Arguments to find a Benutzerkonto
     * @example
     * // Get one Benutzerkonto
     * const benutzerkonto = await prisma.benutzerkonto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends benutzerkontoFindUniqueArgs>(args: SelectSubset<T, benutzerkontoFindUniqueArgs<ExtArgs>>): Prisma__benutzerkontoClient<$Result.GetResult<Prisma.$benutzerkontoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Benutzerkonto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {benutzerkontoFindUniqueOrThrowArgs} args - Arguments to find a Benutzerkonto
     * @example
     * // Get one Benutzerkonto
     * const benutzerkonto = await prisma.benutzerkonto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends benutzerkontoFindUniqueOrThrowArgs>(args: SelectSubset<T, benutzerkontoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__benutzerkontoClient<$Result.GetResult<Prisma.$benutzerkontoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benutzerkonto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benutzerkontoFindFirstArgs} args - Arguments to find a Benutzerkonto
     * @example
     * // Get one Benutzerkonto
     * const benutzerkonto = await prisma.benutzerkonto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends benutzerkontoFindFirstArgs>(args?: SelectSubset<T, benutzerkontoFindFirstArgs<ExtArgs>>): Prisma__benutzerkontoClient<$Result.GetResult<Prisma.$benutzerkontoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benutzerkonto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benutzerkontoFindFirstOrThrowArgs} args - Arguments to find a Benutzerkonto
     * @example
     * // Get one Benutzerkonto
     * const benutzerkonto = await prisma.benutzerkonto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends benutzerkontoFindFirstOrThrowArgs>(args?: SelectSubset<T, benutzerkontoFindFirstOrThrowArgs<ExtArgs>>): Prisma__benutzerkontoClient<$Result.GetResult<Prisma.$benutzerkontoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Benutzerkontos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benutzerkontoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Benutzerkontos
     * const benutzerkontos = await prisma.benutzerkonto.findMany()
     * 
     * // Get first 10 Benutzerkontos
     * const benutzerkontos = await prisma.benutzerkonto.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const benutzerkontoWithIDOnly = await prisma.benutzerkonto.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends benutzerkontoFindManyArgs>(args?: SelectSubset<T, benutzerkontoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$benutzerkontoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Benutzerkonto.
     * @param {benutzerkontoCreateArgs} args - Arguments to create a Benutzerkonto.
     * @example
     * // Create one Benutzerkonto
     * const Benutzerkonto = await prisma.benutzerkonto.create({
     *   data: {
     *     // ... data to create a Benutzerkonto
     *   }
     * })
     * 
     */
    create<T extends benutzerkontoCreateArgs>(args: SelectSubset<T, benutzerkontoCreateArgs<ExtArgs>>): Prisma__benutzerkontoClient<$Result.GetResult<Prisma.$benutzerkontoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Benutzerkontos.
     * @param {benutzerkontoCreateManyArgs} args - Arguments to create many Benutzerkontos.
     * @example
     * // Create many Benutzerkontos
     * const benutzerkonto = await prisma.benutzerkonto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends benutzerkontoCreateManyArgs>(args?: SelectSubset<T, benutzerkontoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Benutzerkonto.
     * @param {benutzerkontoDeleteArgs} args - Arguments to delete one Benutzerkonto.
     * @example
     * // Delete one Benutzerkonto
     * const Benutzerkonto = await prisma.benutzerkonto.delete({
     *   where: {
     *     // ... filter to delete one Benutzerkonto
     *   }
     * })
     * 
     */
    delete<T extends benutzerkontoDeleteArgs>(args: SelectSubset<T, benutzerkontoDeleteArgs<ExtArgs>>): Prisma__benutzerkontoClient<$Result.GetResult<Prisma.$benutzerkontoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Benutzerkonto.
     * @param {benutzerkontoUpdateArgs} args - Arguments to update one Benutzerkonto.
     * @example
     * // Update one Benutzerkonto
     * const benutzerkonto = await prisma.benutzerkonto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends benutzerkontoUpdateArgs>(args: SelectSubset<T, benutzerkontoUpdateArgs<ExtArgs>>): Prisma__benutzerkontoClient<$Result.GetResult<Prisma.$benutzerkontoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Benutzerkontos.
     * @param {benutzerkontoDeleteManyArgs} args - Arguments to filter Benutzerkontos to delete.
     * @example
     * // Delete a few Benutzerkontos
     * const { count } = await prisma.benutzerkonto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends benutzerkontoDeleteManyArgs>(args?: SelectSubset<T, benutzerkontoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benutzerkontos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benutzerkontoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Benutzerkontos
     * const benutzerkonto = await prisma.benutzerkonto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends benutzerkontoUpdateManyArgs>(args: SelectSubset<T, benutzerkontoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Benutzerkonto.
     * @param {benutzerkontoUpsertArgs} args - Arguments to update or create a Benutzerkonto.
     * @example
     * // Update or create a Benutzerkonto
     * const benutzerkonto = await prisma.benutzerkonto.upsert({
     *   create: {
     *     // ... data to create a Benutzerkonto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Benutzerkonto we want to update
     *   }
     * })
     */
    upsert<T extends benutzerkontoUpsertArgs>(args: SelectSubset<T, benutzerkontoUpsertArgs<ExtArgs>>): Prisma__benutzerkontoClient<$Result.GetResult<Prisma.$benutzerkontoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Benutzerkontos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benutzerkontoCountArgs} args - Arguments to filter Benutzerkontos to count.
     * @example
     * // Count the number of Benutzerkontos
     * const count = await prisma.benutzerkonto.count({
     *   where: {
     *     // ... the filter for the Benutzerkontos we want to count
     *   }
     * })
    **/
    count<T extends benutzerkontoCountArgs>(
      args?: Subset<T, benutzerkontoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BenutzerkontoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Benutzerkonto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenutzerkontoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BenutzerkontoAggregateArgs>(args: Subset<T, BenutzerkontoAggregateArgs>): Prisma.PrismaPromise<GetBenutzerkontoAggregateType<T>>

    /**
     * Group by Benutzerkonto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benutzerkontoGroupByArgs} args - Group by arguments.
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
      T extends benutzerkontoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: benutzerkontoGroupByArgs['orderBy'] }
        : { orderBy?: benutzerkontoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, benutzerkontoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBenutzerkontoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the benutzerkonto model
   */
  readonly fields: benutzerkontoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for benutzerkonto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__benutzerkontoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the benutzerkonto model
   */
  interface benutzerkontoFieldRefs {
    readonly ID: FieldRef<"benutzerkonto", 'Int'>
    readonly Benutzername: FieldRef<"benutzerkonto", 'String'>
    readonly Passwort: FieldRef<"benutzerkonto", 'String'>
    readonly Aktiv: FieldRef<"benutzerkonto", 'Boolean'>
    readonly Person_ID: FieldRef<"benutzerkonto", 'Int'>
    readonly Erstellt_am: FieldRef<"benutzerkonto", 'DateTime'>
    readonly Geaendert_am: FieldRef<"benutzerkonto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * benutzerkonto findUnique
   */
  export type benutzerkontoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benutzerkonto
     */
    select?: benutzerkontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benutzerkonto
     */
    omit?: benutzerkontoOmit<ExtArgs> | null
    /**
     * Filter, which benutzerkonto to fetch.
     */
    where: benutzerkontoWhereUniqueInput
  }

  /**
   * benutzerkonto findUniqueOrThrow
   */
  export type benutzerkontoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benutzerkonto
     */
    select?: benutzerkontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benutzerkonto
     */
    omit?: benutzerkontoOmit<ExtArgs> | null
    /**
     * Filter, which benutzerkonto to fetch.
     */
    where: benutzerkontoWhereUniqueInput
  }

  /**
   * benutzerkonto findFirst
   */
  export type benutzerkontoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benutzerkonto
     */
    select?: benutzerkontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benutzerkonto
     */
    omit?: benutzerkontoOmit<ExtArgs> | null
    /**
     * Filter, which benutzerkonto to fetch.
     */
    where?: benutzerkontoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of benutzerkontos to fetch.
     */
    orderBy?: benutzerkontoOrderByWithRelationInput | benutzerkontoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for benutzerkontos.
     */
    cursor?: benutzerkontoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` benutzerkontos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` benutzerkontos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of benutzerkontos.
     */
    distinct?: BenutzerkontoScalarFieldEnum | BenutzerkontoScalarFieldEnum[]
  }

  /**
   * benutzerkonto findFirstOrThrow
   */
  export type benutzerkontoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benutzerkonto
     */
    select?: benutzerkontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benutzerkonto
     */
    omit?: benutzerkontoOmit<ExtArgs> | null
    /**
     * Filter, which benutzerkonto to fetch.
     */
    where?: benutzerkontoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of benutzerkontos to fetch.
     */
    orderBy?: benutzerkontoOrderByWithRelationInput | benutzerkontoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for benutzerkontos.
     */
    cursor?: benutzerkontoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` benutzerkontos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` benutzerkontos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of benutzerkontos.
     */
    distinct?: BenutzerkontoScalarFieldEnum | BenutzerkontoScalarFieldEnum[]
  }

  /**
   * benutzerkonto findMany
   */
  export type benutzerkontoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benutzerkonto
     */
    select?: benutzerkontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benutzerkonto
     */
    omit?: benutzerkontoOmit<ExtArgs> | null
    /**
     * Filter, which benutzerkontos to fetch.
     */
    where?: benutzerkontoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of benutzerkontos to fetch.
     */
    orderBy?: benutzerkontoOrderByWithRelationInput | benutzerkontoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing benutzerkontos.
     */
    cursor?: benutzerkontoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` benutzerkontos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` benutzerkontos.
     */
    skip?: number
    distinct?: BenutzerkontoScalarFieldEnum | BenutzerkontoScalarFieldEnum[]
  }

  /**
   * benutzerkonto create
   */
  export type benutzerkontoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benutzerkonto
     */
    select?: benutzerkontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benutzerkonto
     */
    omit?: benutzerkontoOmit<ExtArgs> | null
    /**
     * The data needed to create a benutzerkonto.
     */
    data: XOR<benutzerkontoCreateInput, benutzerkontoUncheckedCreateInput>
  }

  /**
   * benutzerkonto createMany
   */
  export type benutzerkontoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many benutzerkontos.
     */
    data: benutzerkontoCreateManyInput | benutzerkontoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * benutzerkonto update
   */
  export type benutzerkontoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benutzerkonto
     */
    select?: benutzerkontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benutzerkonto
     */
    omit?: benutzerkontoOmit<ExtArgs> | null
    /**
     * The data needed to update a benutzerkonto.
     */
    data: XOR<benutzerkontoUpdateInput, benutzerkontoUncheckedUpdateInput>
    /**
     * Choose, which benutzerkonto to update.
     */
    where: benutzerkontoWhereUniqueInput
  }

  /**
   * benutzerkonto updateMany
   */
  export type benutzerkontoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update benutzerkontos.
     */
    data: XOR<benutzerkontoUpdateManyMutationInput, benutzerkontoUncheckedUpdateManyInput>
    /**
     * Filter which benutzerkontos to update
     */
    where?: benutzerkontoWhereInput
    /**
     * Limit how many benutzerkontos to update.
     */
    limit?: number
  }

  /**
   * benutzerkonto upsert
   */
  export type benutzerkontoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benutzerkonto
     */
    select?: benutzerkontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benutzerkonto
     */
    omit?: benutzerkontoOmit<ExtArgs> | null
    /**
     * The filter to search for the benutzerkonto to update in case it exists.
     */
    where: benutzerkontoWhereUniqueInput
    /**
     * In case the benutzerkonto found by the `where` argument doesn't exist, create a new benutzerkonto with this data.
     */
    create: XOR<benutzerkontoCreateInput, benutzerkontoUncheckedCreateInput>
    /**
     * In case the benutzerkonto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<benutzerkontoUpdateInput, benutzerkontoUncheckedUpdateInput>
  }

  /**
   * benutzerkonto delete
   */
  export type benutzerkontoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benutzerkonto
     */
    select?: benutzerkontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benutzerkonto
     */
    omit?: benutzerkontoOmit<ExtArgs> | null
    /**
     * Filter which benutzerkonto to delete.
     */
    where: benutzerkontoWhereUniqueInput
  }

  /**
   * benutzerkonto deleteMany
   */
  export type benutzerkontoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which benutzerkontos to delete
     */
    where?: benutzerkontoWhereInput
    /**
     * Limit how many benutzerkontos to delete.
     */
    limit?: number
  }

  /**
   * benutzerkonto without action
   */
  export type benutzerkontoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benutzerkonto
     */
    select?: benutzerkontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benutzerkonto
     */
    omit?: benutzerkontoOmit<ExtArgs> | null
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
    ID: number | null
  }

  export type PersonSumAggregateOutputType = {
    ID: number | null
  }

  export type PersonMinAggregateOutputType = {
    ID: number | null
    Vorname: string | null
    Name: string | null
    Geburtsdatum: Date | null
    Strasse: string | null
    Hausnummer: string | null
    Postleitzahl: string | null
    Ort: string | null
    Email: string | null
    HandyNr: string | null
    Erstellt_am: Date | null
    Geaendert_am: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    ID: number | null
    Vorname: string | null
    Name: string | null
    Geburtsdatum: Date | null
    Strasse: string | null
    Hausnummer: string | null
    Postleitzahl: string | null
    Ort: string | null
    Email: string | null
    HandyNr: string | null
    Erstellt_am: Date | null
    Geaendert_am: Date | null
  }

  export type PersonCountAggregateOutputType = {
    ID: number
    Vorname: number
    Name: number
    Geburtsdatum: number
    Strasse: number
    Hausnummer: number
    Postleitzahl: number
    Ort: number
    Email: number
    HandyNr: number
    Erstellt_am: number
    Geaendert_am: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    ID?: true
  }

  export type PersonSumAggregateInputType = {
    ID?: true
  }

  export type PersonMinAggregateInputType = {
    ID?: true
    Vorname?: true
    Name?: true
    Geburtsdatum?: true
    Strasse?: true
    Hausnummer?: true
    Postleitzahl?: true
    Ort?: true
    Email?: true
    HandyNr?: true
    Erstellt_am?: true
    Geaendert_am?: true
  }

  export type PersonMaxAggregateInputType = {
    ID?: true
    Vorname?: true
    Name?: true
    Geburtsdatum?: true
    Strasse?: true
    Hausnummer?: true
    Postleitzahl?: true
    Ort?: true
    Email?: true
    HandyNr?: true
    Erstellt_am?: true
    Geaendert_am?: true
  }

  export type PersonCountAggregateInputType = {
    ID?: true
    Vorname?: true
    Name?: true
    Geburtsdatum?: true
    Strasse?: true
    Hausnummer?: true
    Postleitzahl?: true
    Ort?: true
    Email?: true
    HandyNr?: true
    Erstellt_am?: true
    Geaendert_am?: true
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
    ID: number
    Vorname: string
    Name: string
    Geburtsdatum: Date | null
    Strasse: string | null
    Hausnummer: string | null
    Postleitzahl: string | null
    Ort: string | null
    Email: string | null
    HandyNr: string | null
    Erstellt_am: Date | null
    Geaendert_am: Date | null
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
    ID?: boolean
    Vorname?: boolean
    Name?: boolean
    Geburtsdatum?: boolean
    Strasse?: boolean
    Hausnummer?: boolean
    Postleitzahl?: boolean
    Ort?: boolean
    Email?: boolean
    HandyNr?: boolean
    Erstellt_am?: boolean
    Geaendert_am?: boolean
  }, ExtArgs["result"]["person"]>



  export type personSelectScalar = {
    ID?: boolean
    Vorname?: boolean
    Name?: boolean
    Geburtsdatum?: boolean
    Strasse?: boolean
    Hausnummer?: boolean
    Postleitzahl?: boolean
    Ort?: boolean
    Email?: boolean
    HandyNr?: boolean
    Erstellt_am?: boolean
    Geaendert_am?: boolean
  }

  export type personOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "Vorname" | "Name" | "Geburtsdatum" | "Strasse" | "Hausnummer" | "Postleitzahl" | "Ort" | "Email" | "HandyNr" | "Erstellt_am" | "Geaendert_am", ExtArgs["result"]["person"]>

  export type $personPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "person"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      Vorname: string
      Name: string
      Geburtsdatum: Date | null
      Strasse: string | null
      Hausnummer: string | null
      Postleitzahl: string | null
      Ort: string | null
      Email: string | null
      HandyNr: string | null
      Erstellt_am: Date | null
      Geaendert_am: Date | null
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
     * // Only select the `ID`
     * const personWithIDOnly = await prisma.person.findMany({ select: { ID: true } })
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
    readonly ID: FieldRef<"person", 'Int'>
    readonly Vorname: FieldRef<"person", 'String'>
    readonly Name: FieldRef<"person", 'String'>
    readonly Geburtsdatum: FieldRef<"person", 'DateTime'>
    readonly Strasse: FieldRef<"person", 'String'>
    readonly Hausnummer: FieldRef<"person", 'String'>
    readonly Postleitzahl: FieldRef<"person", 'String'>
    readonly Ort: FieldRef<"person", 'String'>
    readonly Email: FieldRef<"person", 'String'>
    readonly HandyNr: FieldRef<"person", 'String'>
    readonly Erstellt_am: FieldRef<"person", 'DateTime'>
    readonly Geaendert_am: FieldRef<"person", 'DateTime'>
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
  }


  /**
   * Model verein
   */

  export type AggregateVerein = {
    _count: VereinCountAggregateOutputType | null
    _avg: VereinAvgAggregateOutputType | null
    _sum: VereinSumAggregateOutputType | null
    _min: VereinMinAggregateOutputType | null
    _max: VereinMaxAggregateOutputType | null
  }

  export type VereinAvgAggregateOutputType = {
    ID: number | null
  }

  export type VereinSumAggregateOutputType = {
    ID: number | null
  }

  export type VereinMinAggregateOutputType = {
    ID: number | null
    Name: string | null
    Strasse: string | null
    Hausnummer: string | null
    Postleitzahl: string | null
    Ort: string | null
    Subdomain: string | null
    Erstellt_am: Date | null
    Geaendert_am: Date | null
  }

  export type VereinMaxAggregateOutputType = {
    ID: number | null
    Name: string | null
    Strasse: string | null
    Hausnummer: string | null
    Postleitzahl: string | null
    Ort: string | null
    Subdomain: string | null
    Erstellt_am: Date | null
    Geaendert_am: Date | null
  }

  export type VereinCountAggregateOutputType = {
    ID: number
    Name: number
    Strasse: number
    Hausnummer: number
    Postleitzahl: number
    Ort: number
    Subdomain: number
    Erstellt_am: number
    Geaendert_am: number
    _all: number
  }


  export type VereinAvgAggregateInputType = {
    ID?: true
  }

  export type VereinSumAggregateInputType = {
    ID?: true
  }

  export type VereinMinAggregateInputType = {
    ID?: true
    Name?: true
    Strasse?: true
    Hausnummer?: true
    Postleitzahl?: true
    Ort?: true
    Subdomain?: true
    Erstellt_am?: true
    Geaendert_am?: true
  }

  export type VereinMaxAggregateInputType = {
    ID?: true
    Name?: true
    Strasse?: true
    Hausnummer?: true
    Postleitzahl?: true
    Ort?: true
    Subdomain?: true
    Erstellt_am?: true
    Geaendert_am?: true
  }

  export type VereinCountAggregateInputType = {
    ID?: true
    Name?: true
    Strasse?: true
    Hausnummer?: true
    Postleitzahl?: true
    Ort?: true
    Subdomain?: true
    Erstellt_am?: true
    Geaendert_am?: true
    _all?: true
  }

  export type VereinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verein to aggregate.
     */
    where?: vereinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vereins to fetch.
     */
    orderBy?: vereinOrderByWithRelationInput | vereinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vereinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vereins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vereins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vereins
    **/
    _count?: true | VereinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VereinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VereinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VereinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VereinMaxAggregateInputType
  }

  export type GetVereinAggregateType<T extends VereinAggregateArgs> = {
        [P in keyof T & keyof AggregateVerein]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerein[P]>
      : GetScalarType<T[P], AggregateVerein[P]>
  }




  export type vereinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vereinWhereInput
    orderBy?: vereinOrderByWithAggregationInput | vereinOrderByWithAggregationInput[]
    by: VereinScalarFieldEnum[] | VereinScalarFieldEnum
    having?: vereinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VereinCountAggregateInputType | true
    _avg?: VereinAvgAggregateInputType
    _sum?: VereinSumAggregateInputType
    _min?: VereinMinAggregateInputType
    _max?: VereinMaxAggregateInputType
  }

  export type VereinGroupByOutputType = {
    ID: number
    Name: string
    Strasse: string
    Hausnummer: string
    Postleitzahl: string
    Ort: string
    Subdomain: string
    Erstellt_am: Date | null
    Geaendert_am: Date | null
    _count: VereinCountAggregateOutputType | null
    _avg: VereinAvgAggregateOutputType | null
    _sum: VereinSumAggregateOutputType | null
    _min: VereinMinAggregateOutputType | null
    _max: VereinMaxAggregateOutputType | null
  }

  type GetVereinGroupByPayload<T extends vereinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VereinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VereinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VereinGroupByOutputType[P]>
            : GetScalarType<T[P], VereinGroupByOutputType[P]>
        }
      >
    >


  export type vereinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Name?: boolean
    Strasse?: boolean
    Hausnummer?: boolean
    Postleitzahl?: boolean
    Ort?: boolean
    Subdomain?: boolean
    Erstellt_am?: boolean
    Geaendert_am?: boolean
    vereinszuordnung?: boolean | verein$vereinszuordnungArgs<ExtArgs>
    _count?: boolean | VereinCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verein"]>



  export type vereinSelectScalar = {
    ID?: boolean
    Name?: boolean
    Strasse?: boolean
    Hausnummer?: boolean
    Postleitzahl?: boolean
    Ort?: boolean
    Subdomain?: boolean
    Erstellt_am?: boolean
    Geaendert_am?: boolean
  }

  export type vereinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "Name" | "Strasse" | "Hausnummer" | "Postleitzahl" | "Ort" | "Subdomain" | "Erstellt_am" | "Geaendert_am", ExtArgs["result"]["verein"]>
  export type vereinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vereinszuordnung?: boolean | verein$vereinszuordnungArgs<ExtArgs>
    _count?: boolean | VereinCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $vereinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verein"
    objects: {
      vereinszuordnung: Prisma.$vereinszuordnungPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      Name: string
      Strasse: string
      Hausnummer: string
      Postleitzahl: string
      Ort: string
      Subdomain: string
      Erstellt_am: Date | null
      Geaendert_am: Date | null
    }, ExtArgs["result"]["verein"]>
    composites: {}
  }

  type vereinGetPayload<S extends boolean | null | undefined | vereinDefaultArgs> = $Result.GetResult<Prisma.$vereinPayload, S>

  type vereinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vereinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VereinCountAggregateInputType | true
    }

  export interface vereinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verein'], meta: { name: 'verein' } }
    /**
     * Find zero or one Verein that matches the filter.
     * @param {vereinFindUniqueArgs} args - Arguments to find a Verein
     * @example
     * // Get one Verein
     * const verein = await prisma.verein.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vereinFindUniqueArgs>(args: SelectSubset<T, vereinFindUniqueArgs<ExtArgs>>): Prisma__vereinClient<$Result.GetResult<Prisma.$vereinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verein that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vereinFindUniqueOrThrowArgs} args - Arguments to find a Verein
     * @example
     * // Get one Verein
     * const verein = await prisma.verein.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vereinFindUniqueOrThrowArgs>(args: SelectSubset<T, vereinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vereinClient<$Result.GetResult<Prisma.$vereinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verein that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vereinFindFirstArgs} args - Arguments to find a Verein
     * @example
     * // Get one Verein
     * const verein = await prisma.verein.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vereinFindFirstArgs>(args?: SelectSubset<T, vereinFindFirstArgs<ExtArgs>>): Prisma__vereinClient<$Result.GetResult<Prisma.$vereinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verein that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vereinFindFirstOrThrowArgs} args - Arguments to find a Verein
     * @example
     * // Get one Verein
     * const verein = await prisma.verein.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vereinFindFirstOrThrowArgs>(args?: SelectSubset<T, vereinFindFirstOrThrowArgs<ExtArgs>>): Prisma__vereinClient<$Result.GetResult<Prisma.$vereinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vereins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vereinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vereins
     * const vereins = await prisma.verein.findMany()
     * 
     * // Get first 10 Vereins
     * const vereins = await prisma.verein.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const vereinWithIDOnly = await prisma.verein.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends vereinFindManyArgs>(args?: SelectSubset<T, vereinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vereinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verein.
     * @param {vereinCreateArgs} args - Arguments to create a Verein.
     * @example
     * // Create one Verein
     * const Verein = await prisma.verein.create({
     *   data: {
     *     // ... data to create a Verein
     *   }
     * })
     * 
     */
    create<T extends vereinCreateArgs>(args: SelectSubset<T, vereinCreateArgs<ExtArgs>>): Prisma__vereinClient<$Result.GetResult<Prisma.$vereinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vereins.
     * @param {vereinCreateManyArgs} args - Arguments to create many Vereins.
     * @example
     * // Create many Vereins
     * const verein = await prisma.verein.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vereinCreateManyArgs>(args?: SelectSubset<T, vereinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Verein.
     * @param {vereinDeleteArgs} args - Arguments to delete one Verein.
     * @example
     * // Delete one Verein
     * const Verein = await prisma.verein.delete({
     *   where: {
     *     // ... filter to delete one Verein
     *   }
     * })
     * 
     */
    delete<T extends vereinDeleteArgs>(args: SelectSubset<T, vereinDeleteArgs<ExtArgs>>): Prisma__vereinClient<$Result.GetResult<Prisma.$vereinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verein.
     * @param {vereinUpdateArgs} args - Arguments to update one Verein.
     * @example
     * // Update one Verein
     * const verein = await prisma.verein.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vereinUpdateArgs>(args: SelectSubset<T, vereinUpdateArgs<ExtArgs>>): Prisma__vereinClient<$Result.GetResult<Prisma.$vereinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vereins.
     * @param {vereinDeleteManyArgs} args - Arguments to filter Vereins to delete.
     * @example
     * // Delete a few Vereins
     * const { count } = await prisma.verein.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vereinDeleteManyArgs>(args?: SelectSubset<T, vereinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vereins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vereinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vereins
     * const verein = await prisma.verein.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vereinUpdateManyArgs>(args: SelectSubset<T, vereinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verein.
     * @param {vereinUpsertArgs} args - Arguments to update or create a Verein.
     * @example
     * // Update or create a Verein
     * const verein = await prisma.verein.upsert({
     *   create: {
     *     // ... data to create a Verein
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verein we want to update
     *   }
     * })
     */
    upsert<T extends vereinUpsertArgs>(args: SelectSubset<T, vereinUpsertArgs<ExtArgs>>): Prisma__vereinClient<$Result.GetResult<Prisma.$vereinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vereins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vereinCountArgs} args - Arguments to filter Vereins to count.
     * @example
     * // Count the number of Vereins
     * const count = await prisma.verein.count({
     *   where: {
     *     // ... the filter for the Vereins we want to count
     *   }
     * })
    **/
    count<T extends vereinCountArgs>(
      args?: Subset<T, vereinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VereinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verein.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VereinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VereinAggregateArgs>(args: Subset<T, VereinAggregateArgs>): Prisma.PrismaPromise<GetVereinAggregateType<T>>

    /**
     * Group by Verein.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vereinGroupByArgs} args - Group by arguments.
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
      T extends vereinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vereinGroupByArgs['orderBy'] }
        : { orderBy?: vereinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vereinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVereinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verein model
   */
  readonly fields: vereinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verein.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vereinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vereinszuordnung<T extends verein$vereinszuordnungArgs<ExtArgs> = {}>(args?: Subset<T, verein$vereinszuordnungArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vereinszuordnungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the verein model
   */
  interface vereinFieldRefs {
    readonly ID: FieldRef<"verein", 'Int'>
    readonly Name: FieldRef<"verein", 'String'>
    readonly Strasse: FieldRef<"verein", 'String'>
    readonly Hausnummer: FieldRef<"verein", 'String'>
    readonly Postleitzahl: FieldRef<"verein", 'String'>
    readonly Ort: FieldRef<"verein", 'String'>
    readonly Subdomain: FieldRef<"verein", 'String'>
    readonly Erstellt_am: FieldRef<"verein", 'DateTime'>
    readonly Geaendert_am: FieldRef<"verein", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * verein findUnique
   */
  export type vereinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verein
     */
    select?: vereinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verein
     */
    omit?: vereinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinInclude<ExtArgs> | null
    /**
     * Filter, which verein to fetch.
     */
    where: vereinWhereUniqueInput
  }

  /**
   * verein findUniqueOrThrow
   */
  export type vereinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verein
     */
    select?: vereinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verein
     */
    omit?: vereinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinInclude<ExtArgs> | null
    /**
     * Filter, which verein to fetch.
     */
    where: vereinWhereUniqueInput
  }

  /**
   * verein findFirst
   */
  export type vereinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verein
     */
    select?: vereinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verein
     */
    omit?: vereinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinInclude<ExtArgs> | null
    /**
     * Filter, which verein to fetch.
     */
    where?: vereinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vereins to fetch.
     */
    orderBy?: vereinOrderByWithRelationInput | vereinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vereins.
     */
    cursor?: vereinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vereins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vereins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vereins.
     */
    distinct?: VereinScalarFieldEnum | VereinScalarFieldEnum[]
  }

  /**
   * verein findFirstOrThrow
   */
  export type vereinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verein
     */
    select?: vereinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verein
     */
    omit?: vereinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinInclude<ExtArgs> | null
    /**
     * Filter, which verein to fetch.
     */
    where?: vereinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vereins to fetch.
     */
    orderBy?: vereinOrderByWithRelationInput | vereinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vereins.
     */
    cursor?: vereinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vereins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vereins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vereins.
     */
    distinct?: VereinScalarFieldEnum | VereinScalarFieldEnum[]
  }

  /**
   * verein findMany
   */
  export type vereinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verein
     */
    select?: vereinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verein
     */
    omit?: vereinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinInclude<ExtArgs> | null
    /**
     * Filter, which vereins to fetch.
     */
    where?: vereinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vereins to fetch.
     */
    orderBy?: vereinOrderByWithRelationInput | vereinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vereins.
     */
    cursor?: vereinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vereins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vereins.
     */
    skip?: number
    distinct?: VereinScalarFieldEnum | VereinScalarFieldEnum[]
  }

  /**
   * verein create
   */
  export type vereinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verein
     */
    select?: vereinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verein
     */
    omit?: vereinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinInclude<ExtArgs> | null
    /**
     * The data needed to create a verein.
     */
    data: XOR<vereinCreateInput, vereinUncheckedCreateInput>
  }

  /**
   * verein createMany
   */
  export type vereinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vereins.
     */
    data: vereinCreateManyInput | vereinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verein update
   */
  export type vereinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verein
     */
    select?: vereinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verein
     */
    omit?: vereinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinInclude<ExtArgs> | null
    /**
     * The data needed to update a verein.
     */
    data: XOR<vereinUpdateInput, vereinUncheckedUpdateInput>
    /**
     * Choose, which verein to update.
     */
    where: vereinWhereUniqueInput
  }

  /**
   * verein updateMany
   */
  export type vereinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vereins.
     */
    data: XOR<vereinUpdateManyMutationInput, vereinUncheckedUpdateManyInput>
    /**
     * Filter which vereins to update
     */
    where?: vereinWhereInput
    /**
     * Limit how many vereins to update.
     */
    limit?: number
  }

  /**
   * verein upsert
   */
  export type vereinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verein
     */
    select?: vereinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verein
     */
    omit?: vereinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinInclude<ExtArgs> | null
    /**
     * The filter to search for the verein to update in case it exists.
     */
    where: vereinWhereUniqueInput
    /**
     * In case the verein found by the `where` argument doesn't exist, create a new verein with this data.
     */
    create: XOR<vereinCreateInput, vereinUncheckedCreateInput>
    /**
     * In case the verein was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vereinUpdateInput, vereinUncheckedUpdateInput>
  }

  /**
   * verein delete
   */
  export type vereinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verein
     */
    select?: vereinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verein
     */
    omit?: vereinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinInclude<ExtArgs> | null
    /**
     * Filter which verein to delete.
     */
    where: vereinWhereUniqueInput
  }

  /**
   * verein deleteMany
   */
  export type vereinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vereins to delete
     */
    where?: vereinWhereInput
    /**
     * Limit how many vereins to delete.
     */
    limit?: number
  }

  /**
   * verein.vereinszuordnung
   */
  export type verein$vereinszuordnungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vereinszuordnung
     */
    select?: vereinszuordnungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vereinszuordnung
     */
    omit?: vereinszuordnungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinszuordnungInclude<ExtArgs> | null
    where?: vereinszuordnungWhereInput
    orderBy?: vereinszuordnungOrderByWithRelationInput | vereinszuordnungOrderByWithRelationInput[]
    cursor?: vereinszuordnungWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VereinszuordnungScalarFieldEnum | VereinszuordnungScalarFieldEnum[]
  }

  /**
   * verein without action
   */
  export type vereinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verein
     */
    select?: vereinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verein
     */
    omit?: vereinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinInclude<ExtArgs> | null
  }


  /**
   * Model vereinszuordnung
   */

  export type AggregateVereinszuordnung = {
    _count: VereinszuordnungCountAggregateOutputType | null
    _avg: VereinszuordnungAvgAggregateOutputType | null
    _sum: VereinszuordnungSumAggregateOutputType | null
    _min: VereinszuordnungMinAggregateOutputType | null
    _max: VereinszuordnungMaxAggregateOutputType | null
  }

  export type VereinszuordnungAvgAggregateOutputType = {
    ID: number | null
    Person_ID: number | null
    Verein_ID: number | null
  }

  export type VereinszuordnungSumAggregateOutputType = {
    ID: number | null
    Person_ID: number | null
    Verein_ID: number | null
  }

  export type VereinszuordnungMinAggregateOutputType = {
    ID: number | null
    Person_ID: number | null
    Verein_ID: number | null
    Rolle: $Enums.vereinszuordnung_Rolle | null
    Erstellt_am: Date | null
    Geaendert_am: Date | null
  }

  export type VereinszuordnungMaxAggregateOutputType = {
    ID: number | null
    Person_ID: number | null
    Verein_ID: number | null
    Rolle: $Enums.vereinszuordnung_Rolle | null
    Erstellt_am: Date | null
    Geaendert_am: Date | null
  }

  export type VereinszuordnungCountAggregateOutputType = {
    ID: number
    Person_ID: number
    Verein_ID: number
    Rolle: number
    Erstellt_am: number
    Geaendert_am: number
    _all: number
  }


  export type VereinszuordnungAvgAggregateInputType = {
    ID?: true
    Person_ID?: true
    Verein_ID?: true
  }

  export type VereinszuordnungSumAggregateInputType = {
    ID?: true
    Person_ID?: true
    Verein_ID?: true
  }

  export type VereinszuordnungMinAggregateInputType = {
    ID?: true
    Person_ID?: true
    Verein_ID?: true
    Rolle?: true
    Erstellt_am?: true
    Geaendert_am?: true
  }

  export type VereinszuordnungMaxAggregateInputType = {
    ID?: true
    Person_ID?: true
    Verein_ID?: true
    Rolle?: true
    Erstellt_am?: true
    Geaendert_am?: true
  }

  export type VereinszuordnungCountAggregateInputType = {
    ID?: true
    Person_ID?: true
    Verein_ID?: true
    Rolle?: true
    Erstellt_am?: true
    Geaendert_am?: true
    _all?: true
  }

  export type VereinszuordnungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vereinszuordnung to aggregate.
     */
    where?: vereinszuordnungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vereinszuordnungs to fetch.
     */
    orderBy?: vereinszuordnungOrderByWithRelationInput | vereinszuordnungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vereinszuordnungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vereinszuordnungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vereinszuordnungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vereinszuordnungs
    **/
    _count?: true | VereinszuordnungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VereinszuordnungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VereinszuordnungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VereinszuordnungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VereinszuordnungMaxAggregateInputType
  }

  export type GetVereinszuordnungAggregateType<T extends VereinszuordnungAggregateArgs> = {
        [P in keyof T & keyof AggregateVereinszuordnung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVereinszuordnung[P]>
      : GetScalarType<T[P], AggregateVereinszuordnung[P]>
  }




  export type vereinszuordnungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vereinszuordnungWhereInput
    orderBy?: vereinszuordnungOrderByWithAggregationInput | vereinszuordnungOrderByWithAggregationInput[]
    by: VereinszuordnungScalarFieldEnum[] | VereinszuordnungScalarFieldEnum
    having?: vereinszuordnungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VereinszuordnungCountAggregateInputType | true
    _avg?: VereinszuordnungAvgAggregateInputType
    _sum?: VereinszuordnungSumAggregateInputType
    _min?: VereinszuordnungMinAggregateInputType
    _max?: VereinszuordnungMaxAggregateInputType
  }

  export type VereinszuordnungGroupByOutputType = {
    ID: number
    Person_ID: number
    Verein_ID: number
    Rolle: $Enums.vereinszuordnung_Rolle
    Erstellt_am: Date
    Geaendert_am: Date | null
    _count: VereinszuordnungCountAggregateOutputType | null
    _avg: VereinszuordnungAvgAggregateOutputType | null
    _sum: VereinszuordnungSumAggregateOutputType | null
    _min: VereinszuordnungMinAggregateOutputType | null
    _max: VereinszuordnungMaxAggregateOutputType | null
  }

  type GetVereinszuordnungGroupByPayload<T extends vereinszuordnungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VereinszuordnungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VereinszuordnungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VereinszuordnungGroupByOutputType[P]>
            : GetScalarType<T[P], VereinszuordnungGroupByOutputType[P]>
        }
      >
    >


  export type vereinszuordnungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Person_ID?: boolean
    Verein_ID?: boolean
    Rolle?: boolean
    Erstellt_am?: boolean
    Geaendert_am?: boolean
    verein?: boolean | vereinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vereinszuordnung"]>



  export type vereinszuordnungSelectScalar = {
    ID?: boolean
    Person_ID?: boolean
    Verein_ID?: boolean
    Rolle?: boolean
    Erstellt_am?: boolean
    Geaendert_am?: boolean
  }

  export type vereinszuordnungOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "Person_ID" | "Verein_ID" | "Rolle" | "Erstellt_am" | "Geaendert_am", ExtArgs["result"]["vereinszuordnung"]>
  export type vereinszuordnungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verein?: boolean | vereinDefaultArgs<ExtArgs>
  }

  export type $vereinszuordnungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vereinszuordnung"
    objects: {
      verein: Prisma.$vereinPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      Person_ID: number
      Verein_ID: number
      Rolle: $Enums.vereinszuordnung_Rolle
      Erstellt_am: Date
      Geaendert_am: Date | null
    }, ExtArgs["result"]["vereinszuordnung"]>
    composites: {}
  }

  type vereinszuordnungGetPayload<S extends boolean | null | undefined | vereinszuordnungDefaultArgs> = $Result.GetResult<Prisma.$vereinszuordnungPayload, S>

  type vereinszuordnungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vereinszuordnungFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VereinszuordnungCountAggregateInputType | true
    }

  export interface vereinszuordnungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vereinszuordnung'], meta: { name: 'vereinszuordnung' } }
    /**
     * Find zero or one Vereinszuordnung that matches the filter.
     * @param {vereinszuordnungFindUniqueArgs} args - Arguments to find a Vereinszuordnung
     * @example
     * // Get one Vereinszuordnung
     * const vereinszuordnung = await prisma.vereinszuordnung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vereinszuordnungFindUniqueArgs>(args: SelectSubset<T, vereinszuordnungFindUniqueArgs<ExtArgs>>): Prisma__vereinszuordnungClient<$Result.GetResult<Prisma.$vereinszuordnungPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vereinszuordnung that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vereinszuordnungFindUniqueOrThrowArgs} args - Arguments to find a Vereinszuordnung
     * @example
     * // Get one Vereinszuordnung
     * const vereinszuordnung = await prisma.vereinszuordnung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vereinszuordnungFindUniqueOrThrowArgs>(args: SelectSubset<T, vereinszuordnungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vereinszuordnungClient<$Result.GetResult<Prisma.$vereinszuordnungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vereinszuordnung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vereinszuordnungFindFirstArgs} args - Arguments to find a Vereinszuordnung
     * @example
     * // Get one Vereinszuordnung
     * const vereinszuordnung = await prisma.vereinszuordnung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vereinszuordnungFindFirstArgs>(args?: SelectSubset<T, vereinszuordnungFindFirstArgs<ExtArgs>>): Prisma__vereinszuordnungClient<$Result.GetResult<Prisma.$vereinszuordnungPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vereinszuordnung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vereinszuordnungFindFirstOrThrowArgs} args - Arguments to find a Vereinszuordnung
     * @example
     * // Get one Vereinszuordnung
     * const vereinszuordnung = await prisma.vereinszuordnung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vereinszuordnungFindFirstOrThrowArgs>(args?: SelectSubset<T, vereinszuordnungFindFirstOrThrowArgs<ExtArgs>>): Prisma__vereinszuordnungClient<$Result.GetResult<Prisma.$vereinszuordnungPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vereinszuordnungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vereinszuordnungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vereinszuordnungs
     * const vereinszuordnungs = await prisma.vereinszuordnung.findMany()
     * 
     * // Get first 10 Vereinszuordnungs
     * const vereinszuordnungs = await prisma.vereinszuordnung.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const vereinszuordnungWithIDOnly = await prisma.vereinszuordnung.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends vereinszuordnungFindManyArgs>(args?: SelectSubset<T, vereinszuordnungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vereinszuordnungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vereinszuordnung.
     * @param {vereinszuordnungCreateArgs} args - Arguments to create a Vereinszuordnung.
     * @example
     * // Create one Vereinszuordnung
     * const Vereinszuordnung = await prisma.vereinszuordnung.create({
     *   data: {
     *     // ... data to create a Vereinszuordnung
     *   }
     * })
     * 
     */
    create<T extends vereinszuordnungCreateArgs>(args: SelectSubset<T, vereinszuordnungCreateArgs<ExtArgs>>): Prisma__vereinszuordnungClient<$Result.GetResult<Prisma.$vereinszuordnungPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vereinszuordnungs.
     * @param {vereinszuordnungCreateManyArgs} args - Arguments to create many Vereinszuordnungs.
     * @example
     * // Create many Vereinszuordnungs
     * const vereinszuordnung = await prisma.vereinszuordnung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vereinszuordnungCreateManyArgs>(args?: SelectSubset<T, vereinszuordnungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vereinszuordnung.
     * @param {vereinszuordnungDeleteArgs} args - Arguments to delete one Vereinszuordnung.
     * @example
     * // Delete one Vereinszuordnung
     * const Vereinszuordnung = await prisma.vereinszuordnung.delete({
     *   where: {
     *     // ... filter to delete one Vereinszuordnung
     *   }
     * })
     * 
     */
    delete<T extends vereinszuordnungDeleteArgs>(args: SelectSubset<T, vereinszuordnungDeleteArgs<ExtArgs>>): Prisma__vereinszuordnungClient<$Result.GetResult<Prisma.$vereinszuordnungPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vereinszuordnung.
     * @param {vereinszuordnungUpdateArgs} args - Arguments to update one Vereinszuordnung.
     * @example
     * // Update one Vereinszuordnung
     * const vereinszuordnung = await prisma.vereinszuordnung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vereinszuordnungUpdateArgs>(args: SelectSubset<T, vereinszuordnungUpdateArgs<ExtArgs>>): Prisma__vereinszuordnungClient<$Result.GetResult<Prisma.$vereinszuordnungPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vereinszuordnungs.
     * @param {vereinszuordnungDeleteManyArgs} args - Arguments to filter Vereinszuordnungs to delete.
     * @example
     * // Delete a few Vereinszuordnungs
     * const { count } = await prisma.vereinszuordnung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vereinszuordnungDeleteManyArgs>(args?: SelectSubset<T, vereinszuordnungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vereinszuordnungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vereinszuordnungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vereinszuordnungs
     * const vereinszuordnung = await prisma.vereinszuordnung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vereinszuordnungUpdateManyArgs>(args: SelectSubset<T, vereinszuordnungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vereinszuordnung.
     * @param {vereinszuordnungUpsertArgs} args - Arguments to update or create a Vereinszuordnung.
     * @example
     * // Update or create a Vereinszuordnung
     * const vereinszuordnung = await prisma.vereinszuordnung.upsert({
     *   create: {
     *     // ... data to create a Vereinszuordnung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vereinszuordnung we want to update
     *   }
     * })
     */
    upsert<T extends vereinszuordnungUpsertArgs>(args: SelectSubset<T, vereinszuordnungUpsertArgs<ExtArgs>>): Prisma__vereinszuordnungClient<$Result.GetResult<Prisma.$vereinszuordnungPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vereinszuordnungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vereinszuordnungCountArgs} args - Arguments to filter Vereinszuordnungs to count.
     * @example
     * // Count the number of Vereinszuordnungs
     * const count = await prisma.vereinszuordnung.count({
     *   where: {
     *     // ... the filter for the Vereinszuordnungs we want to count
     *   }
     * })
    **/
    count<T extends vereinszuordnungCountArgs>(
      args?: Subset<T, vereinszuordnungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VereinszuordnungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vereinszuordnung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VereinszuordnungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VereinszuordnungAggregateArgs>(args: Subset<T, VereinszuordnungAggregateArgs>): Prisma.PrismaPromise<GetVereinszuordnungAggregateType<T>>

    /**
     * Group by Vereinszuordnung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vereinszuordnungGroupByArgs} args - Group by arguments.
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
      T extends vereinszuordnungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vereinszuordnungGroupByArgs['orderBy'] }
        : { orderBy?: vereinszuordnungGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vereinszuordnungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVereinszuordnungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vereinszuordnung model
   */
  readonly fields: vereinszuordnungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vereinszuordnung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vereinszuordnungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verein<T extends vereinDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vereinDefaultArgs<ExtArgs>>): Prisma__vereinClient<$Result.GetResult<Prisma.$vereinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the vereinszuordnung model
   */
  interface vereinszuordnungFieldRefs {
    readonly ID: FieldRef<"vereinszuordnung", 'Int'>
    readonly Person_ID: FieldRef<"vereinszuordnung", 'Int'>
    readonly Verein_ID: FieldRef<"vereinszuordnung", 'Int'>
    readonly Rolle: FieldRef<"vereinszuordnung", 'vereinszuordnung_Rolle'>
    readonly Erstellt_am: FieldRef<"vereinszuordnung", 'DateTime'>
    readonly Geaendert_am: FieldRef<"vereinszuordnung", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vereinszuordnung findUnique
   */
  export type vereinszuordnungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vereinszuordnung
     */
    select?: vereinszuordnungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vereinszuordnung
     */
    omit?: vereinszuordnungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinszuordnungInclude<ExtArgs> | null
    /**
     * Filter, which vereinszuordnung to fetch.
     */
    where: vereinszuordnungWhereUniqueInput
  }

  /**
   * vereinszuordnung findUniqueOrThrow
   */
  export type vereinszuordnungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vereinszuordnung
     */
    select?: vereinszuordnungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vereinszuordnung
     */
    omit?: vereinszuordnungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinszuordnungInclude<ExtArgs> | null
    /**
     * Filter, which vereinszuordnung to fetch.
     */
    where: vereinszuordnungWhereUniqueInput
  }

  /**
   * vereinszuordnung findFirst
   */
  export type vereinszuordnungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vereinszuordnung
     */
    select?: vereinszuordnungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vereinszuordnung
     */
    omit?: vereinszuordnungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinszuordnungInclude<ExtArgs> | null
    /**
     * Filter, which vereinszuordnung to fetch.
     */
    where?: vereinszuordnungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vereinszuordnungs to fetch.
     */
    orderBy?: vereinszuordnungOrderByWithRelationInput | vereinszuordnungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vereinszuordnungs.
     */
    cursor?: vereinszuordnungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vereinszuordnungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vereinszuordnungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vereinszuordnungs.
     */
    distinct?: VereinszuordnungScalarFieldEnum | VereinszuordnungScalarFieldEnum[]
  }

  /**
   * vereinszuordnung findFirstOrThrow
   */
  export type vereinszuordnungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vereinszuordnung
     */
    select?: vereinszuordnungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vereinszuordnung
     */
    omit?: vereinszuordnungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinszuordnungInclude<ExtArgs> | null
    /**
     * Filter, which vereinszuordnung to fetch.
     */
    where?: vereinszuordnungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vereinszuordnungs to fetch.
     */
    orderBy?: vereinszuordnungOrderByWithRelationInput | vereinszuordnungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vereinszuordnungs.
     */
    cursor?: vereinszuordnungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vereinszuordnungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vereinszuordnungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vereinszuordnungs.
     */
    distinct?: VereinszuordnungScalarFieldEnum | VereinszuordnungScalarFieldEnum[]
  }

  /**
   * vereinszuordnung findMany
   */
  export type vereinszuordnungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vereinszuordnung
     */
    select?: vereinszuordnungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vereinszuordnung
     */
    omit?: vereinszuordnungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinszuordnungInclude<ExtArgs> | null
    /**
     * Filter, which vereinszuordnungs to fetch.
     */
    where?: vereinszuordnungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vereinszuordnungs to fetch.
     */
    orderBy?: vereinszuordnungOrderByWithRelationInput | vereinszuordnungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vereinszuordnungs.
     */
    cursor?: vereinszuordnungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vereinszuordnungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vereinszuordnungs.
     */
    skip?: number
    distinct?: VereinszuordnungScalarFieldEnum | VereinszuordnungScalarFieldEnum[]
  }

  /**
   * vereinszuordnung create
   */
  export type vereinszuordnungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vereinszuordnung
     */
    select?: vereinszuordnungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vereinszuordnung
     */
    omit?: vereinszuordnungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinszuordnungInclude<ExtArgs> | null
    /**
     * The data needed to create a vereinszuordnung.
     */
    data: XOR<vereinszuordnungCreateInput, vereinszuordnungUncheckedCreateInput>
  }

  /**
   * vereinszuordnung createMany
   */
  export type vereinszuordnungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vereinszuordnungs.
     */
    data: vereinszuordnungCreateManyInput | vereinszuordnungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vereinszuordnung update
   */
  export type vereinszuordnungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vereinszuordnung
     */
    select?: vereinszuordnungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vereinszuordnung
     */
    omit?: vereinszuordnungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinszuordnungInclude<ExtArgs> | null
    /**
     * The data needed to update a vereinszuordnung.
     */
    data: XOR<vereinszuordnungUpdateInput, vereinszuordnungUncheckedUpdateInput>
    /**
     * Choose, which vereinszuordnung to update.
     */
    where: vereinszuordnungWhereUniqueInput
  }

  /**
   * vereinszuordnung updateMany
   */
  export type vereinszuordnungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vereinszuordnungs.
     */
    data: XOR<vereinszuordnungUpdateManyMutationInput, vereinszuordnungUncheckedUpdateManyInput>
    /**
     * Filter which vereinszuordnungs to update
     */
    where?: vereinszuordnungWhereInput
    /**
     * Limit how many vereinszuordnungs to update.
     */
    limit?: number
  }

  /**
   * vereinszuordnung upsert
   */
  export type vereinszuordnungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vereinszuordnung
     */
    select?: vereinszuordnungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vereinszuordnung
     */
    omit?: vereinszuordnungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinszuordnungInclude<ExtArgs> | null
    /**
     * The filter to search for the vereinszuordnung to update in case it exists.
     */
    where: vereinszuordnungWhereUniqueInput
    /**
     * In case the vereinszuordnung found by the `where` argument doesn't exist, create a new vereinszuordnung with this data.
     */
    create: XOR<vereinszuordnungCreateInput, vereinszuordnungUncheckedCreateInput>
    /**
     * In case the vereinszuordnung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vereinszuordnungUpdateInput, vereinszuordnungUncheckedUpdateInput>
  }

  /**
   * vereinszuordnung delete
   */
  export type vereinszuordnungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vereinszuordnung
     */
    select?: vereinszuordnungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vereinszuordnung
     */
    omit?: vereinszuordnungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinszuordnungInclude<ExtArgs> | null
    /**
     * Filter which vereinszuordnung to delete.
     */
    where: vereinszuordnungWhereUniqueInput
  }

  /**
   * vereinszuordnung deleteMany
   */
  export type vereinszuordnungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vereinszuordnungs to delete
     */
    where?: vereinszuordnungWhereInput
    /**
     * Limit how many vereinszuordnungs to delete.
     */
    limit?: number
  }

  /**
   * vereinszuordnung without action
   */
  export type vereinszuordnungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vereinszuordnung
     */
    select?: vereinszuordnungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vereinszuordnung
     */
    omit?: vereinszuordnungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vereinszuordnungInclude<ExtArgs> | null
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


  export const BenutzerkontoScalarFieldEnum: {
    ID: 'ID',
    Benutzername: 'Benutzername',
    Passwort: 'Passwort',
    Aktiv: 'Aktiv',
    Person_ID: 'Person_ID',
    Erstellt_am: 'Erstellt_am',
    Geaendert_am: 'Geaendert_am'
  };

  export type BenutzerkontoScalarFieldEnum = (typeof BenutzerkontoScalarFieldEnum)[keyof typeof BenutzerkontoScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    ID: 'ID',
    Vorname: 'Vorname',
    Name: 'Name',
    Geburtsdatum: 'Geburtsdatum',
    Strasse: 'Strasse',
    Hausnummer: 'Hausnummer',
    Postleitzahl: 'Postleitzahl',
    Ort: 'Ort',
    Email: 'Email',
    HandyNr: 'HandyNr',
    Erstellt_am: 'Erstellt_am',
    Geaendert_am: 'Geaendert_am'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const VereinScalarFieldEnum: {
    ID: 'ID',
    Name: 'Name',
    Strasse: 'Strasse',
    Hausnummer: 'Hausnummer',
    Postleitzahl: 'Postleitzahl',
    Ort: 'Ort',
    Subdomain: 'Subdomain',
    Erstellt_am: 'Erstellt_am',
    Geaendert_am: 'Geaendert_am'
  };

  export type VereinScalarFieldEnum = (typeof VereinScalarFieldEnum)[keyof typeof VereinScalarFieldEnum]


  export const VereinszuordnungScalarFieldEnum: {
    ID: 'ID',
    Person_ID: 'Person_ID',
    Verein_ID: 'Verein_ID',
    Rolle: 'Rolle',
    Erstellt_am: 'Erstellt_am',
    Geaendert_am: 'Geaendert_am'
  };

  export type VereinszuordnungScalarFieldEnum = (typeof VereinszuordnungScalarFieldEnum)[keyof typeof VereinszuordnungScalarFieldEnum]


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


  export const benutzerkontoOrderByRelevanceFieldEnum: {
    Benutzername: 'Benutzername',
    Passwort: 'Passwort'
  };

  export type benutzerkontoOrderByRelevanceFieldEnum = (typeof benutzerkontoOrderByRelevanceFieldEnum)[keyof typeof benutzerkontoOrderByRelevanceFieldEnum]


  export const personOrderByRelevanceFieldEnum: {
    Vorname: 'Vorname',
    Name: 'Name',
    Strasse: 'Strasse',
    Hausnummer: 'Hausnummer',
    Postleitzahl: 'Postleitzahl',
    Ort: 'Ort',
    Email: 'Email',
    HandyNr: 'HandyNr'
  };

  export type personOrderByRelevanceFieldEnum = (typeof personOrderByRelevanceFieldEnum)[keyof typeof personOrderByRelevanceFieldEnum]


  export const vereinOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Strasse: 'Strasse',
    Hausnummer: 'Hausnummer',
    Postleitzahl: 'Postleitzahl',
    Ort: 'Ort',
    Subdomain: 'Subdomain'
  };

  export type vereinOrderByRelevanceFieldEnum = (typeof vereinOrderByRelevanceFieldEnum)[keyof typeof vereinOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'vereinszuordnung_Rolle'
   */
  export type Enumvereinszuordnung_RolleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'vereinszuordnung_Rolle'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type benutzerkontoWhereInput = {
    AND?: benutzerkontoWhereInput | benutzerkontoWhereInput[]
    OR?: benutzerkontoWhereInput[]
    NOT?: benutzerkontoWhereInput | benutzerkontoWhereInput[]
    ID?: IntFilter<"benutzerkonto"> | number
    Benutzername?: StringFilter<"benutzerkonto"> | string
    Passwort?: StringFilter<"benutzerkonto"> | string
    Aktiv?: BoolFilter<"benutzerkonto"> | boolean
    Person_ID?: IntFilter<"benutzerkonto"> | number
    Erstellt_am?: DateTimeNullableFilter<"benutzerkonto"> | Date | string | null
    Geaendert_am?: DateTimeNullableFilter<"benutzerkonto"> | Date | string | null
  }

  export type benutzerkontoOrderByWithRelationInput = {
    ID?: SortOrder
    Benutzername?: SortOrder
    Passwort?: SortOrder
    Aktiv?: SortOrder
    Person_ID?: SortOrder
    Erstellt_am?: SortOrderInput | SortOrder
    Geaendert_am?: SortOrderInput | SortOrder
    _relevance?: benutzerkontoOrderByRelevanceInput
  }

  export type benutzerkontoWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    Benutzername?: string
    AND?: benutzerkontoWhereInput | benutzerkontoWhereInput[]
    OR?: benutzerkontoWhereInput[]
    NOT?: benutzerkontoWhereInput | benutzerkontoWhereInput[]
    Passwort?: StringFilter<"benutzerkonto"> | string
    Aktiv?: BoolFilter<"benutzerkonto"> | boolean
    Person_ID?: IntFilter<"benutzerkonto"> | number
    Erstellt_am?: DateTimeNullableFilter<"benutzerkonto"> | Date | string | null
    Geaendert_am?: DateTimeNullableFilter<"benutzerkonto"> | Date | string | null
  }, "ID" | "Benutzername">

  export type benutzerkontoOrderByWithAggregationInput = {
    ID?: SortOrder
    Benutzername?: SortOrder
    Passwort?: SortOrder
    Aktiv?: SortOrder
    Person_ID?: SortOrder
    Erstellt_am?: SortOrderInput | SortOrder
    Geaendert_am?: SortOrderInput | SortOrder
    _count?: benutzerkontoCountOrderByAggregateInput
    _avg?: benutzerkontoAvgOrderByAggregateInput
    _max?: benutzerkontoMaxOrderByAggregateInput
    _min?: benutzerkontoMinOrderByAggregateInput
    _sum?: benutzerkontoSumOrderByAggregateInput
  }

  export type benutzerkontoScalarWhereWithAggregatesInput = {
    AND?: benutzerkontoScalarWhereWithAggregatesInput | benutzerkontoScalarWhereWithAggregatesInput[]
    OR?: benutzerkontoScalarWhereWithAggregatesInput[]
    NOT?: benutzerkontoScalarWhereWithAggregatesInput | benutzerkontoScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"benutzerkonto"> | number
    Benutzername?: StringWithAggregatesFilter<"benutzerkonto"> | string
    Passwort?: StringWithAggregatesFilter<"benutzerkonto"> | string
    Aktiv?: BoolWithAggregatesFilter<"benutzerkonto"> | boolean
    Person_ID?: IntWithAggregatesFilter<"benutzerkonto"> | number
    Erstellt_am?: DateTimeNullableWithAggregatesFilter<"benutzerkonto"> | Date | string | null
    Geaendert_am?: DateTimeNullableWithAggregatesFilter<"benutzerkonto"> | Date | string | null
  }

  export type personWhereInput = {
    AND?: personWhereInput | personWhereInput[]
    OR?: personWhereInput[]
    NOT?: personWhereInput | personWhereInput[]
    ID?: IntFilter<"person"> | number
    Vorname?: StringFilter<"person"> | string
    Name?: StringFilter<"person"> | string
    Geburtsdatum?: DateTimeNullableFilter<"person"> | Date | string | null
    Strasse?: StringNullableFilter<"person"> | string | null
    Hausnummer?: StringNullableFilter<"person"> | string | null
    Postleitzahl?: StringNullableFilter<"person"> | string | null
    Ort?: StringNullableFilter<"person"> | string | null
    Email?: StringNullableFilter<"person"> | string | null
    HandyNr?: StringNullableFilter<"person"> | string | null
    Erstellt_am?: DateTimeNullableFilter<"person"> | Date | string | null
    Geaendert_am?: DateTimeNullableFilter<"person"> | Date | string | null
  }

  export type personOrderByWithRelationInput = {
    ID?: SortOrder
    Vorname?: SortOrder
    Name?: SortOrder
    Geburtsdatum?: SortOrderInput | SortOrder
    Strasse?: SortOrderInput | SortOrder
    Hausnummer?: SortOrderInput | SortOrder
    Postleitzahl?: SortOrderInput | SortOrder
    Ort?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    HandyNr?: SortOrderInput | SortOrder
    Erstellt_am?: SortOrderInput | SortOrder
    Geaendert_am?: SortOrderInput | SortOrder
    _relevance?: personOrderByRelevanceInput
  }

  export type personWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: personWhereInput | personWhereInput[]
    OR?: personWhereInput[]
    NOT?: personWhereInput | personWhereInput[]
    Vorname?: StringFilter<"person"> | string
    Name?: StringFilter<"person"> | string
    Geburtsdatum?: DateTimeNullableFilter<"person"> | Date | string | null
    Strasse?: StringNullableFilter<"person"> | string | null
    Hausnummer?: StringNullableFilter<"person"> | string | null
    Postleitzahl?: StringNullableFilter<"person"> | string | null
    Ort?: StringNullableFilter<"person"> | string | null
    Email?: StringNullableFilter<"person"> | string | null
    HandyNr?: StringNullableFilter<"person"> | string | null
    Erstellt_am?: DateTimeNullableFilter<"person"> | Date | string | null
    Geaendert_am?: DateTimeNullableFilter<"person"> | Date | string | null
  }, "ID">

  export type personOrderByWithAggregationInput = {
    ID?: SortOrder
    Vorname?: SortOrder
    Name?: SortOrder
    Geburtsdatum?: SortOrderInput | SortOrder
    Strasse?: SortOrderInput | SortOrder
    Hausnummer?: SortOrderInput | SortOrder
    Postleitzahl?: SortOrderInput | SortOrder
    Ort?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    HandyNr?: SortOrderInput | SortOrder
    Erstellt_am?: SortOrderInput | SortOrder
    Geaendert_am?: SortOrderInput | SortOrder
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
    ID?: IntWithAggregatesFilter<"person"> | number
    Vorname?: StringWithAggregatesFilter<"person"> | string
    Name?: StringWithAggregatesFilter<"person"> | string
    Geburtsdatum?: DateTimeNullableWithAggregatesFilter<"person"> | Date | string | null
    Strasse?: StringNullableWithAggregatesFilter<"person"> | string | null
    Hausnummer?: StringNullableWithAggregatesFilter<"person"> | string | null
    Postleitzahl?: StringNullableWithAggregatesFilter<"person"> | string | null
    Ort?: StringNullableWithAggregatesFilter<"person"> | string | null
    Email?: StringNullableWithAggregatesFilter<"person"> | string | null
    HandyNr?: StringNullableWithAggregatesFilter<"person"> | string | null
    Erstellt_am?: DateTimeNullableWithAggregatesFilter<"person"> | Date | string | null
    Geaendert_am?: DateTimeNullableWithAggregatesFilter<"person"> | Date | string | null
  }

  export type vereinWhereInput = {
    AND?: vereinWhereInput | vereinWhereInput[]
    OR?: vereinWhereInput[]
    NOT?: vereinWhereInput | vereinWhereInput[]
    ID?: IntFilter<"verein"> | number
    Name?: StringFilter<"verein"> | string
    Strasse?: StringFilter<"verein"> | string
    Hausnummer?: StringFilter<"verein"> | string
    Postleitzahl?: StringFilter<"verein"> | string
    Ort?: StringFilter<"verein"> | string
    Subdomain?: StringFilter<"verein"> | string
    Erstellt_am?: DateTimeNullableFilter<"verein"> | Date | string | null
    Geaendert_am?: DateTimeNullableFilter<"verein"> | Date | string | null
    vereinszuordnung?: VereinszuordnungListRelationFilter
  }

  export type vereinOrderByWithRelationInput = {
    ID?: SortOrder
    Name?: SortOrder
    Strasse?: SortOrder
    Hausnummer?: SortOrder
    Postleitzahl?: SortOrder
    Ort?: SortOrder
    Subdomain?: SortOrder
    Erstellt_am?: SortOrderInput | SortOrder
    Geaendert_am?: SortOrderInput | SortOrder
    vereinszuordnung?: vereinszuordnungOrderByRelationAggregateInput
    _relevance?: vereinOrderByRelevanceInput
  }

  export type vereinWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    Subdomain?: string
    AND?: vereinWhereInput | vereinWhereInput[]
    OR?: vereinWhereInput[]
    NOT?: vereinWhereInput | vereinWhereInput[]
    Name?: StringFilter<"verein"> | string
    Strasse?: StringFilter<"verein"> | string
    Hausnummer?: StringFilter<"verein"> | string
    Postleitzahl?: StringFilter<"verein"> | string
    Ort?: StringFilter<"verein"> | string
    Erstellt_am?: DateTimeNullableFilter<"verein"> | Date | string | null
    Geaendert_am?: DateTimeNullableFilter<"verein"> | Date | string | null
    vereinszuordnung?: VereinszuordnungListRelationFilter
  }, "ID" | "Subdomain">

  export type vereinOrderByWithAggregationInput = {
    ID?: SortOrder
    Name?: SortOrder
    Strasse?: SortOrder
    Hausnummer?: SortOrder
    Postleitzahl?: SortOrder
    Ort?: SortOrder
    Subdomain?: SortOrder
    Erstellt_am?: SortOrderInput | SortOrder
    Geaendert_am?: SortOrderInput | SortOrder
    _count?: vereinCountOrderByAggregateInput
    _avg?: vereinAvgOrderByAggregateInput
    _max?: vereinMaxOrderByAggregateInput
    _min?: vereinMinOrderByAggregateInput
    _sum?: vereinSumOrderByAggregateInput
  }

  export type vereinScalarWhereWithAggregatesInput = {
    AND?: vereinScalarWhereWithAggregatesInput | vereinScalarWhereWithAggregatesInput[]
    OR?: vereinScalarWhereWithAggregatesInput[]
    NOT?: vereinScalarWhereWithAggregatesInput | vereinScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"verein"> | number
    Name?: StringWithAggregatesFilter<"verein"> | string
    Strasse?: StringWithAggregatesFilter<"verein"> | string
    Hausnummer?: StringWithAggregatesFilter<"verein"> | string
    Postleitzahl?: StringWithAggregatesFilter<"verein"> | string
    Ort?: StringWithAggregatesFilter<"verein"> | string
    Subdomain?: StringWithAggregatesFilter<"verein"> | string
    Erstellt_am?: DateTimeNullableWithAggregatesFilter<"verein"> | Date | string | null
    Geaendert_am?: DateTimeNullableWithAggregatesFilter<"verein"> | Date | string | null
  }

  export type vereinszuordnungWhereInput = {
    AND?: vereinszuordnungWhereInput | vereinszuordnungWhereInput[]
    OR?: vereinszuordnungWhereInput[]
    NOT?: vereinszuordnungWhereInput | vereinszuordnungWhereInput[]
    ID?: IntFilter<"vereinszuordnung"> | number
    Person_ID?: IntFilter<"vereinszuordnung"> | number
    Verein_ID?: IntFilter<"vereinszuordnung"> | number
    Rolle?: Enumvereinszuordnung_RolleFilter<"vereinszuordnung"> | $Enums.vereinszuordnung_Rolle
    Erstellt_am?: DateTimeFilter<"vereinszuordnung"> | Date | string
    Geaendert_am?: DateTimeNullableFilter<"vereinszuordnung"> | Date | string | null
    verein?: XOR<VereinScalarRelationFilter, vereinWhereInput>
  }

  export type vereinszuordnungOrderByWithRelationInput = {
    ID?: SortOrder
    Person_ID?: SortOrder
    Verein_ID?: SortOrder
    Rolle?: SortOrder
    Erstellt_am?: SortOrder
    Geaendert_am?: SortOrderInput | SortOrder
    verein?: vereinOrderByWithRelationInput
  }

  export type vereinszuordnungWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: vereinszuordnungWhereInput | vereinszuordnungWhereInput[]
    OR?: vereinszuordnungWhereInput[]
    NOT?: vereinszuordnungWhereInput | vereinszuordnungWhereInput[]
    Person_ID?: IntFilter<"vereinszuordnung"> | number
    Verein_ID?: IntFilter<"vereinszuordnung"> | number
    Rolle?: Enumvereinszuordnung_RolleFilter<"vereinszuordnung"> | $Enums.vereinszuordnung_Rolle
    Erstellt_am?: DateTimeFilter<"vereinszuordnung"> | Date | string
    Geaendert_am?: DateTimeNullableFilter<"vereinszuordnung"> | Date | string | null
    verein?: XOR<VereinScalarRelationFilter, vereinWhereInput>
  }, "ID">

  export type vereinszuordnungOrderByWithAggregationInput = {
    ID?: SortOrder
    Person_ID?: SortOrder
    Verein_ID?: SortOrder
    Rolle?: SortOrder
    Erstellt_am?: SortOrder
    Geaendert_am?: SortOrderInput | SortOrder
    _count?: vereinszuordnungCountOrderByAggregateInput
    _avg?: vereinszuordnungAvgOrderByAggregateInput
    _max?: vereinszuordnungMaxOrderByAggregateInput
    _min?: vereinszuordnungMinOrderByAggregateInput
    _sum?: vereinszuordnungSumOrderByAggregateInput
  }

  export type vereinszuordnungScalarWhereWithAggregatesInput = {
    AND?: vereinszuordnungScalarWhereWithAggregatesInput | vereinszuordnungScalarWhereWithAggregatesInput[]
    OR?: vereinszuordnungScalarWhereWithAggregatesInput[]
    NOT?: vereinszuordnungScalarWhereWithAggregatesInput | vereinszuordnungScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"vereinszuordnung"> | number
    Person_ID?: IntWithAggregatesFilter<"vereinszuordnung"> | number
    Verein_ID?: IntWithAggregatesFilter<"vereinszuordnung"> | number
    Rolle?: Enumvereinszuordnung_RolleWithAggregatesFilter<"vereinszuordnung"> | $Enums.vereinszuordnung_Rolle
    Erstellt_am?: DateTimeWithAggregatesFilter<"vereinszuordnung"> | Date | string
    Geaendert_am?: DateTimeNullableWithAggregatesFilter<"vereinszuordnung"> | Date | string | null
  }

  export type benutzerkontoCreateInput = {
    Benutzername: string
    Passwort: string
    Aktiv?: boolean
    Person_ID: number
    Erstellt_am?: Date | string | null
    Geaendert_am?: Date | string | null
  }

  export type benutzerkontoUncheckedCreateInput = {
    ID?: number
    Benutzername: string
    Passwort: string
    Aktiv?: boolean
    Person_ID: number
    Erstellt_am?: Date | string | null
    Geaendert_am?: Date | string | null
  }

  export type benutzerkontoUpdateInput = {
    Benutzername?: StringFieldUpdateOperationsInput | string
    Passwort?: StringFieldUpdateOperationsInput | string
    Aktiv?: BoolFieldUpdateOperationsInput | boolean
    Person_ID?: IntFieldUpdateOperationsInput | number
    Erstellt_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type benutzerkontoUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Benutzername?: StringFieldUpdateOperationsInput | string
    Passwort?: StringFieldUpdateOperationsInput | string
    Aktiv?: BoolFieldUpdateOperationsInput | boolean
    Person_ID?: IntFieldUpdateOperationsInput | number
    Erstellt_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type benutzerkontoCreateManyInput = {
    ID?: number
    Benutzername: string
    Passwort: string
    Aktiv?: boolean
    Person_ID: number
    Erstellt_am?: Date | string | null
    Geaendert_am?: Date | string | null
  }

  export type benutzerkontoUpdateManyMutationInput = {
    Benutzername?: StringFieldUpdateOperationsInput | string
    Passwort?: StringFieldUpdateOperationsInput | string
    Aktiv?: BoolFieldUpdateOperationsInput | boolean
    Person_ID?: IntFieldUpdateOperationsInput | number
    Erstellt_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type benutzerkontoUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Benutzername?: StringFieldUpdateOperationsInput | string
    Passwort?: StringFieldUpdateOperationsInput | string
    Aktiv?: BoolFieldUpdateOperationsInput | boolean
    Person_ID?: IntFieldUpdateOperationsInput | number
    Erstellt_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type personCreateInput = {
    Vorname: string
    Name: string
    Geburtsdatum?: Date | string | null
    Strasse?: string | null
    Hausnummer?: string | null
    Postleitzahl?: string | null
    Ort?: string | null
    Email?: string | null
    HandyNr?: string | null
    Erstellt_am?: Date | string | null
    Geaendert_am?: Date | string | null
  }

  export type personUncheckedCreateInput = {
    ID?: number
    Vorname: string
    Name: string
    Geburtsdatum?: Date | string | null
    Strasse?: string | null
    Hausnummer?: string | null
    Postleitzahl?: string | null
    Ort?: string | null
    Email?: string | null
    HandyNr?: string | null
    Erstellt_am?: Date | string | null
    Geaendert_am?: Date | string | null
  }

  export type personUpdateInput = {
    Vorname?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Geburtsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Strasse?: NullableStringFieldUpdateOperationsInput | string | null
    Hausnummer?: NullableStringFieldUpdateOperationsInput | string | null
    Postleitzahl?: NullableStringFieldUpdateOperationsInput | string | null
    Ort?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HandyNr?: NullableStringFieldUpdateOperationsInput | string | null
    Erstellt_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type personUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Vorname?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Geburtsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Strasse?: NullableStringFieldUpdateOperationsInput | string | null
    Hausnummer?: NullableStringFieldUpdateOperationsInput | string | null
    Postleitzahl?: NullableStringFieldUpdateOperationsInput | string | null
    Ort?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HandyNr?: NullableStringFieldUpdateOperationsInput | string | null
    Erstellt_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type personCreateManyInput = {
    ID?: number
    Vorname: string
    Name: string
    Geburtsdatum?: Date | string | null
    Strasse?: string | null
    Hausnummer?: string | null
    Postleitzahl?: string | null
    Ort?: string | null
    Email?: string | null
    HandyNr?: string | null
    Erstellt_am?: Date | string | null
    Geaendert_am?: Date | string | null
  }

  export type personUpdateManyMutationInput = {
    Vorname?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Geburtsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Strasse?: NullableStringFieldUpdateOperationsInput | string | null
    Hausnummer?: NullableStringFieldUpdateOperationsInput | string | null
    Postleitzahl?: NullableStringFieldUpdateOperationsInput | string | null
    Ort?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HandyNr?: NullableStringFieldUpdateOperationsInput | string | null
    Erstellt_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type personUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Vorname?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Geburtsdatum?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Strasse?: NullableStringFieldUpdateOperationsInput | string | null
    Hausnummer?: NullableStringFieldUpdateOperationsInput | string | null
    Postleitzahl?: NullableStringFieldUpdateOperationsInput | string | null
    Ort?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HandyNr?: NullableStringFieldUpdateOperationsInput | string | null
    Erstellt_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vereinCreateInput = {
    Name: string
    Strasse: string
    Hausnummer: string
    Postleitzahl: string
    Ort: string
    Subdomain: string
    Erstellt_am?: Date | string | null
    Geaendert_am?: Date | string | null
    vereinszuordnung?: vereinszuordnungCreateNestedManyWithoutVereinInput
  }

  export type vereinUncheckedCreateInput = {
    ID?: number
    Name: string
    Strasse: string
    Hausnummer: string
    Postleitzahl: string
    Ort: string
    Subdomain: string
    Erstellt_am?: Date | string | null
    Geaendert_am?: Date | string | null
    vereinszuordnung?: vereinszuordnungUncheckedCreateNestedManyWithoutVereinInput
  }

  export type vereinUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Strasse?: StringFieldUpdateOperationsInput | string
    Hausnummer?: StringFieldUpdateOperationsInput | string
    Postleitzahl?: StringFieldUpdateOperationsInput | string
    Ort?: StringFieldUpdateOperationsInput | string
    Subdomain?: StringFieldUpdateOperationsInput | string
    Erstellt_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vereinszuordnung?: vereinszuordnungUpdateManyWithoutVereinNestedInput
  }

  export type vereinUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Strasse?: StringFieldUpdateOperationsInput | string
    Hausnummer?: StringFieldUpdateOperationsInput | string
    Postleitzahl?: StringFieldUpdateOperationsInput | string
    Ort?: StringFieldUpdateOperationsInput | string
    Subdomain?: StringFieldUpdateOperationsInput | string
    Erstellt_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vereinszuordnung?: vereinszuordnungUncheckedUpdateManyWithoutVereinNestedInput
  }

  export type vereinCreateManyInput = {
    ID?: number
    Name: string
    Strasse: string
    Hausnummer: string
    Postleitzahl: string
    Ort: string
    Subdomain: string
    Erstellt_am?: Date | string | null
    Geaendert_am?: Date | string | null
  }

  export type vereinUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Strasse?: StringFieldUpdateOperationsInput | string
    Hausnummer?: StringFieldUpdateOperationsInput | string
    Postleitzahl?: StringFieldUpdateOperationsInput | string
    Ort?: StringFieldUpdateOperationsInput | string
    Subdomain?: StringFieldUpdateOperationsInput | string
    Erstellt_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vereinUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Strasse?: StringFieldUpdateOperationsInput | string
    Hausnummer?: StringFieldUpdateOperationsInput | string
    Postleitzahl?: StringFieldUpdateOperationsInput | string
    Ort?: StringFieldUpdateOperationsInput | string
    Subdomain?: StringFieldUpdateOperationsInput | string
    Erstellt_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vereinszuordnungCreateInput = {
    Person_ID: number
    Rolle?: $Enums.vereinszuordnung_Rolle
    Erstellt_am?: Date | string
    Geaendert_am?: Date | string | null
    verein: vereinCreateNestedOneWithoutVereinszuordnungInput
  }

  export type vereinszuordnungUncheckedCreateInput = {
    ID?: number
    Person_ID: number
    Verein_ID: number
    Rolle?: $Enums.vereinszuordnung_Rolle
    Erstellt_am?: Date | string
    Geaendert_am?: Date | string | null
  }

  export type vereinszuordnungUpdateInput = {
    Person_ID?: IntFieldUpdateOperationsInput | number
    Rolle?: Enumvereinszuordnung_RolleFieldUpdateOperationsInput | $Enums.vereinszuordnung_Rolle
    Erstellt_am?: DateTimeFieldUpdateOperationsInput | Date | string
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verein?: vereinUpdateOneRequiredWithoutVereinszuordnungNestedInput
  }

  export type vereinszuordnungUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Person_ID?: IntFieldUpdateOperationsInput | number
    Verein_ID?: IntFieldUpdateOperationsInput | number
    Rolle?: Enumvereinszuordnung_RolleFieldUpdateOperationsInput | $Enums.vereinszuordnung_Rolle
    Erstellt_am?: DateTimeFieldUpdateOperationsInput | Date | string
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vereinszuordnungCreateManyInput = {
    ID?: number
    Person_ID: number
    Verein_ID: number
    Rolle?: $Enums.vereinszuordnung_Rolle
    Erstellt_am?: Date | string
    Geaendert_am?: Date | string | null
  }

  export type vereinszuordnungUpdateManyMutationInput = {
    Person_ID?: IntFieldUpdateOperationsInput | number
    Rolle?: Enumvereinszuordnung_RolleFieldUpdateOperationsInput | $Enums.vereinszuordnung_Rolle
    Erstellt_am?: DateTimeFieldUpdateOperationsInput | Date | string
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vereinszuordnungUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Person_ID?: IntFieldUpdateOperationsInput | number
    Verein_ID?: IntFieldUpdateOperationsInput | number
    Rolle?: Enumvereinszuordnung_RolleFieldUpdateOperationsInput | $Enums.vereinszuordnung_Rolle
    Erstellt_am?: DateTimeFieldUpdateOperationsInput | Date | string
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type benutzerkontoOrderByRelevanceInput = {
    fields: benutzerkontoOrderByRelevanceFieldEnum | benutzerkontoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type benutzerkontoCountOrderByAggregateInput = {
    ID?: SortOrder
    Benutzername?: SortOrder
    Passwort?: SortOrder
    Aktiv?: SortOrder
    Person_ID?: SortOrder
    Erstellt_am?: SortOrder
    Geaendert_am?: SortOrder
  }

  export type benutzerkontoAvgOrderByAggregateInput = {
    ID?: SortOrder
    Person_ID?: SortOrder
  }

  export type benutzerkontoMaxOrderByAggregateInput = {
    ID?: SortOrder
    Benutzername?: SortOrder
    Passwort?: SortOrder
    Aktiv?: SortOrder
    Person_ID?: SortOrder
    Erstellt_am?: SortOrder
    Geaendert_am?: SortOrder
  }

  export type benutzerkontoMinOrderByAggregateInput = {
    ID?: SortOrder
    Benutzername?: SortOrder
    Passwort?: SortOrder
    Aktiv?: SortOrder
    Person_ID?: SortOrder
    Erstellt_am?: SortOrder
    Geaendert_am?: SortOrder
  }

  export type benutzerkontoSumOrderByAggregateInput = {
    ID?: SortOrder
    Person_ID?: SortOrder
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

  export type personOrderByRelevanceInput = {
    fields: personOrderByRelevanceFieldEnum | personOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type personCountOrderByAggregateInput = {
    ID?: SortOrder
    Vorname?: SortOrder
    Name?: SortOrder
    Geburtsdatum?: SortOrder
    Strasse?: SortOrder
    Hausnummer?: SortOrder
    Postleitzahl?: SortOrder
    Ort?: SortOrder
    Email?: SortOrder
    HandyNr?: SortOrder
    Erstellt_am?: SortOrder
    Geaendert_am?: SortOrder
  }

  export type personAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type personMaxOrderByAggregateInput = {
    ID?: SortOrder
    Vorname?: SortOrder
    Name?: SortOrder
    Geburtsdatum?: SortOrder
    Strasse?: SortOrder
    Hausnummer?: SortOrder
    Postleitzahl?: SortOrder
    Ort?: SortOrder
    Email?: SortOrder
    HandyNr?: SortOrder
    Erstellt_am?: SortOrder
    Geaendert_am?: SortOrder
  }

  export type personMinOrderByAggregateInput = {
    ID?: SortOrder
    Vorname?: SortOrder
    Name?: SortOrder
    Geburtsdatum?: SortOrder
    Strasse?: SortOrder
    Hausnummer?: SortOrder
    Postleitzahl?: SortOrder
    Ort?: SortOrder
    Email?: SortOrder
    HandyNr?: SortOrder
    Erstellt_am?: SortOrder
    Geaendert_am?: SortOrder
  }

  export type personSumOrderByAggregateInput = {
    ID?: SortOrder
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

  export type VereinszuordnungListRelationFilter = {
    every?: vereinszuordnungWhereInput
    some?: vereinszuordnungWhereInput
    none?: vereinszuordnungWhereInput
  }

  export type vereinszuordnungOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vereinOrderByRelevanceInput = {
    fields: vereinOrderByRelevanceFieldEnum | vereinOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vereinCountOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Strasse?: SortOrder
    Hausnummer?: SortOrder
    Postleitzahl?: SortOrder
    Ort?: SortOrder
    Subdomain?: SortOrder
    Erstellt_am?: SortOrder
    Geaendert_am?: SortOrder
  }

  export type vereinAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type vereinMaxOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Strasse?: SortOrder
    Hausnummer?: SortOrder
    Postleitzahl?: SortOrder
    Ort?: SortOrder
    Subdomain?: SortOrder
    Erstellt_am?: SortOrder
    Geaendert_am?: SortOrder
  }

  export type vereinMinOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Strasse?: SortOrder
    Hausnummer?: SortOrder
    Postleitzahl?: SortOrder
    Ort?: SortOrder
    Subdomain?: SortOrder
    Erstellt_am?: SortOrder
    Geaendert_am?: SortOrder
  }

  export type vereinSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type Enumvereinszuordnung_RolleFilter<$PrismaModel = never> = {
    equals?: $Enums.vereinszuordnung_Rolle | Enumvereinszuordnung_RolleFieldRefInput<$PrismaModel>
    in?: $Enums.vereinszuordnung_Rolle[]
    notIn?: $Enums.vereinszuordnung_Rolle[]
    not?: NestedEnumvereinszuordnung_RolleFilter<$PrismaModel> | $Enums.vereinszuordnung_Rolle
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

  export type VereinScalarRelationFilter = {
    is?: vereinWhereInput
    isNot?: vereinWhereInput
  }

  export type vereinszuordnungCountOrderByAggregateInput = {
    ID?: SortOrder
    Person_ID?: SortOrder
    Verein_ID?: SortOrder
    Rolle?: SortOrder
    Erstellt_am?: SortOrder
    Geaendert_am?: SortOrder
  }

  export type vereinszuordnungAvgOrderByAggregateInput = {
    ID?: SortOrder
    Person_ID?: SortOrder
    Verein_ID?: SortOrder
  }

  export type vereinszuordnungMaxOrderByAggregateInput = {
    ID?: SortOrder
    Person_ID?: SortOrder
    Verein_ID?: SortOrder
    Rolle?: SortOrder
    Erstellt_am?: SortOrder
    Geaendert_am?: SortOrder
  }

  export type vereinszuordnungMinOrderByAggregateInput = {
    ID?: SortOrder
    Person_ID?: SortOrder
    Verein_ID?: SortOrder
    Rolle?: SortOrder
    Erstellt_am?: SortOrder
    Geaendert_am?: SortOrder
  }

  export type vereinszuordnungSumOrderByAggregateInput = {
    ID?: SortOrder
    Person_ID?: SortOrder
    Verein_ID?: SortOrder
  }

  export type Enumvereinszuordnung_RolleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.vereinszuordnung_Rolle | Enumvereinszuordnung_RolleFieldRefInput<$PrismaModel>
    in?: $Enums.vereinszuordnung_Rolle[]
    notIn?: $Enums.vereinszuordnung_Rolle[]
    not?: NestedEnumvereinszuordnung_RolleWithAggregatesFilter<$PrismaModel> | $Enums.vereinszuordnung_Rolle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvereinszuordnung_RolleFilter<$PrismaModel>
    _max?: NestedEnumvereinszuordnung_RolleFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type vereinszuordnungCreateNestedManyWithoutVereinInput = {
    create?: XOR<vereinszuordnungCreateWithoutVereinInput, vereinszuordnungUncheckedCreateWithoutVereinInput> | vereinszuordnungCreateWithoutVereinInput[] | vereinszuordnungUncheckedCreateWithoutVereinInput[]
    connectOrCreate?: vereinszuordnungCreateOrConnectWithoutVereinInput | vereinszuordnungCreateOrConnectWithoutVereinInput[]
    createMany?: vereinszuordnungCreateManyVereinInputEnvelope
    connect?: vereinszuordnungWhereUniqueInput | vereinszuordnungWhereUniqueInput[]
  }

  export type vereinszuordnungUncheckedCreateNestedManyWithoutVereinInput = {
    create?: XOR<vereinszuordnungCreateWithoutVereinInput, vereinszuordnungUncheckedCreateWithoutVereinInput> | vereinszuordnungCreateWithoutVereinInput[] | vereinszuordnungUncheckedCreateWithoutVereinInput[]
    connectOrCreate?: vereinszuordnungCreateOrConnectWithoutVereinInput | vereinszuordnungCreateOrConnectWithoutVereinInput[]
    createMany?: vereinszuordnungCreateManyVereinInputEnvelope
    connect?: vereinszuordnungWhereUniqueInput | vereinszuordnungWhereUniqueInput[]
  }

  export type vereinszuordnungUpdateManyWithoutVereinNestedInput = {
    create?: XOR<vereinszuordnungCreateWithoutVereinInput, vereinszuordnungUncheckedCreateWithoutVereinInput> | vereinszuordnungCreateWithoutVereinInput[] | vereinszuordnungUncheckedCreateWithoutVereinInput[]
    connectOrCreate?: vereinszuordnungCreateOrConnectWithoutVereinInput | vereinszuordnungCreateOrConnectWithoutVereinInput[]
    upsert?: vereinszuordnungUpsertWithWhereUniqueWithoutVereinInput | vereinszuordnungUpsertWithWhereUniqueWithoutVereinInput[]
    createMany?: vereinszuordnungCreateManyVereinInputEnvelope
    set?: vereinszuordnungWhereUniqueInput | vereinszuordnungWhereUniqueInput[]
    disconnect?: vereinszuordnungWhereUniqueInput | vereinszuordnungWhereUniqueInput[]
    delete?: vereinszuordnungWhereUniqueInput | vereinszuordnungWhereUniqueInput[]
    connect?: vereinszuordnungWhereUniqueInput | vereinszuordnungWhereUniqueInput[]
    update?: vereinszuordnungUpdateWithWhereUniqueWithoutVereinInput | vereinszuordnungUpdateWithWhereUniqueWithoutVereinInput[]
    updateMany?: vereinszuordnungUpdateManyWithWhereWithoutVereinInput | vereinszuordnungUpdateManyWithWhereWithoutVereinInput[]
    deleteMany?: vereinszuordnungScalarWhereInput | vereinszuordnungScalarWhereInput[]
  }

  export type vereinszuordnungUncheckedUpdateManyWithoutVereinNestedInput = {
    create?: XOR<vereinszuordnungCreateWithoutVereinInput, vereinszuordnungUncheckedCreateWithoutVereinInput> | vereinszuordnungCreateWithoutVereinInput[] | vereinszuordnungUncheckedCreateWithoutVereinInput[]
    connectOrCreate?: vereinszuordnungCreateOrConnectWithoutVereinInput | vereinszuordnungCreateOrConnectWithoutVereinInput[]
    upsert?: vereinszuordnungUpsertWithWhereUniqueWithoutVereinInput | vereinszuordnungUpsertWithWhereUniqueWithoutVereinInput[]
    createMany?: vereinszuordnungCreateManyVereinInputEnvelope
    set?: vereinszuordnungWhereUniqueInput | vereinszuordnungWhereUniqueInput[]
    disconnect?: vereinszuordnungWhereUniqueInput | vereinszuordnungWhereUniqueInput[]
    delete?: vereinszuordnungWhereUniqueInput | vereinszuordnungWhereUniqueInput[]
    connect?: vereinszuordnungWhereUniqueInput | vereinszuordnungWhereUniqueInput[]
    update?: vereinszuordnungUpdateWithWhereUniqueWithoutVereinInput | vereinszuordnungUpdateWithWhereUniqueWithoutVereinInput[]
    updateMany?: vereinszuordnungUpdateManyWithWhereWithoutVereinInput | vereinszuordnungUpdateManyWithWhereWithoutVereinInput[]
    deleteMany?: vereinszuordnungScalarWhereInput | vereinszuordnungScalarWhereInput[]
  }

  export type vereinCreateNestedOneWithoutVereinszuordnungInput = {
    create?: XOR<vereinCreateWithoutVereinszuordnungInput, vereinUncheckedCreateWithoutVereinszuordnungInput>
    connectOrCreate?: vereinCreateOrConnectWithoutVereinszuordnungInput
    connect?: vereinWhereUniqueInput
  }

  export type Enumvereinszuordnung_RolleFieldUpdateOperationsInput = {
    set?: $Enums.vereinszuordnung_Rolle
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type vereinUpdateOneRequiredWithoutVereinszuordnungNestedInput = {
    create?: XOR<vereinCreateWithoutVereinszuordnungInput, vereinUncheckedCreateWithoutVereinszuordnungInput>
    connectOrCreate?: vereinCreateOrConnectWithoutVereinszuordnungInput
    upsert?: vereinUpsertWithoutVereinszuordnungInput
    connect?: vereinWhereUniqueInput
    update?: XOR<XOR<vereinUpdateToOneWithWhereWithoutVereinszuordnungInput, vereinUpdateWithoutVereinszuordnungInput>, vereinUncheckedUpdateWithoutVereinszuordnungInput>
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

  export type NestedEnumvereinszuordnung_RolleFilter<$PrismaModel = never> = {
    equals?: $Enums.vereinszuordnung_Rolle | Enumvereinszuordnung_RolleFieldRefInput<$PrismaModel>
    in?: $Enums.vereinszuordnung_Rolle[]
    notIn?: $Enums.vereinszuordnung_Rolle[]
    not?: NestedEnumvereinszuordnung_RolleFilter<$PrismaModel> | $Enums.vereinszuordnung_Rolle
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

  export type NestedEnumvereinszuordnung_RolleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.vereinszuordnung_Rolle | Enumvereinszuordnung_RolleFieldRefInput<$PrismaModel>
    in?: $Enums.vereinszuordnung_Rolle[]
    notIn?: $Enums.vereinszuordnung_Rolle[]
    not?: NestedEnumvereinszuordnung_RolleWithAggregatesFilter<$PrismaModel> | $Enums.vereinszuordnung_Rolle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvereinszuordnung_RolleFilter<$PrismaModel>
    _max?: NestedEnumvereinszuordnung_RolleFilter<$PrismaModel>
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

  export type vereinszuordnungCreateWithoutVereinInput = {
    Person_ID: number
    Rolle?: $Enums.vereinszuordnung_Rolle
    Erstellt_am?: Date | string
    Geaendert_am?: Date | string | null
  }

  export type vereinszuordnungUncheckedCreateWithoutVereinInput = {
    ID?: number
    Person_ID: number
    Rolle?: $Enums.vereinszuordnung_Rolle
    Erstellt_am?: Date | string
    Geaendert_am?: Date | string | null
  }

  export type vereinszuordnungCreateOrConnectWithoutVereinInput = {
    where: vereinszuordnungWhereUniqueInput
    create: XOR<vereinszuordnungCreateWithoutVereinInput, vereinszuordnungUncheckedCreateWithoutVereinInput>
  }

  export type vereinszuordnungCreateManyVereinInputEnvelope = {
    data: vereinszuordnungCreateManyVereinInput | vereinszuordnungCreateManyVereinInput[]
    skipDuplicates?: boolean
  }

  export type vereinszuordnungUpsertWithWhereUniqueWithoutVereinInput = {
    where: vereinszuordnungWhereUniqueInput
    update: XOR<vereinszuordnungUpdateWithoutVereinInput, vereinszuordnungUncheckedUpdateWithoutVereinInput>
    create: XOR<vereinszuordnungCreateWithoutVereinInput, vereinszuordnungUncheckedCreateWithoutVereinInput>
  }

  export type vereinszuordnungUpdateWithWhereUniqueWithoutVereinInput = {
    where: vereinszuordnungWhereUniqueInput
    data: XOR<vereinszuordnungUpdateWithoutVereinInput, vereinszuordnungUncheckedUpdateWithoutVereinInput>
  }

  export type vereinszuordnungUpdateManyWithWhereWithoutVereinInput = {
    where: vereinszuordnungScalarWhereInput
    data: XOR<vereinszuordnungUpdateManyMutationInput, vereinszuordnungUncheckedUpdateManyWithoutVereinInput>
  }

  export type vereinszuordnungScalarWhereInput = {
    AND?: vereinszuordnungScalarWhereInput | vereinszuordnungScalarWhereInput[]
    OR?: vereinszuordnungScalarWhereInput[]
    NOT?: vereinszuordnungScalarWhereInput | vereinszuordnungScalarWhereInput[]
    ID?: IntFilter<"vereinszuordnung"> | number
    Person_ID?: IntFilter<"vereinszuordnung"> | number
    Verein_ID?: IntFilter<"vereinszuordnung"> | number
    Rolle?: Enumvereinszuordnung_RolleFilter<"vereinszuordnung"> | $Enums.vereinszuordnung_Rolle
    Erstellt_am?: DateTimeFilter<"vereinszuordnung"> | Date | string
    Geaendert_am?: DateTimeNullableFilter<"vereinszuordnung"> | Date | string | null
  }

  export type vereinCreateWithoutVereinszuordnungInput = {
    Name: string
    Strasse: string
    Hausnummer: string
    Postleitzahl: string
    Ort: string
    Subdomain: string
    Erstellt_am?: Date | string | null
    Geaendert_am?: Date | string | null
  }

  export type vereinUncheckedCreateWithoutVereinszuordnungInput = {
    ID?: number
    Name: string
    Strasse: string
    Hausnummer: string
    Postleitzahl: string
    Ort: string
    Subdomain: string
    Erstellt_am?: Date | string | null
    Geaendert_am?: Date | string | null
  }

  export type vereinCreateOrConnectWithoutVereinszuordnungInput = {
    where: vereinWhereUniqueInput
    create: XOR<vereinCreateWithoutVereinszuordnungInput, vereinUncheckedCreateWithoutVereinszuordnungInput>
  }

  export type vereinUpsertWithoutVereinszuordnungInput = {
    update: XOR<vereinUpdateWithoutVereinszuordnungInput, vereinUncheckedUpdateWithoutVereinszuordnungInput>
    create: XOR<vereinCreateWithoutVereinszuordnungInput, vereinUncheckedCreateWithoutVereinszuordnungInput>
    where?: vereinWhereInput
  }

  export type vereinUpdateToOneWithWhereWithoutVereinszuordnungInput = {
    where?: vereinWhereInput
    data: XOR<vereinUpdateWithoutVereinszuordnungInput, vereinUncheckedUpdateWithoutVereinszuordnungInput>
  }

  export type vereinUpdateWithoutVereinszuordnungInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Strasse?: StringFieldUpdateOperationsInput | string
    Hausnummer?: StringFieldUpdateOperationsInput | string
    Postleitzahl?: StringFieldUpdateOperationsInput | string
    Ort?: StringFieldUpdateOperationsInput | string
    Subdomain?: StringFieldUpdateOperationsInput | string
    Erstellt_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vereinUncheckedUpdateWithoutVereinszuordnungInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Strasse?: StringFieldUpdateOperationsInput | string
    Hausnummer?: StringFieldUpdateOperationsInput | string
    Postleitzahl?: StringFieldUpdateOperationsInput | string
    Ort?: StringFieldUpdateOperationsInput | string
    Subdomain?: StringFieldUpdateOperationsInput | string
    Erstellt_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vereinszuordnungCreateManyVereinInput = {
    ID?: number
    Person_ID: number
    Rolle?: $Enums.vereinszuordnung_Rolle
    Erstellt_am?: Date | string
    Geaendert_am?: Date | string | null
  }

  export type vereinszuordnungUpdateWithoutVereinInput = {
    Person_ID?: IntFieldUpdateOperationsInput | number
    Rolle?: Enumvereinszuordnung_RolleFieldUpdateOperationsInput | $Enums.vereinszuordnung_Rolle
    Erstellt_am?: DateTimeFieldUpdateOperationsInput | Date | string
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vereinszuordnungUncheckedUpdateWithoutVereinInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Person_ID?: IntFieldUpdateOperationsInput | number
    Rolle?: Enumvereinszuordnung_RolleFieldUpdateOperationsInput | $Enums.vereinszuordnung_Rolle
    Erstellt_am?: DateTimeFieldUpdateOperationsInput | Date | string
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vereinszuordnungUncheckedUpdateManyWithoutVereinInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Person_ID?: IntFieldUpdateOperationsInput | number
    Rolle?: Enumvereinszuordnung_RolleFieldUpdateOperationsInput | $Enums.vereinszuordnung_Rolle
    Erstellt_am?: DateTimeFieldUpdateOperationsInput | Date | string
    Geaendert_am?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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