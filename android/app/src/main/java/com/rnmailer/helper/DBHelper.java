package com.rnmailer.helper;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.provider.BaseColumns;

import com.rnmailer.model.DBModel;

public class DBHelper extends SQLiteOpenHelper {
    private static DBHelper instance;

    private static final String SQL_CREATE_ENTRIES =
            "CREATE TABLE " + DBModel.DBEntry.TABLE_NAME + " (" +
                    DBModel.DBEntry._ID + " INTEGER PRIMARY KEY," +
                    DBModel.DBEntry.COLUMN_NAME_KEY + " TEXT," +
                    DBModel.DBEntry.COLUMN_NAME_DATA_ID + " TEXT," +
                    DBModel.DBEntry.COLUMN_NAME_DATA + " TEXT," +
                    DBModel.DBEntry.COLUMN_NAME_EXPIRES + " INTEGER)";

    private static final String SQL_DELETE_ENTRIES =
            "DROP TABLE IF EXISTS " + DBModel.DBEntry.TABLE_NAME;

    // If you change the database schema, you must increment the database version.
    public static final int DATABASE_VERSION = 1;
    public static final String DATABASE_NAME = "Email.db";

    public static DBHelper getInstance(Context context) {
        if (instance == null) instance = new DBHelper(context);
        return instance;
    }

    private DBHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    public void onCreate(SQLiteDatabase db) {
        db.execSQL(SQL_CREATE_ENTRIES);
    }

    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        // This database is only a cache for online data, so its upgrade policy is
        // to simply to discard the data and start over
        db.execSQL(SQL_DELETE_ENTRIES);
        onCreate(db);
    }

    public void onDowngrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        onUpgrade(db, oldVersion, newVersion);
    }


    ///////////  数据读写方法  //////////

    public long insert(String key, String id, String data, long expires) {
        // Gets the data repository in write mode
        SQLiteDatabase db = getWritableDatabase();

        // Create a new map of values, where column names are the keys
        ContentValues values = new ContentValues();
        values.put(DBModel.DBEntry.COLUMN_NAME_KEY, key);
        values.put(DBModel.DBEntry.COLUMN_NAME_DATA_ID, id);
        values.put(DBModel.DBEntry.COLUMN_NAME_DATA, data);
        values.put(DBModel.DBEntry.COLUMN_NAME_EXPIRES, expires);

        // Insert the new row, returning the primary key value of the new row
        return db.insert(DBModel.DBEntry.TABLE_NAME, null, values);
    }

    public String query(String key, String id) {
        SQLiteDatabase db = getReadableDatabase();

        // Define a projection that specifies which columns from the database
        // you will actually use after this query.
        String[] projection = {
                BaseColumns._ID,
                DBModel.DBEntry.COLUMN_NAME_KEY,
                DBModel.DBEntry.COLUMN_NAME_DATA_ID,
                DBModel.DBEntry.COLUMN_NAME_DATA,
                DBModel.DBEntry.COLUMN_NAME_EXPIRES
        };

        // Filter results WHERE "title" = 'My Title'
        String selection = DBModel.DBEntry.COLUMN_NAME_KEY + " = ?" +
                " and " + DBModel.DBEntry.COLUMN_NAME_DATA_ID + " = ?" +
                " and " + DBModel.DBEntry.COLUMN_NAME_EXPIRES + " > ?";
//        String[] selectionArgs = {key, id};
        String[] selectionArgs = {key, id, String.valueOf(System.currentTimeMillis())};

        // How you want the results sorted in the resulting Cursor
        String sortOrder =
                DBModel.DBEntry.COLUMN_NAME_DATA_ID + " DESC";
//                DBModel.DBEntry.COLUMN_NAME_EXPIRES + " DESC";

        Cursor cursor = db.query(
                DBModel.DBEntry.TABLE_NAME,   // The table to query
                projection,             // The array of columns to return (pass null to get all)
                selection,              // The columns for the WHERE clause
                selectionArgs,          // The values for the WHERE clause
                null,                   // don't group the rows
                null,                   // don't filter by row groups
                sortOrder               // The sort order
        );

        String savedData = null;

        while (cursor.moveToNext()) {
            savedData = cursor.getString(
                    cursor.getColumnIndexOrThrow(DBModel.DBEntry.COLUMN_NAME_DATA));
        }
        cursor.close();

        return savedData;
    }

    public int delete(String key, String id) {
        SQLiteDatabase db = getWritableDatabase();

        // Filter results WHERE "title" = 'My Title'
        String selection = DBModel.DBEntry.COLUMN_NAME_KEY + " = ?" +
                " and " + DBModel.DBEntry.COLUMN_NAME_DATA_ID + " = ?";
        String[] selectionArgs = {key, id};

        return db.delete(DBModel.DBEntry.TABLE_NAME, selection, selectionArgs);
    }

    public int update(String key, String id, String data, long expires) {
        SQLiteDatabase db = getWritableDatabase();

        // New value for one column
        ContentValues values = new ContentValues();
        values.put(DBModel.DBEntry.COLUMN_NAME_DATA, data);
        values.put(DBModel.DBEntry.COLUMN_NAME_EXPIRES, expires);

        // Which row to update, based on the title
        String selection = DBModel.DBEntry.COLUMN_NAME_KEY + " = ?" +
                " and " + DBModel.DBEntry.COLUMN_NAME_DATA_ID + " = ?";
        String[] selectionArgs = {key, id};

        return db.update(
                DBModel.DBEntry.TABLE_NAME,
                values,
                selection,
                selectionArgs);
    }

    public String queryWithoutExpires(String key, String id) {
        SQLiteDatabase db = getReadableDatabase();

        // Define a projection that specifies which columns from the database
        // you will actually use after this query.
        String[] projection = {
                BaseColumns._ID,
                DBModel.DBEntry.COLUMN_NAME_KEY,
                DBModel.DBEntry.COLUMN_NAME_DATA_ID,
                DBModel.DBEntry.COLUMN_NAME_DATA,
                DBModel.DBEntry.COLUMN_NAME_EXPIRES
        };

        // Filter results WHERE "title" = 'My Title'
        String selection = DBModel.DBEntry.COLUMN_NAME_KEY + " = ?" +
                " and " + DBModel.DBEntry.COLUMN_NAME_DATA_ID + " = ?";
        String[] selectionArgs = {key, id};

        // How you want the results sorted in the resulting Cursor
        String sortOrder =
                DBModel.DBEntry.COLUMN_NAME_DATA_ID + " DESC";
//                DBModel.DBEntry.COLUMN_NAME_EXPIRES + " DESC";

        Cursor cursor = db.query(
                DBModel.DBEntry.TABLE_NAME,   // The table to query
                projection,             // The array of columns to return (pass null to get all)
                selection,              // The columns for the WHERE clause
                selectionArgs,          // The values for the WHERE clause
                null,                   // don't group the rows
                null,                   // don't filter by row groups
                sortOrder               // The sort order
        );

        String savedData = null;

        while (cursor.moveToNext()) {
            savedData = cursor.getString(
                    cursor.getColumnIndexOrThrow(DBModel.DBEntry.COLUMN_NAME_DATA));
        }
        cursor.close();

        return savedData;
    }
}
