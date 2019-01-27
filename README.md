# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## userテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|string|null: false, foreign_key: true|
|mail|string|null: false, funique: true|
|password|string|null: false, foreign_key: true|

### Association


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|gloop_id|integer|null: false, foreign_key: true|
|gloop_name|string|null: false, foreign_key: true|
|user_id|string|null: false, foreign_key: true|

### Association
- belongs_to :user

## chatテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|gloop_id|string|null: false, foreign_key: true|
|text|string|null: false, foreign_key: true|
|time|string|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


