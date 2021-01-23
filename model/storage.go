package model

import "time"

const (
	StorageModeDisk = iota + 1
	StorageModePicHost
	StorageModeFileHost
)

type Storage struct {
	Id            int64      `json:"id"`
	Mode          int8       `json:"mode" gorm:"size:16;not null"`
	Name          string     `json:"name" gorm:"size:16;not null"`
	Title         string     `json:"title" gorm:"size:16;not null"`
	Bucket        string     `json:"bucket" gorm:"size:32;not null"`
	Endpoint      string     `json:"endpoint" gorm:"not null"`
	AccessKey     string     `json:"access_key" gorm:"not null"`
	SecretKey     string     `json:"secret_key" gorm:"not null"`
	CustomHost    string     `json:"custom_host" gorm:"not null"`
	ObjectPattern string     `json:"object_pattern" gorm:"size:64;not null"`
	Created       time.Time  `json:"created" gorm:"column:created_at;not null"`
	Updated       time.Time  `json:"updated" gorm:"column:updated_at;not null"`
	Deleted       *time.Time `json:"-" gorm:"column:deleted_at"`
}

func (Storage) TableName() string {
	return "zp_storage"
}
