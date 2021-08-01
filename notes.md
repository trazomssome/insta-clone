# insta clone

## User:

- [x] Create Account
- [x] See Profile
- [x] Login
- [ ] Edit Profile
- [ ] Follow User
- [ ] Unfollow User
- [ ] Change Avatar (Image Upload)

## 2.0 Welcome! (02:02)

## 2.1 Requirements (02:12)

## 3.0 Setup (05:00)

## 3.1 Apollo Server (06:44)

1. 이전 강의는 graphql-yoga를 이용하였으나 apollo server가 충분히 간단해졌으므로 사용하지 않음.
2. npm i apollo-server graphql
3. 서버 세팅 진행 https://github.com/apollographql/apollo-server

## 3.2 Babel (08:24)

1. babel 설치

## 3.3 POC API (09:28)

1. Prisma는 ORM(Object Relational Mapper) 객체와 관계형 데이터베이스의 데이터를 자동으로 매핑해주는 것)
2. schema.prisma파일의 datasource는 데이터베이스의 주소(url)와 종류(provider)를 알려주는 역할

## 3.4 Prisma Setup (09:24)

## 3.5 Prisma Migrate (11:41)

1. dev flag로 실행하면 client를 자동으로 만들어줌(설정필요없음)
2. client는 데이터베이스와 어떻게 소통하는지에 대한 설정
3. migration 할때 윈도우 환경의 경우 .env의 database_url 입력 시 비밀번호까지 입력해줘야함

## 3.6 Prisma Client (11:17)

## 3.7 Prisma Client part Two (07:13)

## 3.8 Prisma Studio (03:33)

## 3.9 Architecture part One (08:52)

## 3.10 Architecture part Two (08:51)

1. npm i graphql-tools를 통해 나눠진 파일에 있는 mutation, query, typeDef를 schema로 merging

## 3.11 Dotenv (04:22)

1. dotenv 설치

## 3.12 Recap (08:20)

## 4.0 Create Account part One (10:26)

## 4.1 Create Account part Two (10:51)

1. createAccount mutation 만들기

## 4.2 Create Account part Three (12:56)

1. npm i bcrypt를 통한 Password Hashing

## 4.3 seeProfile (07:37)

1. try/catch 설명

## 4.4 login (11:02)

## 4.5 login part Two and Refactor (12:28)

1. jwt 설치
2. 토큰은 누구나 볼 수 있기 때문에 비밀 정보를 담는 곳이 아니다

## 4.6 Divide and Conquer (06:37)

## 4.7 updateProfile (11:36)

1. prisma는 undefined 값을 보내면 업데이트 하지 않음
2. es6의 ...문법

## 4.8 authentication part One (07:44)

1. 토큰을 모든 곳에 넣는 원시적 방법.. 하지만 별로임

## 4.9 authentication part Two (09:38)

1. 토큰을 http header에 넣기.. 근데 apollo studio에서 넣은건데 나중에는 어떻게 유저한테 전달하지?
2. http header에 들어있는 토큰을 apollo server의 context에 넣기
3. context에 들어가 있는 정보는 모든 resolver에서 접근 가능하다

## 4.10 authentication part Three (10:29)

1. context는 fuction이 될 수도 있다
2. req를 파라미터로 받아서 req.headers.token으로 접근해서 유저의 token을 받아오기
3. 브라우저에서 자동으로 http header를 보내줌, 아이폰/안드로이드도 그런 방식
4. 모든 동작마다 token verify를 실행하기 번거로우니 verify 과정을 분리하고 결과 user만 보내주기로 변경

## 4.11 Protecting Resolvers part One (06:19)

## 4.12 Protecting Resolvers part Two (12:50)

## 4.13 Recap (09:58)

## 4.14 File Upload part One (08:33)

## 4.15 File Upload part Two (09:17)

## 4.16 File Upload part Three (07:22)

## 4.17 File Upload part Four (09:07)

## 4.18 Ejecting from Apollo Server (06:27)

## 4.19 Changing Avatar (11:35)

## 4.20 Followers part One (07:59)

## 4.21 Following User (08:30)

## 4.22 Unfollow User and See Followers (13:52)

## 4.23 Followers Pagination part One (12:14)

## 4.24 Followers Pagination part Two (06:02)

## 4.25 Following Pagination (11:56)

## 4.26 Computed Fields part One (12:50)

## 4.27 Computed Fields part Two (10:15)

## 4.28 Computed Fields part Three (06:39)

## 4.29 Searching Users (07:18)

