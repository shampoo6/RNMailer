package com.rnmailer.module;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

// 通知模块
public class NotificationModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext context;

    public NotificationModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "NotificationModule";
    }


}
