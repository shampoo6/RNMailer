package com.rnmailer.module;

import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

/**
 * 测试用 alert 自定义 java 模块
 */
public class AlertModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    public AlertModule(@Nullable ReactApplicationContext context) {
        super(reactContext);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "AlertModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        HashMap<String, Object> constants = new HashMap<>();
        constants.put("SHORT", Toast.LENGTH_SHORT);
        constants.put("LONG", Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void alert(String msg, int duration, Promise promise) {
        Toast.makeText(reactContext, msg, duration).show();

        WritableMap params = Arguments.createMap();
        params.putString("massage", "alert over");
        sendEvent(reactContext, "AlertOver", params);

        promise.resolve("ok");
    }

    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}