## 5.0 TS Setup part One (07:58)

## 5.1 TS Setup part Two (09:07)

## 6.0 Photos Model (07:58)

## 6.1 Prisma Fields vs SQL Fields (03:19)

## 6.2 Upload Photo part One (11:55)

## 6.3 Upload Photo part Two (09:11)

## 6.4 Upload Photo part Three (09:03)

## 6.5 seePhoto (07:40)

## 6.6 seeHashtag (14:39)

## 6.7 editPhoto part One (11:09)

## 6.8 editPhoto part Two (10:11)

## 6.9 Like Unlike Photos (11:12)

## 6.10 Like Unlike Photos part Two (07:09)

## 6.11 seeLikes (06:25)

## 6.12 seeFeed (06:56)

## 6.13 Comment on Photos (11:56)

## 6.14 See Photo Comments (07:55)

## 6.15 isMine (04:31)

## 6.16 Delete Comment and Photos (08:13)

## 6.17 editComment (08:04)

## 6.18 protectedResolver Refactor (07:47)

## 6.19 S3 Photo Upload (09:25)

## 6.20 S3 Photo Upload part Two (10:34)

## 6.21 S3 Photo Upload part Three (05:38)

## 7.0 Introduction (03:50)

## 7.1 Models (04:41)

## 7.2 seeRooms (06:26)

## 7.3 sendMessage (12:50)

## 7.4 seeRoom (09:38)

## 7.5 readMessage (11:23)

## 7.6 Super Test (06:39)

## 7.7 Subscriptions Setup part One (10:30)

## 7.8 Subscriptions Setup part Two (12:31)

## 7.9 Filtering Subscriptions part One (06:53)

## 7.10 Filtering Subscriptions part Two (06:09)

## 7.11 Authenticating Subscriptions (15:51)

## 7.12 Recap (08:29)

## 8.0 Create React App (05:04)

## 8.1 Installing All (06:08)

## 8.2 What Does Setup Mean? (02:48)

## 8.3 Router Setup part One (10:29)

## 8.4 Router Setup part Two (10:22)

## 8.5 Auth POC (06:33)

## 8.6 Reactive Variables (08:50)

## 8.7 Introduction to Styled Components (12:17)

## 8.8 Themes on Styled Components (07:33)

## 8.9 GlobalStyles on Styled Components (06:23)

## 9.0 Styled Components (08:27)

## 9.1 React Hook Form (04:42)

## 9.2 GraphQL (12:46)

## 10.0 Introduction (02:47)

## 10.1 Login UI Clone (18:40)

## 10.2 Cleaning Login Code (13:50)

## 10.3 Shared Components (19:01)

## 10.4 Sign Up UI (08:29)

## 10.5 Forms in React (07:36)

## 10.6 Helmet Component (04:10)

## 10.7 React Hook Form (12:13)

## 10.8 React Hook Form is Awesome (14:32)

## 10.9 Apollo Client (04:28)

## 10.10 Login part One (09:26)

## 10.11 Login part Two (10:49)

## 10.12 Create Account (14:23)

## 10.13 Redirecting Users (08:01)

## 10.14 Dark Mode (08:24)

## 11.0 Header and Layout (08:11)

## 11.1 Header part Two (10:24)

## 11.2 Header part Three (12:16)

## 11.3 Avatar (08:34)

## 11.4 Photo Component part One (10:32)

## 11.5 Photo Component part Two (11:59)

## 11.6 isLiked (07:05)

## 11.7 Liking Photos (10:50)

## 11.8 Refetching Queries (06:52)

## 11.9 writeFragment (07:40)

## 11.10 readFragment (08:03)

## 11.11 Comments part One (11:31)

## 11.12 Comments part Two (10:30)

## 11.13 Parsing Hashtags (12:02)

## 11.14 Parsing Hashtags part Two (12:18)

## 11.15 cache Modify (05:10)

## 11.16 Create Comment part One (06:44)

## 11.17 Create Comment part Two (12:22)

## 11.18 Create Comment part Three (07:59)

## 11.19 Delete Comment (12:17)

## 12.0 useParams (08:40)

## 12.1 Queries and Fragments (11:26)

## 12.2 keyFields (08:42)

## 12.3 Follow Unfollow part One (04:49)

## 12.4 Follow Unfollow part Two (12:33)

## 12.5 Follow Unfollow part Three (08:56)

## 12.6 Follow Unfollow part Four (09:49)

## 12.7 Follow Unfollow part Five (04:39)

