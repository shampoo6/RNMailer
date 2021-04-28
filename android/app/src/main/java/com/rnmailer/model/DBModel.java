package com.rnmailer.model;

import android.provider.BaseColumns;

public final class DBModel {
    // To prevent someone from accidentally instantiating the contract class,
    // make the constructor private.
    private DBModel() {
    }

    /* Inner class that defines the table contents */
    public static class DBEntry implements BaseColumns {
        public static final String TABLE_NAME = "entry";
        // 数据的key
        public static final String COLUMN_NAME_KEY = "data_key";
        // 数据id
        public static final String COLUMN_NAME_DATA_ID = "data_id";
        // 存放的数据
        public static final String COLUMN_NAME_DATA = "data";
        // 期限 用于超时判断
        public static final String COLUMN_NAME_EXPIRES = "data_expires";
    }
}