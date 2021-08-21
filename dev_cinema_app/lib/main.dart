import 'package:dev_cinema_app/app/screens/home_page.dart';
import 'package:dev_cinema_app/controller/home_controller.dart';
import 'package:dev_cinema_app/utils/global_variables.dart';
import 'package:dev_cinema_app/utils/routes.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        Provider(create: (_) => new HomeController()),
      ],
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      localizationsDelegates: [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate
      ],
      supportedLocales: [const Locale('pt', 'BR')],
      debugShowCheckedModeBanner: false,
      theme: GlobalVariables.tema(context),
      routes: {
        Routes.HOME: (_) => HomePage(),
      },
    );
  }
}
