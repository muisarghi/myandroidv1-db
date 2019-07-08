module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAuthPayload {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateDiskusi {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateLomba {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AuthPayload {
  id: ID!
  token: String
  user: User
  updatedAt: DateTime!
  createdAt: DateTime!
}

type AuthPayloadConnection {
  pageInfo: PageInfo!
  edges: [AuthPayloadEdge]!
  aggregate: AggregateAuthPayload!
}

input AuthPayloadCreateInput {
  id: ID
  token: String
  user: UserCreateOneInput
}

type AuthPayloadEdge {
  node: AuthPayload!
  cursor: String!
}

enum AuthPayloadOrderByInput {
  id_ASC
  id_DESC
  token_ASC
  token_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AuthPayloadPreviousValues {
  id: ID!
  token: String
  updatedAt: DateTime!
  createdAt: DateTime!
}

type AuthPayloadSubscriptionPayload {
  mutation: MutationType!
  node: AuthPayload
  updatedFields: [String!]
  previousValues: AuthPayloadPreviousValues
}

input AuthPayloadSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AuthPayloadWhereInput
  AND: [AuthPayloadSubscriptionWhereInput!]
  OR: [AuthPayloadSubscriptionWhereInput!]
  NOT: [AuthPayloadSubscriptionWhereInput!]
}

input AuthPayloadUpdateInput {
  token: String
  user: UserUpdateOneInput
}

input AuthPayloadUpdateManyMutationInput {
  token: String
}

input AuthPayloadWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  user: UserWhereInput
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [AuthPayloadWhereInput!]
  OR: [AuthPayloadWhereInput!]
  NOT: [AuthPayloadWhereInput!]
}

input AuthPayloadWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Comment {
  id: ID!
  createdAt: DateTime!
  text: String!
  writtenBy: User!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  id: ID
  text: String!
  writtenBy: UserCreateOneInput!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
}

type CommentPreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  text: String
  writtenBy: UserUpdateOneRequiredInput
}

input CommentUpdateManyMutationInput {
  text: String
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  writtenBy: UserWhereInput
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

type Diskusi {
  id: ID!
  createdAt: DateTime!
  judul: String!
  isi: String!
  writtenBy: User!
}

type DiskusiConnection {
  pageInfo: PageInfo!
  edges: [DiskusiEdge]!
  aggregate: AggregateDiskusi!
}

input DiskusiCreateInput {
  id: ID
  judul: String!
  isi: String!
  writtenBy: UserCreateOneInput!
}

type DiskusiEdge {
  node: Diskusi!
  cursor: String!
}

enum DiskusiOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  judul_ASC
  judul_DESC
  isi_ASC
  isi_DESC
}

type DiskusiPreviousValues {
  id: ID!
  createdAt: DateTime!
  judul: String!
  isi: String!
}

type DiskusiSubscriptionPayload {
  mutation: MutationType!
  node: Diskusi
  updatedFields: [String!]
  previousValues: DiskusiPreviousValues
}

input DiskusiSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DiskusiWhereInput
  AND: [DiskusiSubscriptionWhereInput!]
  OR: [DiskusiSubscriptionWhereInput!]
  NOT: [DiskusiSubscriptionWhereInput!]
}

input DiskusiUpdateInput {
  judul: String
  isi: String
  writtenBy: UserUpdateOneRequiredInput
}

input DiskusiUpdateManyMutationInput {
  judul: String
  isi: String
}

input DiskusiWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  judul: String
  judul_not: String
  judul_in: [String!]
  judul_not_in: [String!]
  judul_lt: String
  judul_lte: String
  judul_gt: String
  judul_gte: String
  judul_contains: String
  judul_not_contains: String
  judul_starts_with: String
  judul_not_starts_with: String
  judul_ends_with: String
  judul_not_ends_with: String
  isi: String
  isi_not: String
  isi_in: [String!]
  isi_not_in: [String!]
  isi_lt: String
  isi_lte: String
  isi_gt: String
  isi_gte: String
  isi_contains: String
  isi_not_contains: String
  isi_starts_with: String
  isi_not_starts_with: String
  isi_ends_with: String
  isi_not_ends_with: String
  writtenBy: UserWhereInput
  AND: [DiskusiWhereInput!]
  OR: [DiskusiWhereInput!]
  NOT: [DiskusiWhereInput!]
}

input DiskusiWhereUniqueInput {
  id: ID
}

type File {
  id: ID!
  createdAt: DateTime!
  file: String!
  writtenBy: User!
}

type FileConnection {
  pageInfo: PageInfo!
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  id: ID
  file: String!
  writtenBy: UserCreateOneInput!
}

type FileEdge {
  node: File!
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  file_ASC
  file_DESC
}

type FilePreviousValues {
  id: ID!
  createdAt: DateTime!
  file: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FileWhereInput
  AND: [FileSubscriptionWhereInput!]
  OR: [FileSubscriptionWhereInput!]
  NOT: [FileSubscriptionWhereInput!]
}

input FileUpdateInput {
  file: String
  writtenBy: UserUpdateOneRequiredInput
}

input FileUpdateManyMutationInput {
  file: String
}

input FileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  file: String
  file_not: String
  file_in: [String!]
  file_not_in: [String!]
  file_lt: String
  file_lte: String
  file_gt: String
  file_gte: String
  file_contains: String
  file_not_contains: String
  file_starts_with: String
  file_not_starts_with: String
  file_ends_with: String
  file_not_ends_with: String
  writtenBy: UserWhereInput
  AND: [FileWhereInput!]
  OR: [FileWhereInput!]
  NOT: [FileWhereInput!]
}

input FileWhereUniqueInput {
  id: ID
}

type Lomba {
  id: ID!
  createdAt: DateTime!
  lomba: String!
  ketlomba: String!
}

