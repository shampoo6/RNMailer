package com.rnmailer.receiver;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

import com.rnmailer.helper.AlarmHelper;
import com.rnmailer.helper.NotificationHelper;

// 启动广播接收器
public class BootUpReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        NotificationHelper.getInstance().createNotificationChannel(context);
        AlarmHelper.getInstance().registerAlarm(context);
    }

}
