# insta clone

## User:

- [] Create Account
- [] See Profile
- [] Login
- [] Edit Profile
- [] Follow User
- [] Unfollow User
- [] Change Avatar (Image Upload)

## 3.1 Apollo Server

1. 이전 강의는 graphql-yoga를 이용하였으나 apollo server가 충분히 간단해졌으므로 사용하지 않음.
2. npm i apollo-server graphql
3. 서버 세팅 진행 https://github.com/apollographql/apollo-server

## 3.2 babel

1. 최신 javascript 사용을 위해 babel 설치

## 3.3 POC API

1. Proof of Concept용 영화 API 만들어보기

## 3.4 Prisma Setup

1. Prisma는 ORM(Object Relational Mapper) 객체와 관계형 데이터베이스의 데이터를 자동으로 매핑해주는 것)
2. schema.prisma파일의 datasource는 데이터베이스의 주소(url)와 종류(provider)를 알려주는 역할

## 3.5 Prisma Migrate

1. dev flag로 실행하면 client를 자동으로 만들어줌(설정필요없음)
2. client는 데이터베이스와 어떻게 소통하는지에 대한 설정
3. migration 할때 윈도우 환경의 경우 .env의 database_url 입력 시 비밀번호까지 입력해줘야함

## 3.6 Prisma Client

1. client는 node_module내부에 위치함