type LombaConnection {
  pageInfo: PageInfo!
  edges: [LombaEdge]!
  aggregate: AggregateLomba!
}

input LombaCreateInput {
  id: ID
  lomba: String!
  ketlomba: String!
}

type LombaEdge {
  node: Lomba!
  cursor: String!
}

enum LombaOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  lomba_ASC
  lomba_DESC
  ketlomba_ASC
  ketlomba_DESC
}

type LombaPreviousValues {
  id: ID!
  createdAt: DateTime!
  lomba: String!
  ketlomba: String!
}

type LombaSubscriptionPayload {
  mutation: MutationType!
  node: Lomba
  updatedFields: [String!]
  previousValues: LombaPreviousValues
}

input LombaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LombaWhereInput
  AND: [LombaSubscriptionWhereInput!]
  OR: [LombaSubscriptionWhereInput!]
  NOT: [LombaSubscriptionWhereInput!]
}

input LombaUpdateInput {
  lomba: String
  ketlomba: String
}

input LombaUpdateManyMutationInput {
  lomba: String
  ketlomba: String
}

input LombaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  lomba: String
  lomba_not: String
  lomba_in: [String!]
  lomba_not_in: [String!]
  lomba_lt: String
  lomba_lte: String
  lomba_gt: String
  lomba_gte: String
  lomba_contains: String
  lomba_not_contains: String
  lomba_starts_with: String
  lomba_not_starts_with: String
  lomba_ends_with: String
  lomba_not_ends_with: String
  ketlomba: String
  ketlomba_not: String
  ketlomba_in: [String!]
  ketlomba_not_in: [String!]
  ketlomba_lt: String
  ketlomba_lte: String
  ketlomba_gt: String
  ketlomba_gte: String
  ketlomba_contains: String
  ketlomba_not_contains: String
  ketlomba_starts_with: String
  ketlomba_not_starts_with: String
  ketlomba_ends_with: String
  ketlomba_not_ends_with: String
  AND: [LombaWhereInput!]
  OR: [LombaWhereInput!]
  NOT: [LombaWhereInput!]
}

input LombaWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAuthPayload(data: AuthPayloadCreateInput!): AuthPayload!
  updateAuthPayload(data: AuthPayloadUpdateInput!, where: AuthPayloadWhereUniqueInput!): AuthPayload
  updateManyAuthPayloads(data: AuthPayloadUpdateManyMutationInput!, where: AuthPayloadWhereInput): BatchPayload!
  upsertAuthPayload(where: AuthPayloadWhereUniqueInput!, create: AuthPayloadCreateInput!, update: AuthPayloadUpdateInput!): AuthPayload!
  deleteAuthPayload(where: AuthPayloadWhereUniqueInput!): AuthPayload
  deleteManyAuthPayloads(where: AuthPayloadWhereInput): BatchPayload!
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createDiskusi(data: DiskusiCreateInput!): Diskusi!
  updateDiskusi(data: DiskusiUpdateInput!, where: DiskusiWhereUniqueInput!): Diskusi
  updateManyDiskusis(data: DiskusiUpdateManyMutationInput!, where: DiskusiWhereInput): BatchPayload!
  upsertDiskusi(where: DiskusiWhereUniqueInput!, create: DiskusiCreateInput!, update: DiskusiUpdateInput!): Diskusi!
  deleteDiskusi(where: DiskusiWhereUniqueInput!): Diskusi
  deleteManyDiskusis(where: DiskusiWhereInput): BatchPayload!
  createFile(data: FileCreateInput!): File!
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  deleteFile(where: FileWhereUniqueInput!): File
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  createLomba(data: LombaCreateInput!): Lomba!
  updateLomba(data: LombaUpdateInput!, where: LombaWhereUniqueInput!): Lomba
  updateManyLombas(data: LombaUpdateManyMutationInput!, where: LombaWhereInput): BatchPayload!
  upsertLomba(where: LombaWhereUniqueInput!, create: LombaCreateInput!, update: LombaUpdateInput!): Lomba!
  deleteLomba(where: LombaWhereUniqueInput!): Lomba
  deleteManyLombas(where: LombaWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  title: String!
  content: String!
  published: Boolean!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  id: ID
  title: String!
  content: String!
  published: Boolean!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  published_ASC
  published_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  content: String!
  published: Boolean!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  title: String
  content: String
  published: Boolean
}

input PostUpdateManyMutationInput {
  title: String
  content: String
  published: Boolean
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  published: Boolean
  published_not: Boolean
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  authPayload(where: AuthPayloadWhereUniqueInput!): AuthPayload
  authPayloads(where: AuthPayloadWhereInput, orderBy: AuthPayloadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AuthPayload]!
  authPayloadsConnection(where: AuthPayloadWhereInput, orderBy: AuthPayloadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthPayloadConnection!
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  diskusi(where: DiskusiWhereUniqueInput!): Diskusi
  diskusis(where: DiskusiWhereInput, orderBy: DiskusiOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Diskusi]!
  diskusisConnection(where: DiskusiWhereInput, orderBy: DiskusiOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DiskusiConnection!
  file(where: FileWhereUniqueInput!): File
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  lomba(where: LombaWhereUniqueInput!): Lomba
  lombas(where: LombaWhereInput, orderBy: LombaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lomba]!
  lombasConnection(where: LombaWhereInput, orderBy: LombaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LombaConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  authPayload(where: AuthPayloadSubscriptionWhereInput): AuthPayloadSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  diskusi(where: DiskusiSubscriptionWhereInput): DiskusiSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  lomba(where: LombaSubscriptionWhereInput): LombaSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
}

input UserUpdateInput {
  name: String
  email: String
  password: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    