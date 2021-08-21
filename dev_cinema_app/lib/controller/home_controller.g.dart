// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'home_controller.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_brace_in_string_interps, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic

mixin _$HomeController on _HomeController, Store {
  final _$_moviesAtom = Atom(name: '_HomeController._movies');

  @override
  ObservableList<Search> get _movies {
    _$_moviesAtom.reportRead();
    return super._movies;
  }

  @override
  set _movies(ObservableList<Search> value) {
    _$_moviesAtom.reportWrite(value, super._movies, () {
      super._movies = value;
    });
  }

  final _$_moviesFavoriteAtom = Atom(name: '_HomeController._moviesFavorite');

  @override
  ObservableList<Search> get _moviesFavorite {
    _$_moviesFavoriteAtom.reportRead();
    return super._moviesFavorite;
  }

  @override
  set _moviesFavorite(ObservableList<Search> value) {
    _$_moviesFavoriteAtom.reportWrite(value, super._moviesFavorite, () {
      super._moviesFavorite = value;
    });
  }

  final _$listAsyncAction = AsyncAction('_HomeController.list');

  @override
  Future list(String value) {
    return _$listAsyncAction.run(() => super.list(value));
  }

  final _$_HomeControllerActionController =
      ActionController(name: '_HomeController');

  @override
  dynamic addListFavorite(Search search) {
    final _$actionInfo = _$_HomeControllerActionController.startAction(
        name: '_HomeController.addListFavorite');
    try {
      return super.addListFavorite(search);
    } finally {
      _$_HomeControllerActionController.endAction(_$actionInfo);
    }
  }

  @override
  String toString() {
    return '''

    ''';
  }
}
