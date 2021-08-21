import 'package:dev_cinema_app/model/movies_model.dart';
import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:mobx/mobx.dart';

part 'home_controller.g.dart';

class HomeController = _HomeController with _$HomeController;

abstract class _HomeController with Store {
  @observable
  ObservableList<Search> _movies = ObservableList<Search>();

  @observable
  ObservableList<Search> _moviesFavorite = ObservableList<Search>();

  ObservableList<Search> get moviesList => [..._movies].asObservable();
  ObservableList<Search> get moviesFavoriteList =>
      [..._moviesFavorite].asObservable();

  TextEditingController searchView = TextEditingController();

  int get listSizeMovies {
    return _movies.length;
  }

  int get listSizeFavorite {
    return _moviesFavorite.length;
  }

  @action
  addListFavorite(Search search) {
    bool isFound = false;
    if (_moviesFavorite.length == 0) {
      _moviesFavorite.add(search);
      return;
    }

    _moviesFavorite.forEach(
      (element) {
        if (element.imdbID == search.imdbID) {
          isFound = true;
        }
      },
    );
    isFound ? _moviesFavorite.remove(search) : _moviesFavorite.add(search);
  }

  bool moviesIsFavorite(String id) {
    for (var item in _moviesFavorite) {
      if (item.imdbID == id) {
        return true;
      }
    }
    return false;
  }

  _HomeController();

  @action
  list(String value) async {
    var dio = Dio();
    if (value.isNotEmpty && value.length > 2) {
      final response =
          await dio.get('http://www.omdbapi.com/?apikey=925eba28&s=$value');
      if (response.data['Response'] != "False") {
        Movie movie = Movie.fromJson(response.data);
        _movies = movie.search.asObservable() ?? [];
      }
    } else {
      _movies.clear();
    }
  }
}
