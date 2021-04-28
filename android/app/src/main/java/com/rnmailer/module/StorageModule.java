package com.rnmailer.module;

import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.rnmailer.helper.DBHelper;

// 存储模块
public class StorageModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext context;

    public StorageModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "StorageModule";
    }

    @ReactMethod
    public void load(String key, String id, Promise promise) {
        String result = DBHelper.getInstance(context).query(key, id);
        promise.resolve(result);
    }

    @ReactMethod
    public void save(String key, String id, String data, String expires, Promise promise) {
        long expiresTime = 0; // 超时时间为0，意味着永远不会过期
        // 转化超时时间
        try {
            expiresTime = System.currentTimeMillis() + Long.parseLong(expires);
        } catch (NumberFormatException e) {
            Log.d("storage", "save: expiresTime infinity");
        }

        DBHelper db = DBHelper.getInstance(context);

        String result = db.queryWithoutExpires(key, id);

        long insertId;
        // 若存在就修改数据
        if (result != null) {
            insertId = db.update(key, id, data, expiresTime);
        } else {
            insertId = db.insert(key, id, data, expiresTime);
        }
        promise.resolve(String.valueOf(insertId));
    }

}
