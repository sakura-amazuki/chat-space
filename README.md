# README

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|mail|string|null: false, funique: false|
|password|string|null: false|

### Association
- belongs_to :user_group

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|

### Association
- belongs_to :user_group

## user_groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


## chatテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true|
|group_id|string|foreign_key: true|
|text|string|null: false|

### Association
- belongs_to :group
- belongs_to :user


