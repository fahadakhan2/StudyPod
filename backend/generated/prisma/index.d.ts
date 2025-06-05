
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Interest
 * 
 */
export type Interest = $Result.DefaultSelection<Prisma.$InterestPayload>
/**
 * Model UserInterest
 * 
 */
export type UserInterest = $Result.DefaultSelection<Prisma.$UserInterestPayload>
/**
 * Model AudioFile
 * 
 */
export type AudioFile = $Result.DefaultSelection<Prisma.$AudioFilePayload>
/**
 * Model PodcastSummary
 * 
 */
export type PodcastSummary = $Result.DefaultSelection<Prisma.$PodcastSummaryPayload>
/**
 * Model UserAudioFile
 * 
 */
export type UserAudioFile = $Result.DefaultSelection<Prisma.$UserAudioFilePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interest`: Exposes CRUD operations for the **Interest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interests
    * const interests = await prisma.interest.findMany()
    * ```
    */
  get interest(): Prisma.InterestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userInterest`: Exposes CRUD operations for the **UserInterest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInterests
    * const userInterests = await prisma.userInterest.findMany()
    * ```
    */
  get userInterest(): Prisma.UserInterestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audioFile`: Exposes CRUD operations for the **AudioFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioFiles
    * const audioFiles = await prisma.audioFile.findMany()
    * ```
    */
  get audioFile(): Prisma.AudioFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.podcastSummary`: Exposes CRUD operations for the **PodcastSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PodcastSummaries
    * const podcastSummaries = await prisma.podcastSummary.findMany()
    * ```
    */
  get podcastSummary(): Prisma.PodcastSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAudioFile`: Exposes CRUD operations for the **UserAudioFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAudioFiles
    * const userAudioFiles = await prisma.userAudioFile.findMany()
    * ```
    */
  get userAudioFile(): Prisma.UserAudioFileDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Interest: 'Interest',
    UserInterest: 'UserInterest',
    AudioFile: 'AudioFile',
    PodcastSummary: 'PodcastSummary',
    UserAudioFile: 'UserAudioFile'
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
      modelProps: "user" | "interest" | "userInterest" | "audioFile" | "podcastSummary" | "userAudioFile"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Interest: {
        payload: Prisma.$InterestPayload<ExtArgs>
        fields: Prisma.InterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          findFirst: {
            args: Prisma.InterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          findMany: {
            args: Prisma.InterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>[]
          }
          create: {
            args: Prisma.InterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          createMany: {
            args: Prisma.InterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          update: {
            args: Prisma.InterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          deleteMany: {
            args: Prisma.InterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          aggregate: {
            args: Prisma.InterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterest>
          }
          groupBy: {
            args: Prisma.InterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InterestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InterestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InterestCountArgs<ExtArgs>
            result: $Utils.Optional<InterestCountAggregateOutputType> | number
          }
        }
      }
      UserInterest: {
        payload: Prisma.$UserInterestPayload<ExtArgs>
        fields: Prisma.UserInterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload>
          }
          findFirst: {
            args: Prisma.UserInterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload>
          }
          findMany: {
            args: Prisma.UserInterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload>[]
          }
          create: {
            args: Prisma.UserInterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload>
          }
          createMany: {
            args: Prisma.UserInterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserInterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload>
          }
          update: {
            args: Prisma.UserInterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload>
          }
          deleteMany: {
            args: Prisma.UserInterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserInterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserInterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload>
          }
          aggregate: {
            args: Prisma.UserInterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserInterest>
          }
          groupBy: {
            args: Prisma.UserInterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserInterestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserInterestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserInterestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserInterestCountArgs<ExtArgs>
            result: $Utils.Optional<UserInterestCountAggregateOutputType> | number
          }
        }
      }
      AudioFile: {
        payload: Prisma.$AudioFilePayload<ExtArgs>
        fields: Prisma.AudioFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>
          }
          findFirst: {
            args: Prisma.AudioFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>
          }
          findMany: {
            args: Prisma.AudioFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>[]
          }
          create: {
            args: Prisma.AudioFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>
          }
          createMany: {
            args: Prisma.AudioFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AudioFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>
          }
          update: {
            args: Prisma.AudioFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>
          }
          deleteMany: {
            args: Prisma.AudioFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AudioFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioFilePayload>
          }
          aggregate: {
            args: Prisma.AudioFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudioFile>
          }
          groupBy: {
            args: Prisma.AudioFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioFileGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AudioFileFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AudioFileAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AudioFileCountArgs<ExtArgs>
            result: $Utils.Optional<AudioFileCountAggregateOutputType> | number
          }
        }
      }
      PodcastSummary: {
        payload: Prisma.$PodcastSummaryPayload<ExtArgs>
        fields: Prisma.PodcastSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PodcastSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PodcastSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastSummaryPayload>
          }
          findFirst: {
            args: Prisma.PodcastSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PodcastSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastSummaryPayload>
          }
          findMany: {
            args: Prisma.PodcastSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastSummaryPayload>[]
          }
          create: {
            args: Prisma.PodcastSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastSummaryPayload>
          }
          createMany: {
            args: Prisma.PodcastSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PodcastSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastSummaryPayload>
          }
          update: {
            args: Prisma.PodcastSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastSummaryPayload>
          }
          deleteMany: {
            args: Prisma.PodcastSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PodcastSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PodcastSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastSummaryPayload>
          }
          aggregate: {
            args: Prisma.PodcastSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePodcastSummary>
          }
          groupBy: {
            args: Prisma.PodcastSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PodcastSummaryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PodcastSummaryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PodcastSummaryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PodcastSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<PodcastSummaryCountAggregateOutputType> | number
          }
        }
      }
      UserAudioFile: {
        payload: Prisma.$UserAudioFilePayload<ExtArgs>
        fields: Prisma.UserAudioFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAudioFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAudioFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAudioFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAudioFilePayload>
          }
          findFirst: {
            args: Prisma.UserAudioFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAudioFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAudioFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAudioFilePayload>
          }
          findMany: {
            args: Prisma.UserAudioFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAudioFilePayload>[]
          }
          create: {
            args: Prisma.UserAudioFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAudioFilePayload>
          }
          createMany: {
            args: Prisma.UserAudioFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserAudioFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAudioFilePayload>
          }
          update: {
            args: Prisma.UserAudioFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAudioFilePayload>
          }
          deleteMany: {
            args: Prisma.UserAudioFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAudioFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAudioFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAudioFilePayload>
          }
          aggregate: {
            args: Prisma.UserAudioFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAudioFile>
          }
          groupBy: {
            args: Prisma.UserAudioFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAudioFileGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserAudioFileFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAudioFileAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserAudioFileCountArgs<ExtArgs>
            result: $Utils.Optional<UserAudioFileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    user?: UserOmit
    interest?: InterestOmit
    userInterest?: UserInterestOmit
    audioFile?: AudioFileOmit
    podcastSummary?: PodcastSummaryOmit
    userAudioFile?: UserAudioFileOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    playlistItems: number
    interests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlistItems?: boolean | UserCountOutputTypeCountPlaylistItemsArgs
    interests?: boolean | UserCountOutputTypeCountInterestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAudioFileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInterestWhereInput
  }


  /**
   * Count Type InterestCountOutputType
   */

  export type InterestCountOutputType = {
    users: number
  }

  export type InterestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | InterestCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * InterestCountOutputType without action
   */
  export type InterestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestCountOutputType
     */
    select?: InterestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterestCountOutputType without action
   */
  export type InterestCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInterestWhereInput
  }


  /**
   * Count Type AudioFileCountOutputType
   */

  export type AudioFileCountOutputType = {
    savedBy: number
  }

  export type AudioFileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | AudioFileCountOutputTypeCountSavedByArgs
  }

  // Custom InputTypes
  /**
   * AudioFileCountOutputType without action
   */
  export type AudioFileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFileCountOutputType
     */
    select?: AudioFileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AudioFileCountOutputType without action
   */
  export type AudioFileCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAudioFileWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firebaseId: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firebaseId: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firebaseId: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firebaseId?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firebaseId?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firebaseId?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firebaseId: string
    email: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseId?: boolean
    email?: boolean
    playlistItems?: boolean | User$playlistItemsArgs<ExtArgs>
    interests?: boolean | User$interestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    firebaseId?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firebaseId" | "email", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlistItems?: boolean | User$playlistItemsArgs<ExtArgs>
    interests?: boolean | User$interestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      playlistItems: Prisma.$UserAudioFilePayload<ExtArgs>[]
      interests: Prisma.$UserInterestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firebaseId: string
      email: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlistItems<T extends User$playlistItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$playlistItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAudioFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interests<T extends User$interestsArgs<ExtArgs> = {}>(args?: Subset<T, User$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firebaseId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.playlistItems
   */
  export type User$playlistItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAudioFile
     */
    select?: UserAudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAudioFile
     */
    omit?: UserAudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAudioFileInclude<ExtArgs> | null
    where?: UserAudioFileWhereInput
    orderBy?: UserAudioFileOrderByWithRelationInput | UserAudioFileOrderByWithRelationInput[]
    cursor?: UserAudioFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAudioFileScalarFieldEnum | UserAudioFileScalarFieldEnum[]
  }

  /**
   * User.interests
   */
  export type User$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    where?: UserInterestWhereInput
    orderBy?: UserInterestOrderByWithRelationInput | UserInterestOrderByWithRelationInput[]
    cursor?: UserInterestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserInterestScalarFieldEnum | UserInterestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Interest
   */

  export type AggregateInterest = {
    _count: InterestCountAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  export type InterestMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterestMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterestCountAggregateOutputType = {
    id: number
    name: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InterestMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterestMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterestCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interest to aggregate.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interests
    **/
    _count?: true | InterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestMaxAggregateInputType
  }

  export type GetInterestAggregateType<T extends InterestAggregateArgs> = {
        [P in keyof T & keyof AggregateInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterest[P]>
      : GetScalarType<T[P], AggregateInterest[P]>
  }




  export type InterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestWhereInput
    orderBy?: InterestOrderByWithAggregationInput | InterestOrderByWithAggregationInput[]
    by: InterestScalarFieldEnum[] | InterestScalarFieldEnum
    having?: InterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestCountAggregateInputType | true
    _min?: InterestMinAggregateInputType
    _max?: InterestMaxAggregateInputType
  }

  export type InterestGroupByOutputType = {
    id: string
    name: string
    category: string
    createdAt: Date
    updatedAt: Date
    _count: InterestCountAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  type GetInterestGroupByPayload<T extends InterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestGroupByOutputType[P]>
            : GetScalarType<T[P], InterestGroupByOutputType[P]>
        }
      >
    >


  export type InterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Interest$usersArgs<ExtArgs>
    _count?: boolean | InterestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interest"]>



  export type InterestSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["interest"]>
  export type InterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Interest$usersArgs<ExtArgs>
    _count?: boolean | InterestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interest"
    objects: {
      users: Prisma.$UserInterestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["interest"]>
    composites: {}
  }

  type InterestGetPayload<S extends boolean | null | undefined | InterestDefaultArgs> = $Result.GetResult<Prisma.$InterestPayload, S>

  type InterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterestCountAggregateInputType | true
    }

  export interface InterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interest'], meta: { name: 'Interest' } }
    /**
     * Find zero or one Interest that matches the filter.
     * @param {InterestFindUniqueArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterestFindUniqueArgs>(args: SelectSubset<T, InterestFindUniqueArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterestFindUniqueOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterestFindUniqueOrThrowArgs>(args: SelectSubset<T, InterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindFirstArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterestFindFirstArgs>(args?: SelectSubset<T, InterestFindFirstArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindFirstOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterestFindFirstOrThrowArgs>(args?: SelectSubset<T, InterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interests
     * const interests = await prisma.interest.findMany()
     * 
     * // Get first 10 Interests
     * const interests = await prisma.interest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interestWithIdOnly = await prisma.interest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterestFindManyArgs>(args?: SelectSubset<T, InterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interest.
     * @param {InterestCreateArgs} args - Arguments to create a Interest.
     * @example
     * // Create one Interest
     * const Interest = await prisma.interest.create({
     *   data: {
     *     // ... data to create a Interest
     *   }
     * })
     * 
     */
    create<T extends InterestCreateArgs>(args: SelectSubset<T, InterestCreateArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interests.
     * @param {InterestCreateManyArgs} args - Arguments to create many Interests.
     * @example
     * // Create many Interests
     * const interest = await prisma.interest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterestCreateManyArgs>(args?: SelectSubset<T, InterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Interest.
     * @param {InterestDeleteArgs} args - Arguments to delete one Interest.
     * @example
     * // Delete one Interest
     * const Interest = await prisma.interest.delete({
     *   where: {
     *     // ... filter to delete one Interest
     *   }
     * })
     * 
     */
    delete<T extends InterestDeleteArgs>(args: SelectSubset<T, InterestDeleteArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interest.
     * @param {InterestUpdateArgs} args - Arguments to update one Interest.
     * @example
     * // Update one Interest
     * const interest = await prisma.interest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterestUpdateArgs>(args: SelectSubset<T, InterestUpdateArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interests.
     * @param {InterestDeleteManyArgs} args - Arguments to filter Interests to delete.
     * @example
     * // Delete a few Interests
     * const { count } = await prisma.interest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterestDeleteManyArgs>(args?: SelectSubset<T, InterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interests
     * const interest = await prisma.interest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterestUpdateManyArgs>(args: SelectSubset<T, InterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Interest.
     * @param {InterestUpsertArgs} args - Arguments to update or create a Interest.
     * @example
     * // Update or create a Interest
     * const interest = await prisma.interest.upsert({
     *   create: {
     *     // ... data to create a Interest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interest we want to update
     *   }
     * })
     */
    upsert<T extends InterestUpsertArgs>(args: SelectSubset<T, InterestUpsertArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interests that matches the filter.
     * @param {InterestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const interest = await prisma.interest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: InterestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Interest.
     * @param {InterestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const interest = await prisma.interest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InterestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestCountArgs} args - Arguments to filter Interests to count.
     * @example
     * // Count the number of Interests
     * const count = await prisma.interest.count({
     *   where: {
     *     // ... the filter for the Interests we want to count
     *   }
     * })
    **/
    count<T extends InterestCountArgs>(
      args?: Subset<T, InterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterestAggregateArgs>(args: Subset<T, InterestAggregateArgs>): Prisma.PrismaPromise<GetInterestAggregateType<T>>

    /**
     * Group by Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestGroupByArgs} args - Group by arguments.
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
      T extends InterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterestGroupByArgs['orderBy'] }
        : { orderBy?: InterestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interest model
   */
  readonly fields: InterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Interest$usersArgs<ExtArgs> = {}>(args?: Subset<T, Interest$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Interest model
   */
  interface InterestFieldRefs {
    readonly id: FieldRef<"Interest", 'String'>
    readonly name: FieldRef<"Interest", 'String'>
    readonly category: FieldRef<"Interest", 'String'>
    readonly createdAt: FieldRef<"Interest", 'DateTime'>
    readonly updatedAt: FieldRef<"Interest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Interest findUnique
   */
  export type InterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest findUniqueOrThrow
   */
  export type InterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest findFirst
   */
  export type InterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest findFirstOrThrow
   */
  export type InterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest findMany
   */
  export type InterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interests to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest create
   */
  export type InterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The data needed to create a Interest.
     */
    data: XOR<InterestCreateInput, InterestUncheckedCreateInput>
  }

  /**
   * Interest createMany
   */
  export type InterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interests.
     */
    data: InterestCreateManyInput | InterestCreateManyInput[]
  }

  /**
   * Interest update
   */
  export type InterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The data needed to update a Interest.
     */
    data: XOR<InterestUpdateInput, InterestUncheckedUpdateInput>
    /**
     * Choose, which Interest to update.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest updateMany
   */
  export type InterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interests.
     */
    data: XOR<InterestUpdateManyMutationInput, InterestUncheckedUpdateManyInput>
    /**
     * Filter which Interests to update
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to update.
     */
    limit?: number
  }

  /**
   * Interest upsert
   */
  export type InterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The filter to search for the Interest to update in case it exists.
     */
    where: InterestWhereUniqueInput
    /**
     * In case the Interest found by the `where` argument doesn't exist, create a new Interest with this data.
     */
    create: XOR<InterestCreateInput, InterestUncheckedCreateInput>
    /**
     * In case the Interest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterestUpdateInput, InterestUncheckedUpdateInput>
  }

  /**
   * Interest delete
   */
  export type InterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter which Interest to delete.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest deleteMany
   */
  export type InterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interests to delete
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to delete.
     */
    limit?: number
  }

  /**
   * Interest findRaw
   */
  export type InterestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Interest aggregateRaw
   */
  export type InterestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Interest.users
   */
  export type Interest$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    where?: UserInterestWhereInput
    orderBy?: UserInterestOrderByWithRelationInput | UserInterestOrderByWithRelationInput[]
    cursor?: UserInterestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserInterestScalarFieldEnum | UserInterestScalarFieldEnum[]
  }

  /**
   * Interest without action
   */
  export type InterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
  }


  /**
   * Model UserInterest
   */

  export type AggregateUserInterest = {
    _count: UserInterestCountAggregateOutputType | null
    _min: UserInterestMinAggregateOutputType | null
    _max: UserInterestMaxAggregateOutputType | null
  }

  export type UserInterestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    interestId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserInterestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    interestId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserInterestCountAggregateOutputType = {
    id: number
    userId: number
    interestId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserInterestMinAggregateInputType = {
    id?: true
    userId?: true
    interestId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserInterestMaxAggregateInputType = {
    id?: true
    userId?: true
    interestId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserInterestCountAggregateInputType = {
    id?: true
    userId?: true
    interestId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserInterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInterest to aggregate.
     */
    where?: UserInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInterests to fetch.
     */
    orderBy?: UserInterestOrderByWithRelationInput | UserInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInterests
    **/
    _count?: true | UserInterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInterestMaxAggregateInputType
  }

  export type GetUserInterestAggregateType<T extends UserInterestAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInterest[P]>
      : GetScalarType<T[P], AggregateUserInterest[P]>
  }




  export type UserInterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInterestWhereInput
    orderBy?: UserInterestOrderByWithAggregationInput | UserInterestOrderByWithAggregationInput[]
    by: UserInterestScalarFieldEnum[] | UserInterestScalarFieldEnum
    having?: UserInterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInterestCountAggregateInputType | true
    _min?: UserInterestMinAggregateInputType
    _max?: UserInterestMaxAggregateInputType
  }

  export type UserInterestGroupByOutputType = {
    id: string
    userId: string
    interestId: string
    createdAt: Date
    updatedAt: Date
    _count: UserInterestCountAggregateOutputType | null
    _min: UserInterestMinAggregateOutputType | null
    _max: UserInterestMaxAggregateOutputType | null
  }

  type GetUserInterestGroupByPayload<T extends UserInterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInterestGroupByOutputType[P]>
            : GetScalarType<T[P], UserInterestGroupByOutputType[P]>
        }
      >
    >


  export type UserInterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    interestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInterest"]>



  export type UserInterestSelectScalar = {
    id?: boolean
    userId?: boolean
    interestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "interestId" | "createdAt" | "updatedAt", ExtArgs["result"]["userInterest"]>
  export type UserInterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }

  export type $UserInterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInterest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      interest: Prisma.$InterestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      interestId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userInterest"]>
    composites: {}
  }

  type UserInterestGetPayload<S extends boolean | null | undefined | UserInterestDefaultArgs> = $Result.GetResult<Prisma.$UserInterestPayload, S>

  type UserInterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserInterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserInterestCountAggregateInputType | true
    }

  export interface UserInterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInterest'], meta: { name: 'UserInterest' } }
    /**
     * Find zero or one UserInterest that matches the filter.
     * @param {UserInterestFindUniqueArgs} args - Arguments to find a UserInterest
     * @example
     * // Get one UserInterest
     * const userInterest = await prisma.userInterest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInterestFindUniqueArgs>(args: SelectSubset<T, UserInterestFindUniqueArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserInterest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserInterestFindUniqueOrThrowArgs} args - Arguments to find a UserInterest
     * @example
     * // Get one UserInterest
     * const userInterest = await prisma.userInterest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInterestFindUniqueOrThrowArgs>(args: SelectSubset<T, UserInterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInterest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestFindFirstArgs} args - Arguments to find a UserInterest
     * @example
     * // Get one UserInterest
     * const userInterest = await prisma.userInterest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInterestFindFirstArgs>(args?: SelectSubset<T, UserInterestFindFirstArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInterest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestFindFirstOrThrowArgs} args - Arguments to find a UserInterest
     * @example
     * // Get one UserInterest
     * const userInterest = await prisma.userInterest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInterestFindFirstOrThrowArgs>(args?: SelectSubset<T, UserInterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInterests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInterests
     * const userInterests = await prisma.userInterest.findMany()
     * 
     * // Get first 10 UserInterests
     * const userInterests = await prisma.userInterest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userInterestWithIdOnly = await prisma.userInterest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserInterestFindManyArgs>(args?: SelectSubset<T, UserInterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserInterest.
     * @param {UserInterestCreateArgs} args - Arguments to create a UserInterest.
     * @example
     * // Create one UserInterest
     * const UserInterest = await prisma.userInterest.create({
     *   data: {
     *     // ... data to create a UserInterest
     *   }
     * })
     * 
     */
    create<T extends UserInterestCreateArgs>(args: SelectSubset<T, UserInterestCreateArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserInterests.
     * @param {UserInterestCreateManyArgs} args - Arguments to create many UserInterests.
     * @example
     * // Create many UserInterests
     * const userInterest = await prisma.userInterest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserInterestCreateManyArgs>(args?: SelectSubset<T, UserInterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserInterest.
     * @param {UserInterestDeleteArgs} args - Arguments to delete one UserInterest.
     * @example
     * // Delete one UserInterest
     * const UserInterest = await prisma.userInterest.delete({
     *   where: {
     *     // ... filter to delete one UserInterest
     *   }
     * })
     * 
     */
    delete<T extends UserInterestDeleteArgs>(args: SelectSubset<T, UserInterestDeleteArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserInterest.
     * @param {UserInterestUpdateArgs} args - Arguments to update one UserInterest.
     * @example
     * // Update one UserInterest
     * const userInterest = await prisma.userInterest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserInterestUpdateArgs>(args: SelectSubset<T, UserInterestUpdateArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserInterests.
     * @param {UserInterestDeleteManyArgs} args - Arguments to filter UserInterests to delete.
     * @example
     * // Delete a few UserInterests
     * const { count } = await prisma.userInterest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserInterestDeleteManyArgs>(args?: SelectSubset<T, UserInterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInterests
     * const userInterest = await prisma.userInterest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserInterestUpdateManyArgs>(args: SelectSubset<T, UserInterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserInterest.
     * @param {UserInterestUpsertArgs} args - Arguments to update or create a UserInterest.
     * @example
     * // Update or create a UserInterest
     * const userInterest = await prisma.userInterest.upsert({
     *   create: {
     *     // ... data to create a UserInterest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInterest we want to update
     *   }
     * })
     */
    upsert<T extends UserInterestUpsertArgs>(args: SelectSubset<T, UserInterestUpsertArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInterests that matches the filter.
     * @param {UserInterestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userInterest = await prisma.userInterest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserInterestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserInterest.
     * @param {UserInterestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userInterest = await prisma.userInterest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserInterestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestCountArgs} args - Arguments to filter UserInterests to count.
     * @example
     * // Count the number of UserInterests
     * const count = await prisma.userInterest.count({
     *   where: {
     *     // ... the filter for the UserInterests we want to count
     *   }
     * })
    **/
    count<T extends UserInterestCountArgs>(
      args?: Subset<T, UserInterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserInterestAggregateArgs>(args: Subset<T, UserInterestAggregateArgs>): Prisma.PrismaPromise<GetUserInterestAggregateType<T>>

    /**
     * Group by UserInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestGroupByArgs} args - Group by arguments.
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
      T extends UserInterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInterestGroupByArgs['orderBy'] }
        : { orderBy?: UserInterestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserInterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInterest model
   */
  readonly fields: UserInterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInterest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interest<T extends InterestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterestDefaultArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserInterest model
   */
  interface UserInterestFieldRefs {
    readonly id: FieldRef<"UserInterest", 'String'>
    readonly userId: FieldRef<"UserInterest", 'String'>
    readonly interestId: FieldRef<"UserInterest", 'String'>
    readonly createdAt: FieldRef<"UserInterest", 'DateTime'>
    readonly updatedAt: FieldRef<"UserInterest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserInterest findUnique
   */
  export type UserInterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserInterest to fetch.
     */
    where: UserInterestWhereUniqueInput
  }

  /**
   * UserInterest findUniqueOrThrow
   */
  export type UserInterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserInterest to fetch.
     */
    where: UserInterestWhereUniqueInput
  }

  /**
   * UserInterest findFirst
   */
  export type UserInterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserInterest to fetch.
     */
    where?: UserInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInterests to fetch.
     */
    orderBy?: UserInterestOrderByWithRelationInput | UserInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInterests.
     */
    cursor?: UserInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInterests.
     */
    distinct?: UserInterestScalarFieldEnum | UserInterestScalarFieldEnum[]
  }

  /**
   * UserInterest findFirstOrThrow
   */
  export type UserInterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserInterest to fetch.
     */
    where?: UserInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInterests to fetch.
     */
    orderBy?: UserInterestOrderByWithRelationInput | UserInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInterests.
     */
    cursor?: UserInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInterests.
     */
    distinct?: UserInterestScalarFieldEnum | UserInterestScalarFieldEnum[]
  }

  /**
   * UserInterest findMany
   */
  export type UserInterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserInterests to fetch.
     */
    where?: UserInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInterests to fetch.
     */
    orderBy?: UserInterestOrderByWithRelationInput | UserInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInterests.
     */
    cursor?: UserInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInterests.
     */
    skip?: number
    distinct?: UserInterestScalarFieldEnum | UserInterestScalarFieldEnum[]
  }

  /**
   * UserInterest create
   */
  export type UserInterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * The data needed to create a UserInterest.
     */
    data: XOR<UserInterestCreateInput, UserInterestUncheckedCreateInput>
  }

  /**
   * UserInterest createMany
   */
  export type UserInterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInterests.
     */
    data: UserInterestCreateManyInput | UserInterestCreateManyInput[]
  }

  /**
   * UserInterest update
   */
  export type UserInterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * The data needed to update a UserInterest.
     */
    data: XOR<UserInterestUpdateInput, UserInterestUncheckedUpdateInput>
    /**
     * Choose, which UserInterest to update.
     */
    where: UserInterestWhereUniqueInput
  }

  /**
   * UserInterest updateMany
   */
  export type UserInterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInterests.
     */
    data: XOR<UserInterestUpdateManyMutationInput, UserInterestUncheckedUpdateManyInput>
    /**
     * Filter which UserInterests to update
     */
    where?: UserInterestWhereInput
    /**
     * Limit how many UserInterests to update.
     */
    limit?: number
  }

  /**
   * UserInterest upsert
   */
  export type UserInterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * The filter to search for the UserInterest to update in case it exists.
     */
    where: UserInterestWhereUniqueInput
    /**
     * In case the UserInterest found by the `where` argument doesn't exist, create a new UserInterest with this data.
     */
    create: XOR<UserInterestCreateInput, UserInterestUncheckedCreateInput>
    /**
     * In case the UserInterest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInterestUpdateInput, UserInterestUncheckedUpdateInput>
  }

  /**
   * UserInterest delete
   */
  export type UserInterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * Filter which UserInterest to delete.
     */
    where: UserInterestWhereUniqueInput
  }

  /**
   * UserInterest deleteMany
   */
  export type UserInterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInterests to delete
     */
    where?: UserInterestWhereInput
    /**
     * Limit how many UserInterests to delete.
     */
    limit?: number
  }

  /**
   * UserInterest findRaw
   */
  export type UserInterestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserInterest aggregateRaw
   */
  export type UserInterestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserInterest without action
   */
  export type UserInterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
  }


  /**
   * Model AudioFile
   */

  export type AggregateAudioFile = {
    _count: AudioFileCountAggregateOutputType | null
    _min: AudioFileMinAggregateOutputType | null
    _max: AudioFileMaxAggregateOutputType | null
  }

  export type AudioFileMinAggregateOutputType = {
    id: string | null
    s3Key: string | null
    originalName: string | null
    contentType: string | null
    url: string | null
    uploadDate: Date | null
  }

  export type AudioFileMaxAggregateOutputType = {
    id: string | null
    s3Key: string | null
    originalName: string | null
    contentType: string | null
    url: string | null
    uploadDate: Date | null
  }

  export type AudioFileCountAggregateOutputType = {
    id: number
    s3Key: number
    originalName: number
    contentType: number
    url: number
    uploadDate: number
    _all: number
  }


  export type AudioFileMinAggregateInputType = {
    id?: true
    s3Key?: true
    originalName?: true
    contentType?: true
    url?: true
    uploadDate?: true
  }

  export type AudioFileMaxAggregateInputType = {
    id?: true
    s3Key?: true
    originalName?: true
    contentType?: true
    url?: true
    uploadDate?: true
  }

  export type AudioFileCountAggregateInputType = {
    id?: true
    s3Key?: true
    originalName?: true
    contentType?: true
    url?: true
    uploadDate?: true
    _all?: true
  }

  export type AudioFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioFile to aggregate.
     */
    where?: AudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioFiles to fetch.
     */
    orderBy?: AudioFileOrderByWithRelationInput | AudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioFiles
    **/
    _count?: true | AudioFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioFileMaxAggregateInputType
  }

  export type GetAudioFileAggregateType<T extends AudioFileAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioFile[P]>
      : GetScalarType<T[P], AggregateAudioFile[P]>
  }




  export type AudioFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioFileWhereInput
    orderBy?: AudioFileOrderByWithAggregationInput | AudioFileOrderByWithAggregationInput[]
    by: AudioFileScalarFieldEnum[] | AudioFileScalarFieldEnum
    having?: AudioFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioFileCountAggregateInputType | true
    _min?: AudioFileMinAggregateInputType
    _max?: AudioFileMaxAggregateInputType
  }

  export type AudioFileGroupByOutputType = {
    id: string
    s3Key: string
    originalName: string | null
    contentType: string
    url: string
    uploadDate: Date
    _count: AudioFileCountAggregateOutputType | null
    _min: AudioFileMinAggregateOutputType | null
    _max: AudioFileMaxAggregateOutputType | null
  }

  type GetAudioFileGroupByPayload<T extends AudioFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioFileGroupByOutputType[P]>
            : GetScalarType<T[P], AudioFileGroupByOutputType[P]>
        }
      >
    >


  export type AudioFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    s3Key?: boolean
    originalName?: boolean
    contentType?: boolean
    url?: boolean
    uploadDate?: boolean
    summary?: boolean | AudioFile$summaryArgs<ExtArgs>
    savedBy?: boolean | AudioFile$savedByArgs<ExtArgs>
    _count?: boolean | AudioFileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audioFile"]>



  export type AudioFileSelectScalar = {
    id?: boolean
    s3Key?: boolean
    originalName?: boolean
    contentType?: boolean
    url?: boolean
    uploadDate?: boolean
  }

  export type AudioFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "s3Key" | "originalName" | "contentType" | "url" | "uploadDate", ExtArgs["result"]["audioFile"]>
  export type AudioFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    summary?: boolean | AudioFile$summaryArgs<ExtArgs>
    savedBy?: boolean | AudioFile$savedByArgs<ExtArgs>
    _count?: boolean | AudioFileCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AudioFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioFile"
    objects: {
      summary: Prisma.$PodcastSummaryPayload<ExtArgs> | null
      savedBy: Prisma.$UserAudioFilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      s3Key: string
      originalName: string | null
      contentType: string
      url: string
      uploadDate: Date
    }, ExtArgs["result"]["audioFile"]>
    composites: {}
  }

  type AudioFileGetPayload<S extends boolean | null | undefined | AudioFileDefaultArgs> = $Result.GetResult<Prisma.$AudioFilePayload, S>

  type AudioFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudioFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudioFileCountAggregateInputType | true
    }

  export interface AudioFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioFile'], meta: { name: 'AudioFile' } }
    /**
     * Find zero or one AudioFile that matches the filter.
     * @param {AudioFileFindUniqueArgs} args - Arguments to find a AudioFile
     * @example
     * // Get one AudioFile
     * const audioFile = await prisma.audioFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioFileFindUniqueArgs>(args: SelectSubset<T, AudioFileFindUniqueArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AudioFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudioFileFindUniqueOrThrowArgs} args - Arguments to find a AudioFile
     * @example
     * // Get one AudioFile
     * const audioFile = await prisma.audioFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioFileFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFileFindFirstArgs} args - Arguments to find a AudioFile
     * @example
     * // Get one AudioFile
     * const audioFile = await prisma.audioFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioFileFindFirstArgs>(args?: SelectSubset<T, AudioFileFindFirstArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFileFindFirstOrThrowArgs} args - Arguments to find a AudioFile
     * @example
     * // Get one AudioFile
     * const audioFile = await prisma.audioFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioFileFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioFiles
     * const audioFiles = await prisma.audioFile.findMany()
     * 
     * // Get first 10 AudioFiles
     * const audioFiles = await prisma.audioFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioFileWithIdOnly = await prisma.audioFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioFileFindManyArgs>(args?: SelectSubset<T, AudioFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AudioFile.
     * @param {AudioFileCreateArgs} args - Arguments to create a AudioFile.
     * @example
     * // Create one AudioFile
     * const AudioFile = await prisma.audioFile.create({
     *   data: {
     *     // ... data to create a AudioFile
     *   }
     * })
     * 
     */
    create<T extends AudioFileCreateArgs>(args: SelectSubset<T, AudioFileCreateArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AudioFiles.
     * @param {AudioFileCreateManyArgs} args - Arguments to create many AudioFiles.
     * @example
     * // Create many AudioFiles
     * const audioFile = await prisma.audioFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioFileCreateManyArgs>(args?: SelectSubset<T, AudioFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AudioFile.
     * @param {AudioFileDeleteArgs} args - Arguments to delete one AudioFile.
     * @example
     * // Delete one AudioFile
     * const AudioFile = await prisma.audioFile.delete({
     *   where: {
     *     // ... filter to delete one AudioFile
     *   }
     * })
     * 
     */
    delete<T extends AudioFileDeleteArgs>(args: SelectSubset<T, AudioFileDeleteArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AudioFile.
     * @param {AudioFileUpdateArgs} args - Arguments to update one AudioFile.
     * @example
     * // Update one AudioFile
     * const audioFile = await prisma.audioFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioFileUpdateArgs>(args: SelectSubset<T, AudioFileUpdateArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AudioFiles.
     * @param {AudioFileDeleteManyArgs} args - Arguments to filter AudioFiles to delete.
     * @example
     * // Delete a few AudioFiles
     * const { count } = await prisma.audioFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioFileDeleteManyArgs>(args?: SelectSubset<T, AudioFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioFiles
     * const audioFile = await prisma.audioFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioFileUpdateManyArgs>(args: SelectSubset<T, AudioFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AudioFile.
     * @param {AudioFileUpsertArgs} args - Arguments to update or create a AudioFile.
     * @example
     * // Update or create a AudioFile
     * const audioFile = await prisma.audioFile.upsert({
     *   create: {
     *     // ... data to create a AudioFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioFile we want to update
     *   }
     * })
     */
    upsert<T extends AudioFileUpsertArgs>(args: SelectSubset<T, AudioFileUpsertArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioFiles that matches the filter.
     * @param {AudioFileFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const audioFile = await prisma.audioFile.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AudioFileFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AudioFile.
     * @param {AudioFileAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const audioFile = await prisma.audioFile.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AudioFileAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AudioFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFileCountArgs} args - Arguments to filter AudioFiles to count.
     * @example
     * // Count the number of AudioFiles
     * const count = await prisma.audioFile.count({
     *   where: {
     *     // ... the filter for the AudioFiles we want to count
     *   }
     * })
    **/
    count<T extends AudioFileCountArgs>(
      args?: Subset<T, AudioFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudioFileAggregateArgs>(args: Subset<T, AudioFileAggregateArgs>): Prisma.PrismaPromise<GetAudioFileAggregateType<T>>

    /**
     * Group by AudioFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioFileGroupByArgs} args - Group by arguments.
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
      T extends AudioFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioFileGroupByArgs['orderBy'] }
        : { orderBy?: AudioFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudioFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioFile model
   */
  readonly fields: AudioFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    summary<T extends AudioFile$summaryArgs<ExtArgs> = {}>(args?: Subset<T, AudioFile$summaryArgs<ExtArgs>>): Prisma__PodcastSummaryClient<$Result.GetResult<Prisma.$PodcastSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    savedBy<T extends AudioFile$savedByArgs<ExtArgs> = {}>(args?: Subset<T, AudioFile$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAudioFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AudioFile model
   */
  interface AudioFileFieldRefs {
    readonly id: FieldRef<"AudioFile", 'String'>
    readonly s3Key: FieldRef<"AudioFile", 'String'>
    readonly originalName: FieldRef<"AudioFile", 'String'>
    readonly contentType: FieldRef<"AudioFile", 'String'>
    readonly url: FieldRef<"AudioFile", 'String'>
    readonly uploadDate: FieldRef<"AudioFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AudioFile findUnique
   */
  export type AudioFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * Filter, which AudioFile to fetch.
     */
    where: AudioFileWhereUniqueInput
  }

  /**
   * AudioFile findUniqueOrThrow
   */
  export type AudioFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * Filter, which AudioFile to fetch.
     */
    where: AudioFileWhereUniqueInput
  }

  /**
   * AudioFile findFirst
   */
  export type AudioFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * Filter, which AudioFile to fetch.
     */
    where?: AudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioFiles to fetch.
     */
    orderBy?: AudioFileOrderByWithRelationInput | AudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioFiles.
     */
    cursor?: AudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioFiles.
     */
    distinct?: AudioFileScalarFieldEnum | AudioFileScalarFieldEnum[]
  }

  /**
   * AudioFile findFirstOrThrow
   */
  export type AudioFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * Filter, which AudioFile to fetch.
     */
    where?: AudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioFiles to fetch.
     */
    orderBy?: AudioFileOrderByWithRelationInput | AudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioFiles.
     */
    cursor?: AudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioFiles.
     */
    distinct?: AudioFileScalarFieldEnum | AudioFileScalarFieldEnum[]
  }

  /**
   * AudioFile findMany
   */
  export type AudioFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * Filter, which AudioFiles to fetch.
     */
    where?: AudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioFiles to fetch.
     */
    orderBy?: AudioFileOrderByWithRelationInput | AudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioFiles.
     */
    cursor?: AudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioFiles.
     */
    skip?: number
    distinct?: AudioFileScalarFieldEnum | AudioFileScalarFieldEnum[]
  }

  /**
   * AudioFile create
   */
  export type AudioFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * The data needed to create a AudioFile.
     */
    data: XOR<AudioFileCreateInput, AudioFileUncheckedCreateInput>
  }

  /**
   * AudioFile createMany
   */
  export type AudioFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioFiles.
     */
    data: AudioFileCreateManyInput | AudioFileCreateManyInput[]
  }

  /**
   * AudioFile update
   */
  export type AudioFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * The data needed to update a AudioFile.
     */
    data: XOR<AudioFileUpdateInput, AudioFileUncheckedUpdateInput>
    /**
     * Choose, which AudioFile to update.
     */
    where: AudioFileWhereUniqueInput
  }

  /**
   * AudioFile updateMany
   */
  export type AudioFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioFiles.
     */
    data: XOR<AudioFileUpdateManyMutationInput, AudioFileUncheckedUpdateManyInput>
    /**
     * Filter which AudioFiles to update
     */
    where?: AudioFileWhereInput
    /**
     * Limit how many AudioFiles to update.
     */
    limit?: number
  }

  /**
   * AudioFile upsert
   */
  export type AudioFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * The filter to search for the AudioFile to update in case it exists.
     */
    where: AudioFileWhereUniqueInput
    /**
     * In case the AudioFile found by the `where` argument doesn't exist, create a new AudioFile with this data.
     */
    create: XOR<AudioFileCreateInput, AudioFileUncheckedCreateInput>
    /**
     * In case the AudioFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioFileUpdateInput, AudioFileUncheckedUpdateInput>
  }

  /**
   * AudioFile delete
   */
  export type AudioFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    /**
     * Filter which AudioFile to delete.
     */
    where: AudioFileWhereUniqueInput
  }

  /**
   * AudioFile deleteMany
   */
  export type AudioFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioFiles to delete
     */
    where?: AudioFileWhereInput
    /**
     * Limit how many AudioFiles to delete.
     */
    limit?: number
  }

  /**
   * AudioFile findRaw
   */
  export type AudioFileFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AudioFile aggregateRaw
   */
  export type AudioFileAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AudioFile.summary
   */
  export type AudioFile$summaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PodcastSummary
     */
    select?: PodcastSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PodcastSummary
     */
    omit?: PodcastSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastSummaryInclude<ExtArgs> | null
    where?: PodcastSummaryWhereInput
  }

  /**
   * AudioFile.savedBy
   */
  export type AudioFile$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAudioFile
     */
    select?: UserAudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAudioFile
     */
    omit?: UserAudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAudioFileInclude<ExtArgs> | null
    where?: UserAudioFileWhereInput
    orderBy?: UserAudioFileOrderByWithRelationInput | UserAudioFileOrderByWithRelationInput[]
    cursor?: UserAudioFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAudioFileScalarFieldEnum | UserAudioFileScalarFieldEnum[]
  }

  /**
   * AudioFile without action
   */
  export type AudioFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
  }


  /**
   * Model PodcastSummary
   */

  export type AggregatePodcastSummary = {
    _count: PodcastSummaryCountAggregateOutputType | null
    _min: PodcastSummaryMinAggregateOutputType | null
    _max: PodcastSummaryMaxAggregateOutputType | null
  }

  export type PodcastSummaryMinAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    audioId: string | null
  }

  export type PodcastSummaryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    audioId: string | null
  }

  export type PodcastSummaryCountAggregateOutputType = {
    id: number
    title: number
    summary: number
    keywords: number
    audioId: number
    _all: number
  }


  export type PodcastSummaryMinAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    audioId?: true
  }

  export type PodcastSummaryMaxAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    audioId?: true
  }

  export type PodcastSummaryCountAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    keywords?: true
    audioId?: true
    _all?: true
  }

  export type PodcastSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PodcastSummary to aggregate.
     */
    where?: PodcastSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PodcastSummaries to fetch.
     */
    orderBy?: PodcastSummaryOrderByWithRelationInput | PodcastSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PodcastSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PodcastSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PodcastSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PodcastSummaries
    **/
    _count?: true | PodcastSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PodcastSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PodcastSummaryMaxAggregateInputType
  }

  export type GetPodcastSummaryAggregateType<T extends PodcastSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregatePodcastSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePodcastSummary[P]>
      : GetScalarType<T[P], AggregatePodcastSummary[P]>
  }




  export type PodcastSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PodcastSummaryWhereInput
    orderBy?: PodcastSummaryOrderByWithAggregationInput | PodcastSummaryOrderByWithAggregationInput[]
    by: PodcastSummaryScalarFieldEnum[] | PodcastSummaryScalarFieldEnum
    having?: PodcastSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PodcastSummaryCountAggregateInputType | true
    _min?: PodcastSummaryMinAggregateInputType
    _max?: PodcastSummaryMaxAggregateInputType
  }

  export type PodcastSummaryGroupByOutputType = {
    id: string
    title: string
    summary: string
    keywords: string[]
    audioId: string | null
    _count: PodcastSummaryCountAggregateOutputType | null
    _min: PodcastSummaryMinAggregateOutputType | null
    _max: PodcastSummaryMaxAggregateOutputType | null
  }

  type GetPodcastSummaryGroupByPayload<T extends PodcastSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PodcastSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PodcastSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PodcastSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], PodcastSummaryGroupByOutputType[P]>
        }
      >
    >


  export type PodcastSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    keywords?: boolean
    audioId?: boolean
    audio?: boolean | PodcastSummary$audioArgs<ExtArgs>
  }, ExtArgs["result"]["podcastSummary"]>



  export type PodcastSummarySelectScalar = {
    id?: boolean
    title?: boolean
    summary?: boolean
    keywords?: boolean
    audioId?: boolean
  }

  export type PodcastSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "summary" | "keywords" | "audioId", ExtArgs["result"]["podcastSummary"]>
  export type PodcastSummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audio?: boolean | PodcastSummary$audioArgs<ExtArgs>
  }

  export type $PodcastSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PodcastSummary"
    objects: {
      audio: Prisma.$AudioFilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      summary: string
      keywords: string[]
      audioId: string | null
    }, ExtArgs["result"]["podcastSummary"]>
    composites: {}
  }

  type PodcastSummaryGetPayload<S extends boolean | null | undefined | PodcastSummaryDefaultArgs> = $Result.GetResult<Prisma.$PodcastSummaryPayload, S>

  type PodcastSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PodcastSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PodcastSummaryCountAggregateInputType | true
    }

  export interface PodcastSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PodcastSummary'], meta: { name: 'PodcastSummary' } }
    /**
     * Find zero or one PodcastSummary that matches the filter.
     * @param {PodcastSummaryFindUniqueArgs} args - Arguments to find a PodcastSummary
     * @example
     * // Get one PodcastSummary
     * const podcastSummary = await prisma.podcastSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PodcastSummaryFindUniqueArgs>(args: SelectSubset<T, PodcastSummaryFindUniqueArgs<ExtArgs>>): Prisma__PodcastSummaryClient<$Result.GetResult<Prisma.$PodcastSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PodcastSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PodcastSummaryFindUniqueOrThrowArgs} args - Arguments to find a PodcastSummary
     * @example
     * // Get one PodcastSummary
     * const podcastSummary = await prisma.podcastSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PodcastSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, PodcastSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PodcastSummaryClient<$Result.GetResult<Prisma.$PodcastSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PodcastSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastSummaryFindFirstArgs} args - Arguments to find a PodcastSummary
     * @example
     * // Get one PodcastSummary
     * const podcastSummary = await prisma.podcastSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PodcastSummaryFindFirstArgs>(args?: SelectSubset<T, PodcastSummaryFindFirstArgs<ExtArgs>>): Prisma__PodcastSummaryClient<$Result.GetResult<Prisma.$PodcastSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PodcastSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastSummaryFindFirstOrThrowArgs} args - Arguments to find a PodcastSummary
     * @example
     * // Get one PodcastSummary
     * const podcastSummary = await prisma.podcastSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PodcastSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, PodcastSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PodcastSummaryClient<$Result.GetResult<Prisma.$PodcastSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PodcastSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PodcastSummaries
     * const podcastSummaries = await prisma.podcastSummary.findMany()
     * 
     * // Get first 10 PodcastSummaries
     * const podcastSummaries = await prisma.podcastSummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const podcastSummaryWithIdOnly = await prisma.podcastSummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PodcastSummaryFindManyArgs>(args?: SelectSubset<T, PodcastSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PodcastSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PodcastSummary.
     * @param {PodcastSummaryCreateArgs} args - Arguments to create a PodcastSummary.
     * @example
     * // Create one PodcastSummary
     * const PodcastSummary = await prisma.podcastSummary.create({
     *   data: {
     *     // ... data to create a PodcastSummary
     *   }
     * })
     * 
     */
    create<T extends PodcastSummaryCreateArgs>(args: SelectSubset<T, PodcastSummaryCreateArgs<ExtArgs>>): Prisma__PodcastSummaryClient<$Result.GetResult<Prisma.$PodcastSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PodcastSummaries.
     * @param {PodcastSummaryCreateManyArgs} args - Arguments to create many PodcastSummaries.
     * @example
     * // Create many PodcastSummaries
     * const podcastSummary = await prisma.podcastSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PodcastSummaryCreateManyArgs>(args?: SelectSubset<T, PodcastSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PodcastSummary.
     * @param {PodcastSummaryDeleteArgs} args - Arguments to delete one PodcastSummary.
     * @example
     * // Delete one PodcastSummary
     * const PodcastSummary = await prisma.podcastSummary.delete({
     *   where: {
     *     // ... filter to delete one PodcastSummary
     *   }
     * })
     * 
     */
    delete<T extends PodcastSummaryDeleteArgs>(args: SelectSubset<T, PodcastSummaryDeleteArgs<ExtArgs>>): Prisma__PodcastSummaryClient<$Result.GetResult<Prisma.$PodcastSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PodcastSummary.
     * @param {PodcastSummaryUpdateArgs} args - Arguments to update one PodcastSummary.
     * @example
     * // Update one PodcastSummary
     * const podcastSummary = await prisma.podcastSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PodcastSummaryUpdateArgs>(args: SelectSubset<T, PodcastSummaryUpdateArgs<ExtArgs>>): Prisma__PodcastSummaryClient<$Result.GetResult<Prisma.$PodcastSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PodcastSummaries.
     * @param {PodcastSummaryDeleteManyArgs} args - Arguments to filter PodcastSummaries to delete.
     * @example
     * // Delete a few PodcastSummaries
     * const { count } = await prisma.podcastSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PodcastSummaryDeleteManyArgs>(args?: SelectSubset<T, PodcastSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PodcastSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PodcastSummaries
     * const podcastSummary = await prisma.podcastSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PodcastSummaryUpdateManyArgs>(args: SelectSubset<T, PodcastSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PodcastSummary.
     * @param {PodcastSummaryUpsertArgs} args - Arguments to update or create a PodcastSummary.
     * @example
     * // Update or create a PodcastSummary
     * const podcastSummary = await prisma.podcastSummary.upsert({
     *   create: {
     *     // ... data to create a PodcastSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PodcastSummary we want to update
     *   }
     * })
     */
    upsert<T extends PodcastSummaryUpsertArgs>(args: SelectSubset<T, PodcastSummaryUpsertArgs<ExtArgs>>): Prisma__PodcastSummaryClient<$Result.GetResult<Prisma.$PodcastSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PodcastSummaries that matches the filter.
     * @param {PodcastSummaryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const podcastSummary = await prisma.podcastSummary.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PodcastSummaryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PodcastSummary.
     * @param {PodcastSummaryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const podcastSummary = await prisma.podcastSummary.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PodcastSummaryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PodcastSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastSummaryCountArgs} args - Arguments to filter PodcastSummaries to count.
     * @example
     * // Count the number of PodcastSummaries
     * const count = await prisma.podcastSummary.count({
     *   where: {
     *     // ... the filter for the PodcastSummaries we want to count
     *   }
     * })
    **/
    count<T extends PodcastSummaryCountArgs>(
      args?: Subset<T, PodcastSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PodcastSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PodcastSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PodcastSummaryAggregateArgs>(args: Subset<T, PodcastSummaryAggregateArgs>): Prisma.PrismaPromise<GetPodcastSummaryAggregateType<T>>

    /**
     * Group by PodcastSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastSummaryGroupByArgs} args - Group by arguments.
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
      T extends PodcastSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PodcastSummaryGroupByArgs['orderBy'] }
        : { orderBy?: PodcastSummaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PodcastSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPodcastSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PodcastSummary model
   */
  readonly fields: PodcastSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PodcastSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PodcastSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audio<T extends PodcastSummary$audioArgs<ExtArgs> = {}>(args?: Subset<T, PodcastSummary$audioArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PodcastSummary model
   */
  interface PodcastSummaryFieldRefs {
    readonly id: FieldRef<"PodcastSummary", 'String'>
    readonly title: FieldRef<"PodcastSummary", 'String'>
    readonly summary: FieldRef<"PodcastSummary", 'String'>
    readonly keywords: FieldRef<"PodcastSummary", 'String[]'>
    readonly audioId: FieldRef<"PodcastSummary", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PodcastSummary findUnique
   */
  export type PodcastSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PodcastSummary
     */
    select?: PodcastSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PodcastSummary
     */
    omit?: PodcastSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastSummaryInclude<ExtArgs> | null
    /**
     * Filter, which PodcastSummary to fetch.
     */
    where: PodcastSummaryWhereUniqueInput
  }

  /**
   * PodcastSummary findUniqueOrThrow
   */
  export type PodcastSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PodcastSummary
     */
    select?: PodcastSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PodcastSummary
     */
    omit?: PodcastSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastSummaryInclude<ExtArgs> | null
    /**
     * Filter, which PodcastSummary to fetch.
     */
    where: PodcastSummaryWhereUniqueInput
  }

  /**
   * PodcastSummary findFirst
   */
  export type PodcastSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PodcastSummary
     */
    select?: PodcastSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PodcastSummary
     */
    omit?: PodcastSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastSummaryInclude<ExtArgs> | null
    /**
     * Filter, which PodcastSummary to fetch.
     */
    where?: PodcastSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PodcastSummaries to fetch.
     */
    orderBy?: PodcastSummaryOrderByWithRelationInput | PodcastSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PodcastSummaries.
     */
    cursor?: PodcastSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PodcastSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PodcastSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PodcastSummaries.
     */
    distinct?: PodcastSummaryScalarFieldEnum | PodcastSummaryScalarFieldEnum[]
  }

  /**
   * PodcastSummary findFirstOrThrow
   */
  export type PodcastSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PodcastSummary
     */
    select?: PodcastSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PodcastSummary
     */
    omit?: PodcastSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastSummaryInclude<ExtArgs> | null
    /**
     * Filter, which PodcastSummary to fetch.
     */
    where?: PodcastSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PodcastSummaries to fetch.
     */
    orderBy?: PodcastSummaryOrderByWithRelationInput | PodcastSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PodcastSummaries.
     */
    cursor?: PodcastSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PodcastSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PodcastSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PodcastSummaries.
     */
    distinct?: PodcastSummaryScalarFieldEnum | PodcastSummaryScalarFieldEnum[]
  }

  /**
   * PodcastSummary findMany
   */
  export type PodcastSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PodcastSummary
     */
    select?: PodcastSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PodcastSummary
     */
    omit?: PodcastSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastSummaryInclude<ExtArgs> | null
    /**
     * Filter, which PodcastSummaries to fetch.
     */
    where?: PodcastSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PodcastSummaries to fetch.
     */
    orderBy?: PodcastSummaryOrderByWithRelationInput | PodcastSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PodcastSummaries.
     */
    cursor?: PodcastSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PodcastSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PodcastSummaries.
     */
    skip?: number
    distinct?: PodcastSummaryScalarFieldEnum | PodcastSummaryScalarFieldEnum[]
  }

  /**
   * PodcastSummary create
   */
  export type PodcastSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PodcastSummary
     */
    select?: PodcastSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PodcastSummary
     */
    omit?: PodcastSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastSummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a PodcastSummary.
     */
    data: XOR<PodcastSummaryCreateInput, PodcastSummaryUncheckedCreateInput>
  }

  /**
   * PodcastSummary createMany
   */
  export type PodcastSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PodcastSummaries.
     */
    data: PodcastSummaryCreateManyInput | PodcastSummaryCreateManyInput[]
  }

  /**
   * PodcastSummary update
   */
  export type PodcastSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PodcastSummary
     */
    select?: PodcastSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PodcastSummary
     */
    omit?: PodcastSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastSummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a PodcastSummary.
     */
    data: XOR<PodcastSummaryUpdateInput, PodcastSummaryUncheckedUpdateInput>
    /**
     * Choose, which PodcastSummary to update.
     */
    where: PodcastSummaryWhereUniqueInput
  }

  /**
   * PodcastSummary updateMany
   */
  export type PodcastSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PodcastSummaries.
     */
    data: XOR<PodcastSummaryUpdateManyMutationInput, PodcastSummaryUncheckedUpdateManyInput>
    /**
     * Filter which PodcastSummaries to update
     */
    where?: PodcastSummaryWhereInput
    /**
     * Limit how many PodcastSummaries to update.
     */
    limit?: number
  }

  /**
   * PodcastSummary upsert
   */
  export type PodcastSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PodcastSummary
     */
    select?: PodcastSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PodcastSummary
     */
    omit?: PodcastSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastSummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the PodcastSummary to update in case it exists.
     */
    where: PodcastSummaryWhereUniqueInput
    /**
     * In case the PodcastSummary found by the `where` argument doesn't exist, create a new PodcastSummary with this data.
     */
    create: XOR<PodcastSummaryCreateInput, PodcastSummaryUncheckedCreateInput>
    /**
     * In case the PodcastSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PodcastSummaryUpdateInput, PodcastSummaryUncheckedUpdateInput>
  }

  /**
   * PodcastSummary delete
   */
  export type PodcastSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PodcastSummary
     */
    select?: PodcastSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PodcastSummary
     */
    omit?: PodcastSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastSummaryInclude<ExtArgs> | null
    /**
     * Filter which PodcastSummary to delete.
     */
    where: PodcastSummaryWhereUniqueInput
  }

  /**
   * PodcastSummary deleteMany
   */
  export type PodcastSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PodcastSummaries to delete
     */
    where?: PodcastSummaryWhereInput
    /**
     * Limit how many PodcastSummaries to delete.
     */
    limit?: number
  }

  /**
   * PodcastSummary findRaw
   */
  export type PodcastSummaryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PodcastSummary aggregateRaw
   */
  export type PodcastSummaryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PodcastSummary.audio
   */
  export type PodcastSummary$audioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioFile
     */
    select?: AudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioFile
     */
    omit?: AudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioFileInclude<ExtArgs> | null
    where?: AudioFileWhereInput
  }

  /**
   * PodcastSummary without action
   */
  export type PodcastSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PodcastSummary
     */
    select?: PodcastSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PodcastSummary
     */
    omit?: PodcastSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastSummaryInclude<ExtArgs> | null
  }


  /**
   * Model UserAudioFile
   */

  export type AggregateUserAudioFile = {
    _count: UserAudioFileCountAggregateOutputType | null
    _min: UserAudioFileMinAggregateOutputType | null
    _max: UserAudioFileMaxAggregateOutputType | null
  }

  export type UserAudioFileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    audioId: string | null
    addedAt: Date | null
  }

  export type UserAudioFileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    audioId: string | null
    addedAt: Date | null
  }

  export type UserAudioFileCountAggregateOutputType = {
    id: number
    userId: number
    audioId: number
    addedAt: number
    _all: number
  }


  export type UserAudioFileMinAggregateInputType = {
    id?: true
    userId?: true
    audioId?: true
    addedAt?: true
  }

  export type UserAudioFileMaxAggregateInputType = {
    id?: true
    userId?: true
    audioId?: true
    addedAt?: true
  }

  export type UserAudioFileCountAggregateInputType = {
    id?: true
    userId?: true
    audioId?: true
    addedAt?: true
    _all?: true
  }

  export type UserAudioFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAudioFile to aggregate.
     */
    where?: UserAudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAudioFiles to fetch.
     */
    orderBy?: UserAudioFileOrderByWithRelationInput | UserAudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAudioFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAudioFiles
    **/
    _count?: true | UserAudioFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAudioFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAudioFileMaxAggregateInputType
  }

  export type GetUserAudioFileAggregateType<T extends UserAudioFileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAudioFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAudioFile[P]>
      : GetScalarType<T[P], AggregateUserAudioFile[P]>
  }




  export type UserAudioFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAudioFileWhereInput
    orderBy?: UserAudioFileOrderByWithAggregationInput | UserAudioFileOrderByWithAggregationInput[]
    by: UserAudioFileScalarFieldEnum[] | UserAudioFileScalarFieldEnum
    having?: UserAudioFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAudioFileCountAggregateInputType | true
    _min?: UserAudioFileMinAggregateInputType
    _max?: UserAudioFileMaxAggregateInputType
  }

  export type UserAudioFileGroupByOutputType = {
    id: string
    userId: string
    audioId: string
    addedAt: Date
    _count: UserAudioFileCountAggregateOutputType | null
    _min: UserAudioFileMinAggregateOutputType | null
    _max: UserAudioFileMaxAggregateOutputType | null
  }

  type GetUserAudioFileGroupByPayload<T extends UserAudioFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAudioFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAudioFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAudioFileGroupByOutputType[P]>
            : GetScalarType<T[P], UserAudioFileGroupByOutputType[P]>
        }
      >
    >


  export type UserAudioFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    audioId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    audioFile?: boolean | AudioFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAudioFile"]>



  export type UserAudioFileSelectScalar = {
    id?: boolean
    userId?: boolean
    audioId?: boolean
    addedAt?: boolean
  }

  export type UserAudioFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "audioId" | "addedAt", ExtArgs["result"]["userAudioFile"]>
  export type UserAudioFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    audioFile?: boolean | AudioFileDefaultArgs<ExtArgs>
  }

  export type $UserAudioFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAudioFile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      audioFile: Prisma.$AudioFilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      audioId: string
      addedAt: Date
    }, ExtArgs["result"]["userAudioFile"]>
    composites: {}
  }

  type UserAudioFileGetPayload<S extends boolean | null | undefined | UserAudioFileDefaultArgs> = $Result.GetResult<Prisma.$UserAudioFilePayload, S>

  type UserAudioFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAudioFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAudioFileCountAggregateInputType | true
    }

  export interface UserAudioFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAudioFile'], meta: { name: 'UserAudioFile' } }
    /**
     * Find zero or one UserAudioFile that matches the filter.
     * @param {UserAudioFileFindUniqueArgs} args - Arguments to find a UserAudioFile
     * @example
     * // Get one UserAudioFile
     * const userAudioFile = await prisma.userAudioFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAudioFileFindUniqueArgs>(args: SelectSubset<T, UserAudioFileFindUniqueArgs<ExtArgs>>): Prisma__UserAudioFileClient<$Result.GetResult<Prisma.$UserAudioFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAudioFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAudioFileFindUniqueOrThrowArgs} args - Arguments to find a UserAudioFile
     * @example
     * // Get one UserAudioFile
     * const userAudioFile = await prisma.userAudioFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAudioFileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAudioFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAudioFileClient<$Result.GetResult<Prisma.$UserAudioFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAudioFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAudioFileFindFirstArgs} args - Arguments to find a UserAudioFile
     * @example
     * // Get one UserAudioFile
     * const userAudioFile = await prisma.userAudioFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAudioFileFindFirstArgs>(args?: SelectSubset<T, UserAudioFileFindFirstArgs<ExtArgs>>): Prisma__UserAudioFileClient<$Result.GetResult<Prisma.$UserAudioFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAudioFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAudioFileFindFirstOrThrowArgs} args - Arguments to find a UserAudioFile
     * @example
     * // Get one UserAudioFile
     * const userAudioFile = await prisma.userAudioFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAudioFileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAudioFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAudioFileClient<$Result.GetResult<Prisma.$UserAudioFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAudioFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAudioFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAudioFiles
     * const userAudioFiles = await prisma.userAudioFile.findMany()
     * 
     * // Get first 10 UserAudioFiles
     * const userAudioFiles = await prisma.userAudioFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAudioFileWithIdOnly = await prisma.userAudioFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAudioFileFindManyArgs>(args?: SelectSubset<T, UserAudioFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAudioFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAudioFile.
     * @param {UserAudioFileCreateArgs} args - Arguments to create a UserAudioFile.
     * @example
     * // Create one UserAudioFile
     * const UserAudioFile = await prisma.userAudioFile.create({
     *   data: {
     *     // ... data to create a UserAudioFile
     *   }
     * })
     * 
     */
    create<T extends UserAudioFileCreateArgs>(args: SelectSubset<T, UserAudioFileCreateArgs<ExtArgs>>): Prisma__UserAudioFileClient<$Result.GetResult<Prisma.$UserAudioFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAudioFiles.
     * @param {UserAudioFileCreateManyArgs} args - Arguments to create many UserAudioFiles.
     * @example
     * // Create many UserAudioFiles
     * const userAudioFile = await prisma.userAudioFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAudioFileCreateManyArgs>(args?: SelectSubset<T, UserAudioFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAudioFile.
     * @param {UserAudioFileDeleteArgs} args - Arguments to delete one UserAudioFile.
     * @example
     * // Delete one UserAudioFile
     * const UserAudioFile = await prisma.userAudioFile.delete({
     *   where: {
     *     // ... filter to delete one UserAudioFile
     *   }
     * })
     * 
     */
    delete<T extends UserAudioFileDeleteArgs>(args: SelectSubset<T, UserAudioFileDeleteArgs<ExtArgs>>): Prisma__UserAudioFileClient<$Result.GetResult<Prisma.$UserAudioFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAudioFile.
     * @param {UserAudioFileUpdateArgs} args - Arguments to update one UserAudioFile.
     * @example
     * // Update one UserAudioFile
     * const userAudioFile = await prisma.userAudioFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAudioFileUpdateArgs>(args: SelectSubset<T, UserAudioFileUpdateArgs<ExtArgs>>): Prisma__UserAudioFileClient<$Result.GetResult<Prisma.$UserAudioFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAudioFiles.
     * @param {UserAudioFileDeleteManyArgs} args - Arguments to filter UserAudioFiles to delete.
     * @example
     * // Delete a few UserAudioFiles
     * const { count } = await prisma.userAudioFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAudioFileDeleteManyArgs>(args?: SelectSubset<T, UserAudioFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAudioFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAudioFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAudioFiles
     * const userAudioFile = await prisma.userAudioFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAudioFileUpdateManyArgs>(args: SelectSubset<T, UserAudioFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAudioFile.
     * @param {UserAudioFileUpsertArgs} args - Arguments to update or create a UserAudioFile.
     * @example
     * // Update or create a UserAudioFile
     * const userAudioFile = await prisma.userAudioFile.upsert({
     *   create: {
     *     // ... data to create a UserAudioFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAudioFile we want to update
     *   }
     * })
     */
    upsert<T extends UserAudioFileUpsertArgs>(args: SelectSubset<T, UserAudioFileUpsertArgs<ExtArgs>>): Prisma__UserAudioFileClient<$Result.GetResult<Prisma.$UserAudioFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAudioFiles that matches the filter.
     * @param {UserAudioFileFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userAudioFile = await prisma.userAudioFile.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserAudioFileFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserAudioFile.
     * @param {UserAudioFileAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userAudioFile = await prisma.userAudioFile.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAudioFileAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserAudioFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAudioFileCountArgs} args - Arguments to filter UserAudioFiles to count.
     * @example
     * // Count the number of UserAudioFiles
     * const count = await prisma.userAudioFile.count({
     *   where: {
     *     // ... the filter for the UserAudioFiles we want to count
     *   }
     * })
    **/
    count<T extends UserAudioFileCountArgs>(
      args?: Subset<T, UserAudioFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAudioFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAudioFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAudioFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAudioFileAggregateArgs>(args: Subset<T, UserAudioFileAggregateArgs>): Prisma.PrismaPromise<GetUserAudioFileAggregateType<T>>

    /**
     * Group by UserAudioFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAudioFileGroupByArgs} args - Group by arguments.
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
      T extends UserAudioFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAudioFileGroupByArgs['orderBy'] }
        : { orderBy?: UserAudioFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAudioFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAudioFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAudioFile model
   */
  readonly fields: UserAudioFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAudioFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAudioFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    audioFile<T extends AudioFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AudioFileDefaultArgs<ExtArgs>>): Prisma__AudioFileClient<$Result.GetResult<Prisma.$AudioFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAudioFile model
   */
  interface UserAudioFileFieldRefs {
    readonly id: FieldRef<"UserAudioFile", 'String'>
    readonly userId: FieldRef<"UserAudioFile", 'String'>
    readonly audioId: FieldRef<"UserAudioFile", 'String'>
    readonly addedAt: FieldRef<"UserAudioFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAudioFile findUnique
   */
  export type UserAudioFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAudioFile
     */
    select?: UserAudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAudioFile
     */
    omit?: UserAudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAudioFileInclude<ExtArgs> | null
    /**
     * Filter, which UserAudioFile to fetch.
     */
    where: UserAudioFileWhereUniqueInput
  }

  /**
   * UserAudioFile findUniqueOrThrow
   */
  export type UserAudioFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAudioFile
     */
    select?: UserAudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAudioFile
     */
    omit?: UserAudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAudioFileInclude<ExtArgs> | null
    /**
     * Filter, which UserAudioFile to fetch.
     */
    where: UserAudioFileWhereUniqueInput
  }

  /**
   * UserAudioFile findFirst
   */
  export type UserAudioFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAudioFile
     */
    select?: UserAudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAudioFile
     */
    omit?: UserAudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAudioFileInclude<ExtArgs> | null
    /**
     * Filter, which UserAudioFile to fetch.
     */
    where?: UserAudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAudioFiles to fetch.
     */
    orderBy?: UserAudioFileOrderByWithRelationInput | UserAudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAudioFiles.
     */
    cursor?: UserAudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAudioFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAudioFiles.
     */
    distinct?: UserAudioFileScalarFieldEnum | UserAudioFileScalarFieldEnum[]
  }

  /**
   * UserAudioFile findFirstOrThrow
   */
  export type UserAudioFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAudioFile
     */
    select?: UserAudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAudioFile
     */
    omit?: UserAudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAudioFileInclude<ExtArgs> | null
    /**
     * Filter, which UserAudioFile to fetch.
     */
    where?: UserAudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAudioFiles to fetch.
     */
    orderBy?: UserAudioFileOrderByWithRelationInput | UserAudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAudioFiles.
     */
    cursor?: UserAudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAudioFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAudioFiles.
     */
    distinct?: UserAudioFileScalarFieldEnum | UserAudioFileScalarFieldEnum[]
  }

  /**
   * UserAudioFile findMany
   */
  export type UserAudioFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAudioFile
     */
    select?: UserAudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAudioFile
     */
    omit?: UserAudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAudioFileInclude<ExtArgs> | null
    /**
     * Filter, which UserAudioFiles to fetch.
     */
    where?: UserAudioFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAudioFiles to fetch.
     */
    orderBy?: UserAudioFileOrderByWithRelationInput | UserAudioFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAudioFiles.
     */
    cursor?: UserAudioFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAudioFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAudioFiles.
     */
    skip?: number
    distinct?: UserAudioFileScalarFieldEnum | UserAudioFileScalarFieldEnum[]
  }

  /**
   * UserAudioFile create
   */
  export type UserAudioFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAudioFile
     */
    select?: UserAudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAudioFile
     */
    omit?: UserAudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAudioFileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAudioFile.
     */
    data: XOR<UserAudioFileCreateInput, UserAudioFileUncheckedCreateInput>
  }

  /**
   * UserAudioFile createMany
   */
  export type UserAudioFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAudioFiles.
     */
    data: UserAudioFileCreateManyInput | UserAudioFileCreateManyInput[]
  }

  /**
   * UserAudioFile update
   */
  export type UserAudioFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAudioFile
     */
    select?: UserAudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAudioFile
     */
    omit?: UserAudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAudioFileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAudioFile.
     */
    data: XOR<UserAudioFileUpdateInput, UserAudioFileUncheckedUpdateInput>
    /**
     * Choose, which UserAudioFile to update.
     */
    where: UserAudioFileWhereUniqueInput
  }

  /**
   * UserAudioFile updateMany
   */
  export type UserAudioFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAudioFiles.
     */
    data: XOR<UserAudioFileUpdateManyMutationInput, UserAudioFileUncheckedUpdateManyInput>
    /**
     * Filter which UserAudioFiles to update
     */
    where?: UserAudioFileWhereInput
    /**
     * Limit how many UserAudioFiles to update.
     */
    limit?: number
  }

  /**
   * UserAudioFile upsert
   */
  export type UserAudioFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAudioFile
     */
    select?: UserAudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAudioFile
     */
    omit?: UserAudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAudioFileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAudioFile to update in case it exists.
     */
    where: UserAudioFileWhereUniqueInput
    /**
     * In case the UserAudioFile found by the `where` argument doesn't exist, create a new UserAudioFile with this data.
     */
    create: XOR<UserAudioFileCreateInput, UserAudioFileUncheckedCreateInput>
    /**
     * In case the UserAudioFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAudioFileUpdateInput, UserAudioFileUncheckedUpdateInput>
  }

  /**
   * UserAudioFile delete
   */
  export type UserAudioFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAudioFile
     */
    select?: UserAudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAudioFile
     */
    omit?: UserAudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAudioFileInclude<ExtArgs> | null
    /**
     * Filter which UserAudioFile to delete.
     */
    where: UserAudioFileWhereUniqueInput
  }

  /**
   * UserAudioFile deleteMany
   */
  export type UserAudioFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAudioFiles to delete
     */
    where?: UserAudioFileWhereInput
    /**
     * Limit how many UserAudioFiles to delete.
     */
    limit?: number
  }

  /**
   * UserAudioFile findRaw
   */
  export type UserAudioFileFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserAudioFile aggregateRaw
   */
  export type UserAudioFileAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserAudioFile without action
   */
  export type UserAudioFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAudioFile
     */
    select?: UserAudioFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAudioFile
     */
    omit?: UserAudioFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAudioFileInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    firebaseId: 'firebaseId',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InterestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InterestScalarFieldEnum = (typeof InterestScalarFieldEnum)[keyof typeof InterestScalarFieldEnum]


  export const UserInterestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    interestId: 'interestId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserInterestScalarFieldEnum = (typeof UserInterestScalarFieldEnum)[keyof typeof UserInterestScalarFieldEnum]


  export const AudioFileScalarFieldEnum: {
    id: 'id',
    s3Key: 's3Key',
    originalName: 'originalName',
    contentType: 'contentType',
    url: 'url',
    uploadDate: 'uploadDate'
  };

  export type AudioFileScalarFieldEnum = (typeof AudioFileScalarFieldEnum)[keyof typeof AudioFileScalarFieldEnum]


  export const PodcastSummaryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    summary: 'summary',
    keywords: 'keywords',
    audioId: 'audioId'
  };

  export type PodcastSummaryScalarFieldEnum = (typeof PodcastSummaryScalarFieldEnum)[keyof typeof PodcastSummaryScalarFieldEnum]


  export const UserAudioFileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    audioId: 'audioId',
    addedAt: 'addedAt'
  };

  export type UserAudioFileScalarFieldEnum = (typeof UserAudioFileScalarFieldEnum)[keyof typeof UserAudioFileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firebaseId?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    playlistItems?: UserAudioFileListRelationFilter
    interests?: UserInterestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firebaseId?: SortOrder
    email?: SortOrder
    playlistItems?: UserAudioFileOrderByRelationAggregateInput
    interests?: UserInterestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    firebaseId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringNullableFilter<"User"> | string | null
    playlistItems?: UserAudioFileListRelationFilter
    interests?: UserInterestListRelationFilter
  }, "id" | "firebaseId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firebaseId?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firebaseId?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type InterestWhereInput = {
    AND?: InterestWhereInput | InterestWhereInput[]
    OR?: InterestWhereInput[]
    NOT?: InterestWhereInput | InterestWhereInput[]
    id?: StringFilter<"Interest"> | string
    name?: StringFilter<"Interest"> | string
    category?: StringFilter<"Interest"> | string
    createdAt?: DateTimeFilter<"Interest"> | Date | string
    updatedAt?: DateTimeFilter<"Interest"> | Date | string
    users?: UserInterestListRelationFilter
  }

  export type InterestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserInterestOrderByRelationAggregateInput
  }

  export type InterestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: InterestWhereInput | InterestWhereInput[]
    OR?: InterestWhereInput[]
    NOT?: InterestWhereInput | InterestWhereInput[]
    category?: StringFilter<"Interest"> | string
    createdAt?: DateTimeFilter<"Interest"> | Date | string
    updatedAt?: DateTimeFilter<"Interest"> | Date | string
    users?: UserInterestListRelationFilter
  }, "id" | "name">

  export type InterestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InterestCountOrderByAggregateInput
    _max?: InterestMaxOrderByAggregateInput
    _min?: InterestMinOrderByAggregateInput
  }

  export type InterestScalarWhereWithAggregatesInput = {
    AND?: InterestScalarWhereWithAggregatesInput | InterestScalarWhereWithAggregatesInput[]
    OR?: InterestScalarWhereWithAggregatesInput[]
    NOT?: InterestScalarWhereWithAggregatesInput | InterestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Interest"> | string
    name?: StringWithAggregatesFilter<"Interest"> | string
    category?: StringWithAggregatesFilter<"Interest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Interest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Interest"> | Date | string
  }

  export type UserInterestWhereInput = {
    AND?: UserInterestWhereInput | UserInterestWhereInput[]
    OR?: UserInterestWhereInput[]
    NOT?: UserInterestWhereInput | UserInterestWhereInput[]
    id?: StringFilter<"UserInterest"> | string
    userId?: StringFilter<"UserInterest"> | string
    interestId?: StringFilter<"UserInterest"> | string
    createdAt?: DateTimeFilter<"UserInterest"> | Date | string
    updatedAt?: DateTimeFilter<"UserInterest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    interest?: XOR<InterestScalarRelationFilter, InterestWhereInput>
  }

  export type UserInterestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    interest?: InterestOrderByWithRelationInput
  }

  export type UserInterestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_interestId?: UserInterestUserIdInterestIdCompoundUniqueInput
    AND?: UserInterestWhereInput | UserInterestWhereInput[]
    OR?: UserInterestWhereInput[]
    NOT?: UserInterestWhereInput | UserInterestWhereInput[]
    userId?: StringFilter<"UserInterest"> | string
    interestId?: StringFilter<"UserInterest"> | string
    createdAt?: DateTimeFilter<"UserInterest"> | Date | string
    updatedAt?: DateTimeFilter<"UserInterest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    interest?: XOR<InterestScalarRelationFilter, InterestWhereInput>
  }, "id" | "userId_interestId">

  export type UserInterestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserInterestCountOrderByAggregateInput
    _max?: UserInterestMaxOrderByAggregateInput
    _min?: UserInterestMinOrderByAggregateInput
  }

  export type UserInterestScalarWhereWithAggregatesInput = {
    AND?: UserInterestScalarWhereWithAggregatesInput | UserInterestScalarWhereWithAggregatesInput[]
    OR?: UserInterestScalarWhereWithAggregatesInput[]
    NOT?: UserInterestScalarWhereWithAggregatesInput | UserInterestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserInterest"> | string
    userId?: StringWithAggregatesFilter<"UserInterest"> | string
    interestId?: StringWithAggregatesFilter<"UserInterest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserInterest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserInterest"> | Date | string
  }

  export type AudioFileWhereInput = {
    AND?: AudioFileWhereInput | AudioFileWhereInput[]
    OR?: AudioFileWhereInput[]
    NOT?: AudioFileWhereInput | AudioFileWhereInput[]
    id?: StringFilter<"AudioFile"> | string
    s3Key?: StringFilter<"AudioFile"> | string
    originalName?: StringNullableFilter<"AudioFile"> | string | null
    contentType?: StringFilter<"AudioFile"> | string
    url?: StringFilter<"AudioFile"> | string
    uploadDate?: DateTimeFilter<"AudioFile"> | Date | string
    summary?: XOR<PodcastSummaryNullableScalarRelationFilter, PodcastSummaryWhereInput> | null
    savedBy?: UserAudioFileListRelationFilter
  }

  export type AudioFileOrderByWithRelationInput = {
    id?: SortOrder
    s3Key?: SortOrder
    originalName?: SortOrder
    contentType?: SortOrder
    url?: SortOrder
    uploadDate?: SortOrder
    summary?: PodcastSummaryOrderByWithRelationInput
    savedBy?: UserAudioFileOrderByRelationAggregateInput
  }

  export type AudioFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AudioFileWhereInput | AudioFileWhereInput[]
    OR?: AudioFileWhereInput[]
    NOT?: AudioFileWhereInput | AudioFileWhereInput[]
    s3Key?: StringFilter<"AudioFile"> | string
    originalName?: StringNullableFilter<"AudioFile"> | string | null
    contentType?: StringFilter<"AudioFile"> | string
    url?: StringFilter<"AudioFile"> | string
    uploadDate?: DateTimeFilter<"AudioFile"> | Date | string
    summary?: XOR<PodcastSummaryNullableScalarRelationFilter, PodcastSummaryWhereInput> | null
    savedBy?: UserAudioFileListRelationFilter
  }, "id">

  export type AudioFileOrderByWithAggregationInput = {
    id?: SortOrder
    s3Key?: SortOrder
    originalName?: SortOrder
    contentType?: SortOrder
    url?: SortOrder
    uploadDate?: SortOrder
    _count?: AudioFileCountOrderByAggregateInput
    _max?: AudioFileMaxOrderByAggregateInput
    _min?: AudioFileMinOrderByAggregateInput
  }

  export type AudioFileScalarWhereWithAggregatesInput = {
    AND?: AudioFileScalarWhereWithAggregatesInput | AudioFileScalarWhereWithAggregatesInput[]
    OR?: AudioFileScalarWhereWithAggregatesInput[]
    NOT?: AudioFileScalarWhereWithAggregatesInput | AudioFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AudioFile"> | string
    s3Key?: StringWithAggregatesFilter<"AudioFile"> | string
    originalName?: StringNullableWithAggregatesFilter<"AudioFile"> | string | null
    contentType?: StringWithAggregatesFilter<"AudioFile"> | string
    url?: StringWithAggregatesFilter<"AudioFile"> | string
    uploadDate?: DateTimeWithAggregatesFilter<"AudioFile"> | Date | string
  }

  export type PodcastSummaryWhereInput = {
    AND?: PodcastSummaryWhereInput | PodcastSummaryWhereInput[]
    OR?: PodcastSummaryWhereInput[]
    NOT?: PodcastSummaryWhereInput | PodcastSummaryWhereInput[]
    id?: StringFilter<"PodcastSummary"> | string
    title?: StringFilter<"PodcastSummary"> | string
    summary?: StringFilter<"PodcastSummary"> | string
    keywords?: StringNullableListFilter<"PodcastSummary">
    audioId?: StringNullableFilter<"PodcastSummary"> | string | null
    audio?: XOR<AudioFileNullableScalarRelationFilter, AudioFileWhereInput> | null
  }

  export type PodcastSummaryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    keywords?: SortOrder
    audioId?: SortOrder
    audio?: AudioFileOrderByWithRelationInput
  }

  export type PodcastSummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    audioId?: string
    AND?: PodcastSummaryWhereInput | PodcastSummaryWhereInput[]
    OR?: PodcastSummaryWhereInput[]
    NOT?: PodcastSummaryWhereInput | PodcastSummaryWhereInput[]
    title?: StringFilter<"PodcastSummary"> | string
    summary?: StringFilter<"PodcastSummary"> | string
    keywords?: StringNullableListFilter<"PodcastSummary">
    audio?: XOR<AudioFileNullableScalarRelationFilter, AudioFileWhereInput> | null
  }, "id" | "audioId">

  export type PodcastSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    keywords?: SortOrder
    audioId?: SortOrder
    _count?: PodcastSummaryCountOrderByAggregateInput
    _max?: PodcastSummaryMaxOrderByAggregateInput
    _min?: PodcastSummaryMinOrderByAggregateInput
  }

  export type PodcastSummaryScalarWhereWithAggregatesInput = {
    AND?: PodcastSummaryScalarWhereWithAggregatesInput | PodcastSummaryScalarWhereWithAggregatesInput[]
    OR?: PodcastSummaryScalarWhereWithAggregatesInput[]
    NOT?: PodcastSummaryScalarWhereWithAggregatesInput | PodcastSummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PodcastSummary"> | string
    title?: StringWithAggregatesFilter<"PodcastSummary"> | string
    summary?: StringWithAggregatesFilter<"PodcastSummary"> | string
    keywords?: StringNullableListFilter<"PodcastSummary">
    audioId?: StringNullableWithAggregatesFilter<"PodcastSummary"> | string | null
  }

  export type UserAudioFileWhereInput = {
    AND?: UserAudioFileWhereInput | UserAudioFileWhereInput[]
    OR?: UserAudioFileWhereInput[]
    NOT?: UserAudioFileWhereInput | UserAudioFileWhereInput[]
    id?: StringFilter<"UserAudioFile"> | string
    userId?: StringFilter<"UserAudioFile"> | string
    audioId?: StringFilter<"UserAudioFile"> | string
    addedAt?: DateTimeFilter<"UserAudioFile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    audioFile?: XOR<AudioFileScalarRelationFilter, AudioFileWhereInput>
  }

  export type UserAudioFileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    audioId?: SortOrder
    addedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    audioFile?: AudioFileOrderByWithRelationInput
  }

  export type UserAudioFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAudioFileWhereInput | UserAudioFileWhereInput[]
    OR?: UserAudioFileWhereInput[]
    NOT?: UserAudioFileWhereInput | UserAudioFileWhereInput[]
    userId?: StringFilter<"UserAudioFile"> | string
    audioId?: StringFilter<"UserAudioFile"> | string
    addedAt?: DateTimeFilter<"UserAudioFile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    audioFile?: XOR<AudioFileScalarRelationFilter, AudioFileWhereInput>
  }, "id">

  export type UserAudioFileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    audioId?: SortOrder
    addedAt?: SortOrder
    _count?: UserAudioFileCountOrderByAggregateInput
    _max?: UserAudioFileMaxOrderByAggregateInput
    _min?: UserAudioFileMinOrderByAggregateInput
  }

  export type UserAudioFileScalarWhereWithAggregatesInput = {
    AND?: UserAudioFileScalarWhereWithAggregatesInput | UserAudioFileScalarWhereWithAggregatesInput[]
    OR?: UserAudioFileScalarWhereWithAggregatesInput[]
    NOT?: UserAudioFileScalarWhereWithAggregatesInput | UserAudioFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAudioFile"> | string
    userId?: StringWithAggregatesFilter<"UserAudioFile"> | string
    audioId?: StringWithAggregatesFilter<"UserAudioFile"> | string
    addedAt?: DateTimeWithAggregatesFilter<"UserAudioFile"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    firebaseId: string
    email?: string | null
    playlistItems?: UserAudioFileCreateNestedManyWithoutUserInput
    interests?: UserInterestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    firebaseId: string
    email?: string | null
    playlistItems?: UserAudioFileUncheckedCreateNestedManyWithoutUserInput
    interests?: UserInterestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firebaseId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    playlistItems?: UserAudioFileUpdateManyWithoutUserNestedInput
    interests?: UserInterestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    firebaseId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    playlistItems?: UserAudioFileUncheckedUpdateManyWithoutUserNestedInput
    interests?: UserInterestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    firebaseId: string
    email?: string | null
  }

  export type UserUpdateManyMutationInput = {
    firebaseId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    firebaseId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InterestCreateInput = {
    id?: string
    name: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserInterestCreateNestedManyWithoutInterestInput
  }

  export type InterestUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserInterestUncheckedCreateNestedManyWithoutInterestInput
  }

  export type InterestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserInterestUpdateManyWithoutInterestNestedInput
  }

  export type InterestUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserInterestUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type InterestCreateManyInput = {
    id?: string
    name: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterestUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInterestCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInterestsInput
    interest: InterestCreateNestedOneWithoutUsersInput
  }

  export type UserInterestUncheckedCreateInput = {
    id?: string
    userId: string
    interestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInterestUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInterestsNestedInput
    interest?: InterestUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserInterestUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInterestCreateManyInput = {
    id?: string
    userId: string
    interestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInterestUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInterestUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioFileCreateInput = {
    id?: string
    s3Key: string
    originalName?: string | null
    contentType: string
    url: string
    uploadDate?: Date | string
    summary?: PodcastSummaryCreateNestedOneWithoutAudioInput
    savedBy?: UserAudioFileCreateNestedManyWithoutAudioFileInput
  }

  export type AudioFileUncheckedCreateInput = {
    id?: string
    s3Key: string
    originalName?: string | null
    contentType: string
    url: string
    uploadDate?: Date | string
    summary?: PodcastSummaryUncheckedCreateNestedOneWithoutAudioInput
    savedBy?: UserAudioFileUncheckedCreateNestedManyWithoutAudioFileInput
  }

  export type AudioFileUpdateInput = {
    s3Key?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: PodcastSummaryUpdateOneWithoutAudioNestedInput
    savedBy?: UserAudioFileUpdateManyWithoutAudioFileNestedInput
  }

  export type AudioFileUncheckedUpdateInput = {
    s3Key?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: PodcastSummaryUncheckedUpdateOneWithoutAudioNestedInput
    savedBy?: UserAudioFileUncheckedUpdateManyWithoutAudioFileNestedInput
  }

  export type AudioFileCreateManyInput = {
    id?: string
    s3Key: string
    originalName?: string | null
    contentType: string
    url: string
    uploadDate?: Date | string
  }

  export type AudioFileUpdateManyMutationInput = {
    s3Key?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioFileUncheckedUpdateManyInput = {
    s3Key?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PodcastSummaryCreateInput = {
    id?: string
    title: string
    summary: string
    keywords?: PodcastSummaryCreatekeywordsInput | string[]
    audio?: AudioFileCreateNestedOneWithoutSummaryInput
  }

  export type PodcastSummaryUncheckedCreateInput = {
    id?: string
    title: string
    summary: string
    keywords?: PodcastSummaryCreatekeywordsInput | string[]
    audioId?: string | null
  }

  export type PodcastSummaryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    keywords?: PodcastSummaryUpdatekeywordsInput | string[]
    audio?: AudioFileUpdateOneWithoutSummaryNestedInput
  }

  export type PodcastSummaryUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    keywords?: PodcastSummaryUpdatekeywordsInput | string[]
    audioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PodcastSummaryCreateManyInput = {
    id?: string
    title: string
    summary: string
    keywords?: PodcastSummaryCreatekeywordsInput | string[]
    audioId?: string | null
  }

  export type PodcastSummaryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    keywords?: PodcastSummaryUpdatekeywordsInput | string[]
  }

  export type PodcastSummaryUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    keywords?: PodcastSummaryUpdatekeywordsInput | string[]
    audioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAudioFileCreateInput = {
    id?: string
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutPlaylistItemsInput
    audioFile: AudioFileCreateNestedOneWithoutSavedByInput
  }

  export type UserAudioFileUncheckedCreateInput = {
    id?: string
    userId: string
    audioId: string
    addedAt?: Date | string
  }

  export type UserAudioFileUpdateInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlaylistItemsNestedInput
    audioFile?: AudioFileUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type UserAudioFileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAudioFileCreateManyInput = {
    id?: string
    userId: string
    audioId: string
    addedAt?: Date | string
  }

  export type UserAudioFileUpdateManyMutationInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAudioFileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type UserAudioFileListRelationFilter = {
    every?: UserAudioFileWhereInput
    some?: UserAudioFileWhereInput
    none?: UserAudioFileWhereInput
  }

  export type UserInterestListRelationFilter = {
    every?: UserInterestWhereInput
    some?: UserInterestWhereInput
    none?: UserInterestWhereInput
  }

  export type UserAudioFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserInterestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firebaseId?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firebaseId?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firebaseId?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InterestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InterestScalarRelationFilter = {
    is?: InterestWhereInput
    isNot?: InterestWhereInput
  }

  export type UserInterestUserIdInterestIdCompoundUniqueInput = {
    userId: string
    interestId: string
  }

  export type UserInterestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserInterestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserInterestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PodcastSummaryNullableScalarRelationFilter = {
    is?: PodcastSummaryWhereInput | null
    isNot?: PodcastSummaryWhereInput | null
  }

  export type AudioFileCountOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    originalName?: SortOrder
    contentType?: SortOrder
    url?: SortOrder
    uploadDate?: SortOrder
  }

  export type AudioFileMaxOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    originalName?: SortOrder
    contentType?: SortOrder
    url?: SortOrder
    uploadDate?: SortOrder
  }

  export type AudioFileMinOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    originalName?: SortOrder
    contentType?: SortOrder
    url?: SortOrder
    uploadDate?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AudioFileNullableScalarRelationFilter = {
    is?: AudioFileWhereInput | null
    isNot?: AudioFileWhereInput | null
  }

  export type PodcastSummaryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    keywords?: SortOrder
    audioId?: SortOrder
  }

  export type PodcastSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    audioId?: SortOrder
  }

  export type PodcastSummaryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    audioId?: SortOrder
  }

  export type AudioFileScalarRelationFilter = {
    is?: AudioFileWhereInput
    isNot?: AudioFileWhereInput
  }

  export type UserAudioFileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    audioId?: SortOrder
    addedAt?: SortOrder
  }

  export type UserAudioFileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    audioId?: SortOrder
    addedAt?: SortOrder
  }

  export type UserAudioFileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    audioId?: SortOrder
    addedAt?: SortOrder
  }

  export type UserAudioFileCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAudioFileCreateWithoutUserInput, UserAudioFileUncheckedCreateWithoutUserInput> | UserAudioFileCreateWithoutUserInput[] | UserAudioFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAudioFileCreateOrConnectWithoutUserInput | UserAudioFileCreateOrConnectWithoutUserInput[]
    createMany?: UserAudioFileCreateManyUserInputEnvelope
    connect?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
  }

  export type UserInterestCreateNestedManyWithoutUserInput = {
    create?: XOR<UserInterestCreateWithoutUserInput, UserInterestUncheckedCreateWithoutUserInput> | UserInterestCreateWithoutUserInput[] | UserInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutUserInput | UserInterestCreateOrConnectWithoutUserInput[]
    createMany?: UserInterestCreateManyUserInputEnvelope
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
  }

  export type UserAudioFileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAudioFileCreateWithoutUserInput, UserAudioFileUncheckedCreateWithoutUserInput> | UserAudioFileCreateWithoutUserInput[] | UserAudioFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAudioFileCreateOrConnectWithoutUserInput | UserAudioFileCreateOrConnectWithoutUserInput[]
    createMany?: UserAudioFileCreateManyUserInputEnvelope
    connect?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
  }

  export type UserInterestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserInterestCreateWithoutUserInput, UserInterestUncheckedCreateWithoutUserInput> | UserInterestCreateWithoutUserInput[] | UserInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutUserInput | UserInterestCreateOrConnectWithoutUserInput[]
    createMany?: UserInterestCreateManyUserInputEnvelope
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserAudioFileUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAudioFileCreateWithoutUserInput, UserAudioFileUncheckedCreateWithoutUserInput> | UserAudioFileCreateWithoutUserInput[] | UserAudioFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAudioFileCreateOrConnectWithoutUserInput | UserAudioFileCreateOrConnectWithoutUserInput[]
    upsert?: UserAudioFileUpsertWithWhereUniqueWithoutUserInput | UserAudioFileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAudioFileCreateManyUserInputEnvelope
    set?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    disconnect?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    delete?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    connect?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    update?: UserAudioFileUpdateWithWhereUniqueWithoutUserInput | UserAudioFileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAudioFileUpdateManyWithWhereWithoutUserInput | UserAudioFileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAudioFileScalarWhereInput | UserAudioFileScalarWhereInput[]
  }

  export type UserInterestUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserInterestCreateWithoutUserInput, UserInterestUncheckedCreateWithoutUserInput> | UserInterestCreateWithoutUserInput[] | UserInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutUserInput | UserInterestCreateOrConnectWithoutUserInput[]
    upsert?: UserInterestUpsertWithWhereUniqueWithoutUserInput | UserInterestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserInterestCreateManyUserInputEnvelope
    set?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    disconnect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    delete?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    update?: UserInterestUpdateWithWhereUniqueWithoutUserInput | UserInterestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserInterestUpdateManyWithWhereWithoutUserInput | UserInterestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserInterestScalarWhereInput | UserInterestScalarWhereInput[]
  }

  export type UserAudioFileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAudioFileCreateWithoutUserInput, UserAudioFileUncheckedCreateWithoutUserInput> | UserAudioFileCreateWithoutUserInput[] | UserAudioFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAudioFileCreateOrConnectWithoutUserInput | UserAudioFileCreateOrConnectWithoutUserInput[]
    upsert?: UserAudioFileUpsertWithWhereUniqueWithoutUserInput | UserAudioFileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAudioFileCreateManyUserInputEnvelope
    set?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    disconnect?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    delete?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    connect?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    update?: UserAudioFileUpdateWithWhereUniqueWithoutUserInput | UserAudioFileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAudioFileUpdateManyWithWhereWithoutUserInput | UserAudioFileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAudioFileScalarWhereInput | UserAudioFileScalarWhereInput[]
  }

  export type UserInterestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserInterestCreateWithoutUserInput, UserInterestUncheckedCreateWithoutUserInput> | UserInterestCreateWithoutUserInput[] | UserInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutUserInput | UserInterestCreateOrConnectWithoutUserInput[]
    upsert?: UserInterestUpsertWithWhereUniqueWithoutUserInput | UserInterestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserInterestCreateManyUserInputEnvelope
    set?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    disconnect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    delete?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    update?: UserInterestUpdateWithWhereUniqueWithoutUserInput | UserInterestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserInterestUpdateManyWithWhereWithoutUserInput | UserInterestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserInterestScalarWhereInput | UserInterestScalarWhereInput[]
  }

  export type UserInterestCreateNestedManyWithoutInterestInput = {
    create?: XOR<UserInterestCreateWithoutInterestInput, UserInterestUncheckedCreateWithoutInterestInput> | UserInterestCreateWithoutInterestInput[] | UserInterestUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutInterestInput | UserInterestCreateOrConnectWithoutInterestInput[]
    createMany?: UserInterestCreateManyInterestInputEnvelope
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
  }

  export type UserInterestUncheckedCreateNestedManyWithoutInterestInput = {
    create?: XOR<UserInterestCreateWithoutInterestInput, UserInterestUncheckedCreateWithoutInterestInput> | UserInterestCreateWithoutInterestInput[] | UserInterestUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutInterestInput | UserInterestCreateOrConnectWithoutInterestInput[]
    createMany?: UserInterestCreateManyInterestInputEnvelope
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserInterestUpdateManyWithoutInterestNestedInput = {
    create?: XOR<UserInterestCreateWithoutInterestInput, UserInterestUncheckedCreateWithoutInterestInput> | UserInterestCreateWithoutInterestInput[] | UserInterestUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutInterestInput | UserInterestCreateOrConnectWithoutInterestInput[]
    upsert?: UserInterestUpsertWithWhereUniqueWithoutInterestInput | UserInterestUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: UserInterestCreateManyInterestInputEnvelope
    set?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    disconnect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    delete?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    update?: UserInterestUpdateWithWhereUniqueWithoutInterestInput | UserInterestUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: UserInterestUpdateManyWithWhereWithoutInterestInput | UserInterestUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: UserInterestScalarWhereInput | UserInterestScalarWhereInput[]
  }

  export type UserInterestUncheckedUpdateManyWithoutInterestNestedInput = {
    create?: XOR<UserInterestCreateWithoutInterestInput, UserInterestUncheckedCreateWithoutInterestInput> | UserInterestCreateWithoutInterestInput[] | UserInterestUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutInterestInput | UserInterestCreateOrConnectWithoutInterestInput[]
    upsert?: UserInterestUpsertWithWhereUniqueWithoutInterestInput | UserInterestUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: UserInterestCreateManyInterestInputEnvelope
    set?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    disconnect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    delete?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    update?: UserInterestUpdateWithWhereUniqueWithoutInterestInput | UserInterestUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: UserInterestUpdateManyWithWhereWithoutInterestInput | UserInterestUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: UserInterestScalarWhereInput | UserInterestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInterestsInput = {
    create?: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterestsInput
    connect?: UserWhereUniqueInput
  }

  export type InterestCreateNestedOneWithoutUsersInput = {
    create?: XOR<InterestCreateWithoutUsersInput, InterestUncheckedCreateWithoutUsersInput>
    connectOrCreate?: InterestCreateOrConnectWithoutUsersInput
    connect?: InterestWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterestsInput
    upsert?: UserUpsertWithoutInterestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInterestsInput, UserUpdateWithoutInterestsInput>, UserUncheckedUpdateWithoutInterestsInput>
  }

  export type InterestUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<InterestCreateWithoutUsersInput, InterestUncheckedCreateWithoutUsersInput>
    connectOrCreate?: InterestCreateOrConnectWithoutUsersInput
    upsert?: InterestUpsertWithoutUsersInput
    connect?: InterestWhereUniqueInput
    update?: XOR<XOR<InterestUpdateToOneWithWhereWithoutUsersInput, InterestUpdateWithoutUsersInput>, InterestUncheckedUpdateWithoutUsersInput>
  }

  export type PodcastSummaryCreateNestedOneWithoutAudioInput = {
    create?: XOR<PodcastSummaryCreateWithoutAudioInput, PodcastSummaryUncheckedCreateWithoutAudioInput>
    connectOrCreate?: PodcastSummaryCreateOrConnectWithoutAudioInput
    connect?: PodcastSummaryWhereUniqueInput
  }

  export type UserAudioFileCreateNestedManyWithoutAudioFileInput = {
    create?: XOR<UserAudioFileCreateWithoutAudioFileInput, UserAudioFileUncheckedCreateWithoutAudioFileInput> | UserAudioFileCreateWithoutAudioFileInput[] | UserAudioFileUncheckedCreateWithoutAudioFileInput[]
    connectOrCreate?: UserAudioFileCreateOrConnectWithoutAudioFileInput | UserAudioFileCreateOrConnectWithoutAudioFileInput[]
    createMany?: UserAudioFileCreateManyAudioFileInputEnvelope
    connect?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
  }

  export type PodcastSummaryUncheckedCreateNestedOneWithoutAudioInput = {
    create?: XOR<PodcastSummaryCreateWithoutAudioInput, PodcastSummaryUncheckedCreateWithoutAudioInput>
    connectOrCreate?: PodcastSummaryCreateOrConnectWithoutAudioInput
    connect?: PodcastSummaryWhereUniqueInput
  }

  export type UserAudioFileUncheckedCreateNestedManyWithoutAudioFileInput = {
    create?: XOR<UserAudioFileCreateWithoutAudioFileInput, UserAudioFileUncheckedCreateWithoutAudioFileInput> | UserAudioFileCreateWithoutAudioFileInput[] | UserAudioFileUncheckedCreateWithoutAudioFileInput[]
    connectOrCreate?: UserAudioFileCreateOrConnectWithoutAudioFileInput | UserAudioFileCreateOrConnectWithoutAudioFileInput[]
    createMany?: UserAudioFileCreateManyAudioFileInputEnvelope
    connect?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
  }

  export type PodcastSummaryUpdateOneWithoutAudioNestedInput = {
    create?: XOR<PodcastSummaryCreateWithoutAudioInput, PodcastSummaryUncheckedCreateWithoutAudioInput>
    connectOrCreate?: PodcastSummaryCreateOrConnectWithoutAudioInput
    upsert?: PodcastSummaryUpsertWithoutAudioInput
    disconnect?: PodcastSummaryWhereInput | boolean
    delete?: PodcastSummaryWhereInput | boolean
    connect?: PodcastSummaryWhereUniqueInput
    update?: XOR<XOR<PodcastSummaryUpdateToOneWithWhereWithoutAudioInput, PodcastSummaryUpdateWithoutAudioInput>, PodcastSummaryUncheckedUpdateWithoutAudioInput>
  }

  export type UserAudioFileUpdateManyWithoutAudioFileNestedInput = {
    create?: XOR<UserAudioFileCreateWithoutAudioFileInput, UserAudioFileUncheckedCreateWithoutAudioFileInput> | UserAudioFileCreateWithoutAudioFileInput[] | UserAudioFileUncheckedCreateWithoutAudioFileInput[]
    connectOrCreate?: UserAudioFileCreateOrConnectWithoutAudioFileInput | UserAudioFileCreateOrConnectWithoutAudioFileInput[]
    upsert?: UserAudioFileUpsertWithWhereUniqueWithoutAudioFileInput | UserAudioFileUpsertWithWhereUniqueWithoutAudioFileInput[]
    createMany?: UserAudioFileCreateManyAudioFileInputEnvelope
    set?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    disconnect?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    delete?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    connect?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    update?: UserAudioFileUpdateWithWhereUniqueWithoutAudioFileInput | UserAudioFileUpdateWithWhereUniqueWithoutAudioFileInput[]
    updateMany?: UserAudioFileUpdateManyWithWhereWithoutAudioFileInput | UserAudioFileUpdateManyWithWhereWithoutAudioFileInput[]
    deleteMany?: UserAudioFileScalarWhereInput | UserAudioFileScalarWhereInput[]
  }

  export type PodcastSummaryUncheckedUpdateOneWithoutAudioNestedInput = {
    create?: XOR<PodcastSummaryCreateWithoutAudioInput, PodcastSummaryUncheckedCreateWithoutAudioInput>
    connectOrCreate?: PodcastSummaryCreateOrConnectWithoutAudioInput
    upsert?: PodcastSummaryUpsertWithoutAudioInput
    disconnect?: PodcastSummaryWhereInput | boolean
    delete?: PodcastSummaryWhereInput | boolean
    connect?: PodcastSummaryWhereUniqueInput
    update?: XOR<XOR<PodcastSummaryUpdateToOneWithWhereWithoutAudioInput, PodcastSummaryUpdateWithoutAudioInput>, PodcastSummaryUncheckedUpdateWithoutAudioInput>
  }

  export type UserAudioFileUncheckedUpdateManyWithoutAudioFileNestedInput = {
    create?: XOR<UserAudioFileCreateWithoutAudioFileInput, UserAudioFileUncheckedCreateWithoutAudioFileInput> | UserAudioFileCreateWithoutAudioFileInput[] | UserAudioFileUncheckedCreateWithoutAudioFileInput[]
    connectOrCreate?: UserAudioFileCreateOrConnectWithoutAudioFileInput | UserAudioFileCreateOrConnectWithoutAudioFileInput[]
    upsert?: UserAudioFileUpsertWithWhereUniqueWithoutAudioFileInput | UserAudioFileUpsertWithWhereUniqueWithoutAudioFileInput[]
    createMany?: UserAudioFileCreateManyAudioFileInputEnvelope
    set?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    disconnect?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    delete?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    connect?: UserAudioFileWhereUniqueInput | UserAudioFileWhereUniqueInput[]
    update?: UserAudioFileUpdateWithWhereUniqueWithoutAudioFileInput | UserAudioFileUpdateWithWhereUniqueWithoutAudioFileInput[]
    updateMany?: UserAudioFileUpdateManyWithWhereWithoutAudioFileInput | UserAudioFileUpdateManyWithWhereWithoutAudioFileInput[]
    deleteMany?: UserAudioFileScalarWhereInput | UserAudioFileScalarWhereInput[]
  }

  export type PodcastSummaryCreatekeywordsInput = {
    set: string[]
  }

  export type AudioFileCreateNestedOneWithoutSummaryInput = {
    create?: XOR<AudioFileCreateWithoutSummaryInput, AudioFileUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: AudioFileCreateOrConnectWithoutSummaryInput
    connect?: AudioFileWhereUniqueInput
  }

  export type PodcastSummaryUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AudioFileUpdateOneWithoutSummaryNestedInput = {
    create?: XOR<AudioFileCreateWithoutSummaryInput, AudioFileUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: AudioFileCreateOrConnectWithoutSummaryInput
    upsert?: AudioFileUpsertWithoutSummaryInput
    disconnect?: boolean
    delete?: AudioFileWhereInput | boolean
    connect?: AudioFileWhereUniqueInput
    update?: XOR<XOR<AudioFileUpdateToOneWithWhereWithoutSummaryInput, AudioFileUpdateWithoutSummaryInput>, AudioFileUncheckedUpdateWithoutSummaryInput>
  }

  export type UserCreateNestedOneWithoutPlaylistItemsInput = {
    create?: XOR<UserCreateWithoutPlaylistItemsInput, UserUncheckedCreateWithoutPlaylistItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistItemsInput
    connect?: UserWhereUniqueInput
  }

  export type AudioFileCreateNestedOneWithoutSavedByInput = {
    create?: XOR<AudioFileCreateWithoutSavedByInput, AudioFileUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: AudioFileCreateOrConnectWithoutSavedByInput
    connect?: AudioFileWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPlaylistItemsNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistItemsInput, UserUncheckedCreateWithoutPlaylistItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistItemsInput
    upsert?: UserUpsertWithoutPlaylistItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistItemsInput, UserUpdateWithoutPlaylistItemsInput>, UserUncheckedUpdateWithoutPlaylistItemsInput>
  }

  export type AudioFileUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<AudioFileCreateWithoutSavedByInput, AudioFileUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: AudioFileCreateOrConnectWithoutSavedByInput
    upsert?: AudioFileUpsertWithoutSavedByInput
    connect?: AudioFileWhereUniqueInput
    update?: XOR<XOR<AudioFileUpdateToOneWithWhereWithoutSavedByInput, AudioFileUpdateWithoutSavedByInput>, AudioFileUncheckedUpdateWithoutSavedByInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserAudioFileCreateWithoutUserInput = {
    id?: string
    addedAt?: Date | string
    audioFile: AudioFileCreateNestedOneWithoutSavedByInput
  }

  export type UserAudioFileUncheckedCreateWithoutUserInput = {
    id?: string
    audioId: string
    addedAt?: Date | string
  }

  export type UserAudioFileCreateOrConnectWithoutUserInput = {
    where: UserAudioFileWhereUniqueInput
    create: XOR<UserAudioFileCreateWithoutUserInput, UserAudioFileUncheckedCreateWithoutUserInput>
  }

  export type UserAudioFileCreateManyUserInputEnvelope = {
    data: UserAudioFileCreateManyUserInput | UserAudioFileCreateManyUserInput[]
  }

  export type UserInterestCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    interest: InterestCreateNestedOneWithoutUsersInput
  }

  export type UserInterestUncheckedCreateWithoutUserInput = {
    id?: string
    interestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInterestCreateOrConnectWithoutUserInput = {
    where: UserInterestWhereUniqueInput
    create: XOR<UserInterestCreateWithoutUserInput, UserInterestUncheckedCreateWithoutUserInput>
  }

  export type UserInterestCreateManyUserInputEnvelope = {
    data: UserInterestCreateManyUserInput | UserInterestCreateManyUserInput[]
  }

  export type UserAudioFileUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAudioFileWhereUniqueInput
    update: XOR<UserAudioFileUpdateWithoutUserInput, UserAudioFileUncheckedUpdateWithoutUserInput>
    create: XOR<UserAudioFileCreateWithoutUserInput, UserAudioFileUncheckedCreateWithoutUserInput>
  }

  export type UserAudioFileUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAudioFileWhereUniqueInput
    data: XOR<UserAudioFileUpdateWithoutUserInput, UserAudioFileUncheckedUpdateWithoutUserInput>
  }

  export type UserAudioFileUpdateManyWithWhereWithoutUserInput = {
    where: UserAudioFileScalarWhereInput
    data: XOR<UserAudioFileUpdateManyMutationInput, UserAudioFileUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAudioFileScalarWhereInput = {
    AND?: UserAudioFileScalarWhereInput | UserAudioFileScalarWhereInput[]
    OR?: UserAudioFileScalarWhereInput[]
    NOT?: UserAudioFileScalarWhereInput | UserAudioFileScalarWhereInput[]
    id?: StringFilter<"UserAudioFile"> | string
    userId?: StringFilter<"UserAudioFile"> | string
    audioId?: StringFilter<"UserAudioFile"> | string
    addedAt?: DateTimeFilter<"UserAudioFile"> | Date | string
  }

  export type UserInterestUpsertWithWhereUniqueWithoutUserInput = {
    where: UserInterestWhereUniqueInput
    update: XOR<UserInterestUpdateWithoutUserInput, UserInterestUncheckedUpdateWithoutUserInput>
    create: XOR<UserInterestCreateWithoutUserInput, UserInterestUncheckedCreateWithoutUserInput>
  }

  export type UserInterestUpdateWithWhereUniqueWithoutUserInput = {
    where: UserInterestWhereUniqueInput
    data: XOR<UserInterestUpdateWithoutUserInput, UserInterestUncheckedUpdateWithoutUserInput>
  }

  export type UserInterestUpdateManyWithWhereWithoutUserInput = {
    where: UserInterestScalarWhereInput
    data: XOR<UserInterestUpdateManyMutationInput, UserInterestUncheckedUpdateManyWithoutUserInput>
  }

  export type UserInterestScalarWhereInput = {
    AND?: UserInterestScalarWhereInput | UserInterestScalarWhereInput[]
    OR?: UserInterestScalarWhereInput[]
    NOT?: UserInterestScalarWhereInput | UserInterestScalarWhereInput[]
    id?: StringFilter<"UserInterest"> | string
    userId?: StringFilter<"UserInterest"> | string
    interestId?: StringFilter<"UserInterest"> | string
    createdAt?: DateTimeFilter<"UserInterest"> | Date | string
    updatedAt?: DateTimeFilter<"UserInterest"> | Date | string
  }

  export type UserInterestCreateWithoutInterestInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInterestsInput
  }

  export type UserInterestUncheckedCreateWithoutInterestInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInterestCreateOrConnectWithoutInterestInput = {
    where: UserInterestWhereUniqueInput
    create: XOR<UserInterestCreateWithoutInterestInput, UserInterestUncheckedCreateWithoutInterestInput>
  }

  export type UserInterestCreateManyInterestInputEnvelope = {
    data: UserInterestCreateManyInterestInput | UserInterestCreateManyInterestInput[]
  }

  export type UserInterestUpsertWithWhereUniqueWithoutInterestInput = {
    where: UserInterestWhereUniqueInput
    update: XOR<UserInterestUpdateWithoutInterestInput, UserInterestUncheckedUpdateWithoutInterestInput>
    create: XOR<UserInterestCreateWithoutInterestInput, UserInterestUncheckedCreateWithoutInterestInput>
  }

  export type UserInterestUpdateWithWhereUniqueWithoutInterestInput = {
    where: UserInterestWhereUniqueInput
    data: XOR<UserInterestUpdateWithoutInterestInput, UserInterestUncheckedUpdateWithoutInterestInput>
  }

  export type UserInterestUpdateManyWithWhereWithoutInterestInput = {
    where: UserInterestScalarWhereInput
    data: XOR<UserInterestUpdateManyMutationInput, UserInterestUncheckedUpdateManyWithoutInterestInput>
  }

  export type UserCreateWithoutInterestsInput = {
    id: string
    firebaseId: string
    email?: string | null
    playlistItems?: UserAudioFileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInterestsInput = {
    id: string
    firebaseId: string
    email?: string | null
    playlistItems?: UserAudioFileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInterestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
  }

  export type InterestCreateWithoutUsersInput = {
    id?: string
    name: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterestUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterestCreateOrConnectWithoutUsersInput = {
    where: InterestWhereUniqueInput
    create: XOR<InterestCreateWithoutUsersInput, InterestUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutInterestsInput = {
    update: XOR<UserUpdateWithoutInterestsInput, UserUncheckedUpdateWithoutInterestsInput>
    create: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInterestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInterestsInput, UserUncheckedUpdateWithoutInterestsInput>
  }

  export type UserUpdateWithoutInterestsInput = {
    firebaseId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    playlistItems?: UserAudioFileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInterestsInput = {
    firebaseId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    playlistItems?: UserAudioFileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InterestUpsertWithoutUsersInput = {
    update: XOR<InterestUpdateWithoutUsersInput, InterestUncheckedUpdateWithoutUsersInput>
    create: XOR<InterestCreateWithoutUsersInput, InterestUncheckedCreateWithoutUsersInput>
    where?: InterestWhereInput
  }

  export type InterestUpdateToOneWithWhereWithoutUsersInput = {
    where?: InterestWhereInput
    data: XOR<InterestUpdateWithoutUsersInput, InterestUncheckedUpdateWithoutUsersInput>
  }

  export type InterestUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterestUncheckedUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PodcastSummaryCreateWithoutAudioInput = {
    id?: string
    title: string
    summary: string
    keywords?: PodcastSummaryCreatekeywordsInput | string[]
  }

  export type PodcastSummaryUncheckedCreateWithoutAudioInput = {
    id?: string
    title: string
    summary: string
    keywords?: PodcastSummaryCreatekeywordsInput | string[]
  }

  export type PodcastSummaryCreateOrConnectWithoutAudioInput = {
    where: PodcastSummaryWhereUniqueInput
    create: XOR<PodcastSummaryCreateWithoutAudioInput, PodcastSummaryUncheckedCreateWithoutAudioInput>
  }

  export type UserAudioFileCreateWithoutAudioFileInput = {
    id?: string
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutPlaylistItemsInput
  }

  export type UserAudioFileUncheckedCreateWithoutAudioFileInput = {
    id?: string
    userId: string
    addedAt?: Date | string
  }

  export type UserAudioFileCreateOrConnectWithoutAudioFileInput = {
    where: UserAudioFileWhereUniqueInput
    create: XOR<UserAudioFileCreateWithoutAudioFileInput, UserAudioFileUncheckedCreateWithoutAudioFileInput>
  }

  export type UserAudioFileCreateManyAudioFileInputEnvelope = {
    data: UserAudioFileCreateManyAudioFileInput | UserAudioFileCreateManyAudioFileInput[]
  }

  export type PodcastSummaryUpsertWithoutAudioInput = {
    update: XOR<PodcastSummaryUpdateWithoutAudioInput, PodcastSummaryUncheckedUpdateWithoutAudioInput>
    create: XOR<PodcastSummaryCreateWithoutAudioInput, PodcastSummaryUncheckedCreateWithoutAudioInput>
    where?: PodcastSummaryWhereInput
  }

  export type PodcastSummaryUpdateToOneWithWhereWithoutAudioInput = {
    where?: PodcastSummaryWhereInput
    data: XOR<PodcastSummaryUpdateWithoutAudioInput, PodcastSummaryUncheckedUpdateWithoutAudioInput>
  }

  export type PodcastSummaryUpdateWithoutAudioInput = {
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    keywords?: PodcastSummaryUpdatekeywordsInput | string[]
  }

  export type PodcastSummaryUncheckedUpdateWithoutAudioInput = {
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    keywords?: PodcastSummaryUpdatekeywordsInput | string[]
  }

  export type UserAudioFileUpsertWithWhereUniqueWithoutAudioFileInput = {
    where: UserAudioFileWhereUniqueInput
    update: XOR<UserAudioFileUpdateWithoutAudioFileInput, UserAudioFileUncheckedUpdateWithoutAudioFileInput>
    create: XOR<UserAudioFileCreateWithoutAudioFileInput, UserAudioFileUncheckedCreateWithoutAudioFileInput>
  }

  export type UserAudioFileUpdateWithWhereUniqueWithoutAudioFileInput = {
    where: UserAudioFileWhereUniqueInput
    data: XOR<UserAudioFileUpdateWithoutAudioFileInput, UserAudioFileUncheckedUpdateWithoutAudioFileInput>
  }

  export type UserAudioFileUpdateManyWithWhereWithoutAudioFileInput = {
    where: UserAudioFileScalarWhereInput
    data: XOR<UserAudioFileUpdateManyMutationInput, UserAudioFileUncheckedUpdateManyWithoutAudioFileInput>
  }

  export type AudioFileCreateWithoutSummaryInput = {
    id?: string
    s3Key: string
    originalName?: string | null
    contentType: string
    url: string
    uploadDate?: Date | string
    savedBy?: UserAudioFileCreateNestedManyWithoutAudioFileInput
  }

  export type AudioFileUncheckedCreateWithoutSummaryInput = {
    id?: string
    s3Key: string
    originalName?: string | null
    contentType: string
    url: string
    uploadDate?: Date | string
    savedBy?: UserAudioFileUncheckedCreateNestedManyWithoutAudioFileInput
  }

  export type AudioFileCreateOrConnectWithoutSummaryInput = {
    where: AudioFileWhereUniqueInput
    create: XOR<AudioFileCreateWithoutSummaryInput, AudioFileUncheckedCreateWithoutSummaryInput>
  }

  export type AudioFileUpsertWithoutSummaryInput = {
    update: XOR<AudioFileUpdateWithoutSummaryInput, AudioFileUncheckedUpdateWithoutSummaryInput>
    create: XOR<AudioFileCreateWithoutSummaryInput, AudioFileUncheckedCreateWithoutSummaryInput>
    where?: AudioFileWhereInput
  }

  export type AudioFileUpdateToOneWithWhereWithoutSummaryInput = {
    where?: AudioFileWhereInput
    data: XOR<AudioFileUpdateWithoutSummaryInput, AudioFileUncheckedUpdateWithoutSummaryInput>
  }

  export type AudioFileUpdateWithoutSummaryInput = {
    s3Key?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: UserAudioFileUpdateManyWithoutAudioFileNestedInput
  }

  export type AudioFileUncheckedUpdateWithoutSummaryInput = {
    s3Key?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: UserAudioFileUncheckedUpdateManyWithoutAudioFileNestedInput
  }

  export type UserCreateWithoutPlaylistItemsInput = {
    id: string
    firebaseId: string
    email?: string | null
    interests?: UserInterestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistItemsInput = {
    id: string
    firebaseId: string
    email?: string | null
    interests?: UserInterestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistItemsInput, UserUncheckedCreateWithoutPlaylistItemsInput>
  }

  export type AudioFileCreateWithoutSavedByInput = {
    id?: string
    s3Key: string
    originalName?: string | null
    contentType: string
    url: string
    uploadDate?: Date | string
    summary?: PodcastSummaryCreateNestedOneWithoutAudioInput
  }

  export type AudioFileUncheckedCreateWithoutSavedByInput = {
    id?: string
    s3Key: string
    originalName?: string | null
    contentType: string
    url: string
    uploadDate?: Date | string
    summary?: PodcastSummaryUncheckedCreateNestedOneWithoutAudioInput
  }

  export type AudioFileCreateOrConnectWithoutSavedByInput = {
    where: AudioFileWhereUniqueInput
    create: XOR<AudioFileCreateWithoutSavedByInput, AudioFileUncheckedCreateWithoutSavedByInput>
  }

  export type UserUpsertWithoutPlaylistItemsInput = {
    update: XOR<UserUpdateWithoutPlaylistItemsInput, UserUncheckedUpdateWithoutPlaylistItemsInput>
    create: XOR<UserCreateWithoutPlaylistItemsInput, UserUncheckedCreateWithoutPlaylistItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistItemsInput, UserUncheckedUpdateWithoutPlaylistItemsInput>
  }

  export type UserUpdateWithoutPlaylistItemsInput = {
    firebaseId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserInterestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistItemsInput = {
    firebaseId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserInterestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AudioFileUpsertWithoutSavedByInput = {
    update: XOR<AudioFileUpdateWithoutSavedByInput, AudioFileUncheckedUpdateWithoutSavedByInput>
    create: XOR<AudioFileCreateWithoutSavedByInput, AudioFileUncheckedCreateWithoutSavedByInput>
    where?: AudioFileWhereInput
  }

  export type AudioFileUpdateToOneWithWhereWithoutSavedByInput = {
    where?: AudioFileWhereInput
    data: XOR<AudioFileUpdateWithoutSavedByInput, AudioFileUncheckedUpdateWithoutSavedByInput>
  }

  export type AudioFileUpdateWithoutSavedByInput = {
    s3Key?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: PodcastSummaryUpdateOneWithoutAudioNestedInput
  }

  export type AudioFileUncheckedUpdateWithoutSavedByInput = {
    s3Key?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: PodcastSummaryUncheckedUpdateOneWithoutAudioNestedInput
  }

  export type UserAudioFileCreateManyUserInput = {
    id?: string
    audioId: string
    addedAt?: Date | string
  }

  export type UserInterestCreateManyUserInput = {
    id?: string
    interestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAudioFileUpdateWithoutUserInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audioFile?: AudioFileUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type UserAudioFileUncheckedUpdateWithoutUserInput = {
    audioId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAudioFileUncheckedUpdateManyWithoutUserInput = {
    audioId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInterestUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interest?: InterestUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserInterestUncheckedUpdateWithoutUserInput = {
    interestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInterestUncheckedUpdateManyWithoutUserInput = {
    interestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInterestCreateManyInterestInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInterestUpdateWithoutInterestInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type UserInterestUncheckedUpdateWithoutInterestInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInterestUncheckedUpdateManyWithoutInterestInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAudioFileCreateManyAudioFileInput = {
    id?: string
    userId: string
    addedAt?: Date | string
  }

  export type UserAudioFileUpdateWithoutAudioFileInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlaylistItemsNestedInput
  }

  export type UserAudioFileUncheckedUpdateWithoutAudioFileInput = {
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAudioFileUncheckedUpdateManyWithoutAudioFileInput = {
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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