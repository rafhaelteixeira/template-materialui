import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Grid, Card, CardHeader, CardContent, Button, TextField } from '@mui/material';

const EditarTarefa = ({ handleCloseEditar, idTarefaSelecionada, tarefas, tarefa, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    setIdTarefa(idTarefaSelecionada);
    setTituloTarefa(tarefa.tituloTarefa);
    setDescricaoTarefa(tarefa.descricaoTarefa);
    setInicioTarefa(tarefa.inicioTarefa);
    setFimTarefa(tarefa.fimTarefa);
    setRecursoTarefa(tarefa.recursoTarefa);
    setStatusTarefa(tarefa.statusTarefa);
  }, [idTarefaSelecionada, tarefa]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleEditar = () => {
    setTarefas(current =>
      current.map(obj => {
        if (obj.idTarefa === idTarefaSelecionada) {
          return { ...obj, idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, recursoTarefa, statusTarefa };
        }
        return obj;
      }),
    );
    handleCloseEditar();
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Card sx={style}>
        <CardHeader
          title="Tarefas"
          subheader="Edição de Tarefas"
          sx={{ textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}
        />
        <CardContent sx={{ width: '95%', maxWidth: '100%', p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="tarefa_titulo"
                label="Título da Tarefa"
                value={tituloTarefa}
                onChange={e => setTituloTarefa(e.target.value)}
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="tarefa_descricao"
                label="Descrição da Tarefa"
                value={descricaoTarefa}
                onChange={e => setDescricaoTarefa(e.target.value)}
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="tarefa_inicio"
                label="Início da Tarefa"
                type="date"
                value={inicioTarefa}
                onChange={e => setInicioTarefa(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="tarefa_fim"
                label="Fim da Tarefa"
                type="date"
                value={fimTarefa}
                onChange={e => setFimTarefa(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="tarefa_recurso">Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  onChange={handleRecurso}
                  label="Recurso"
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="tarefa_status">Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  onChange={handleStatus}
                  label="Status"
                >
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="flex-end" mt={2}>
            <Grid item>
              <Button size="small" variant="contained" onClick={handleEditar}>Salvar</Button>
            </Grid>
            <Grid item>
              <Button size="small" variant="outlined" onClick={handleCloseEditar}>Cancelar</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
  boxShadow: 24,
  borderRadius: 2,
};

export default EditarTarefa;
