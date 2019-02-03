# README

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|mail|string|null: false, funique: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :user_groups
- has_many :groups, through: :user_groups

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :user_groups
- has_many :users, through: :user_groups


## user_groupテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|refference|foreign_key: true|
|group_id|refference|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


## messageテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|refference|foreign_key: true|
|group_id|refference|foreign_key: true|
|text|string||
|image|string||

### Association
- belongs_to :group
- belongs_to :user