## 12.8 Web Conclusions (02:42)

## 13.0 Introduction (02:23)

## 13.1 Why Expo is Awesome (12:45)

## 13.2 Why Expo Sucks (08:37)

## 13.3 Our Plan (09:54)

## 13.4 Creating Our Project (08:29)

## 13.5 Working with the Simulator (04:01)

## 13.6 AppLoading (10:06)

## 13.7 AppLoading part Two (05:36)

## 14.0 Your First Navigation (06:39)

## 14.1 Moving Through Screens (09:06)

## 14.2 Navigator Props (11:43)

## 14.3 Dark Mode (07:19)

## 14.4 Welcome Screen (10:05)

## 14.5 Create Account part One (10:44)

## 14.6 Create Account part Two (13:39)

## 14.7 Natural Forms part One (08:22)

## 14.8 Natural Forms part Two (09:29)

## 14.9 Login Screen (10:44)

## 14.10 React Hooks Forms on Native (14:33)

## 14.11 Apollo Client (12:04)

## 14.12 Log In Mutation (13:52)

## 14.13 Create Account Mutation (10:19)

## 14.14 AsyncStorage part One (07:00)

## 14.15 AsyncStorage part Two (07:04)

## 14.16 Recap (05:04)

## 15.0 Tab Navigator (12:58)

## 15.1 Tab Navigator part Two (06:55)

## 15.2 Stack and Tabs (14:04)

## 15.3 Stack and Tabs part Two (07:04)

## 15.4 Apollo Auth (10:17)

## 15.5 FlatList (13:24)

## 15.6 Photo part One (12:48)

## 15.7 Photo part Two (11:50)

## 15.8 Photo part Three (09:26)

## 15.9 Pull to Refresh (07:01)

## 15.10 Infinite Scrolling part One (08:52)

## 15.11 Infinite Scrolling part Two (09:37)

## 15.12 Cache Persist (11:34)

## 15.13 Conclusions (02:37)

## 16.0 Likes part One (16:17)

## 16.1 Likes part Two (11:40)

## 16.2 Header Domination (07:16)

## 16.3 Search part One (10:21)

## 16.4 Search part Two (06:50)

## 16.5 Search part Three (12:25)

## 16.6 Search part Four (09:00)

## 16.7 Photo Screen (13:29)

## 17.0 Modal Navigator (10:40)

## 17.1 Bottom Tabs Navigator (09:14)

## 17.2 Select Photo part One (06:57)

## 17.3 Select Photo part Two (12:05)

## 17.4 Select Photo part Three (10:21)

## 17.5 Select Photo part Four (06:30)

## 17.6 Take Photo part One (13:05)

## 17.7 Take Photo part Two (12:09)

## 17.8 Take Photo part Three (08:28)

## 17.9 Take Photo part Four (07:06)

## 17.10 Take Photo part Five (12:14)

## 17.11 Take Photo part Six (06:56)

## 17.12 Upload Screen part One (12:01)

## 17.13 Upload Screen part Two (12:06)

## 17.14 Upload Screen part Three (13:47)

## 17.15 Upload Screen part Four (10:42)

## 17.16 Conclusions (01:21)

## 18.0 Messages Navigator (10:33)

## 18.1 Rooms Screen part One (11:51)

## 18.2 Rooms Screen part Two (11:49)

## 18.3 Room Screen part One (11:54)

## 18.4 Room Screen part Two (09:20)

## 18.5 Room Screen part Three (09:09)

## 18.6 Room Screen part Four (14:30)

## 18.7 Room Screen part Five (07:17)

## 18.8 Room Screen part Six (09:29)

## 18.9 Subscriptions part One (07:36)

## 18.10 Subscriptions part Two (08:57)

## 18.11 Subscriptions part Three (08:25)

## 18.12 Subscriptions part Four (10:03)

## 18.13 Conclusions (03:54)

## 19.0 Building the Server (09:34)

## 19.1 Deploy to Heroku part One (07:04)

## 19.2 Deploy to Heroku part Two (06:54)

## 19.3 Configuring Databases (12:05)

## 19.4 Migrating (08:15)

## 19.5 Deploy Frontend (09:28)

## 19.6 Building the App (12:15)

## 19.7 Building Conclusions (04:54)

## 20.0 Ejecting from Expo (13:33)

## 20.1 Ejecting from Expo part Two (11:37)

## 20.2 Ejecting Conclusions (08:39)

## 20.3 React Native CLI (11:36)

## 20.4 Conclusions (01:31)
